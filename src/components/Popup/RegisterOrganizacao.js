import React, { useState } from 'react'
import { Grid, Collapse, IconButton, Alert, Avatar, Typography, TextField, Button, FormControlLabel, Checkbox,FormHelperText } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CloseIcon from '@mui/icons-material/Close';



const RegisterOrganizacao = (props) => {

    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 10 }
    const marginBottom = { marginBottom: 10 }
    const marginTopFinal = { marginTop: 50 }

    const [open, setOpen] = useState(false);
    const [types, setTypes] = useState([])

    const initialValue = {
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        type: types,
        termsAndConditions: false
    }

    const addLoggedIn = async (loggedInData) => {
        const res = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(loggedInData),
        })

        const data = await res.json()

    }


    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Muito curto").required("Necessário"),
        email: Yup.string().email("Coloque um email válido").required("Necessário"),
        phone: Yup.number().typeError("Coloque um número de telefone válido").required('Necessário').min(910000000, "Deve começar em 91, 92, 93 ou 96 e ter 9 digitos").max(970000000, "Deve começar em 91, 92, 93 ou 96 e ter 9 digitos"),
        password: Yup.string().min(6, "Comprimento minimo de 6 caracteres").required("Necessário"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password não é igual").required("Necessário"),
        type: Yup.array().min(1, "Tem que selecionar pelo menos um tipo").required("Necessário"),
        termsAndConditions: Yup.string().oneOf(["true"], "Aceite os termos e condições")
    })

    const onSubmit = (values) => {

        props.changePopup("isRegisterOrganizacao")

        addLoggedIn({ ...values, isLoggedIn: false, typePerfil: "organizacao" })
    }

    const getValues = (e) => {
        let data = types;

        if (data.includes(e)) {
            data.pop(e)
        } else {
            data.push(e)

        }

        setTypes(data)
    }


    return (
        <>
            <Grid>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Registar</h2>
                    <Typography variant='caption' style={marginBottom} gutterBottom>Por favor preencha este formulário para criar uma conta</Typography>
                </Grid>
                <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form autoComplete="off">
                            <Field as={TextField} fullWidth name="name" label='Nome' placeholder="Introduza o nome" style={marginBottom}
                                helperText={<ErrorMessage name="name" component="div" style={{ color: 'red' }} />} />
                            <Field as={TextField} fullWidth name="email" label='Email' placeholder="Introduza o email" style={marginBottom}
                                helperText={<ErrorMessage name="email" component="div" style={{ color: 'red' }} />} />
                            <Field as={TextField} fullWidth name="phone" label='Telefone' placeholder="Introduza o número de telefone" style={marginBottom}
                                helperText={<ErrorMessage name="phone" component="div" style={{ color: 'red' }} />} />
                            <Field as={TextField} fullWidth name="password" label='Palavra-chave' type='password' placeholder="Introduza a palavra-chave" style={marginBottom}
                                helperText={<ErrorMessage name="password" component="div" style={{ color: 'red' }} />} />
                            <Field as={TextField} fullWidth name="confirmPassword" label='Confirma palavra-chave' type='password' placeholder="Confirma a palavra-chave" style={marginBottom}
                                helperText={<ErrorMessage name="confirmPassword" component="div" style={{ color: 'red' }} />} />
                            <Button variant="contained" component="label" size="small" style={marginBottom} sx={{ '&:hover': { opacity: [0.9, 0.8, 0.7] } }}>
                                <AddPhotoAlternateIcon />
                                Adicionar Foto Perfil
                                <input hidden accept="image/*" multiple type="file" onClick={() => { setOpen(true);}} />
                            </Button>
                            <Collapse in={open}>
                                <Alert action={
                                    <IconButton aria-label="close" color="inherit" size="small" onClick={() => {setOpen(false);}}>
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    } sx={{ mb: 2 }}
                                >
                                    Foto importada com sucesso!
                                </Alert>
                            </Collapse>
                            <div>
                                <Typography name="type" sx={{ fontWeight: 'bold' }} style={marginTop}>Selecione o tipo de voluntariados que irá desponibilizar:</Typography>
                                <FormHelperText><ErrorMessage name="type" component="div" style={{ color: 'red' }} /></FormHelperText>
                                <FormControlLabel
                                    control={<Checkbox value="Natureza" onChange={(e) => getValues(e.target.value)} />}
                                    label="Natureza"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="Animais" onChange={(e) => getValues(e.target.value)} />}
                                    label="Animais"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="Poluição" onChange={(e) => getValues(e.target.value)} />}
                                    label="Poluição"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="Comunidade" onChange={(e) => getValues(e.target.value)} />}
                                    label="Comunidade"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="Gastronomia" onChange={(e) => getValues(e.target.value)} />}
                                    label="Gastronomia"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="Saúde" onChange={(e) => getValues(e.target.value)} />}
                                    label="Saúde"
                                />
                            </div>
                            <div>
                                <FormControlLabel
                                    control={<Field as={Checkbox} name="termsAndConditions" />}
                                    label="Aceito os termos e condições."
                                    style={marginTopFinal}
                                />
                                <FormHelperText><ErrorMessage name="termsAndConditions" component="div" style={{ color: 'red' }} /></FormHelperText>
                                <Grid container spacing={3} justifyContent="center">
                                    <Grid item xs={6}>
                                        <Button type='submit' variant='contained' color='primary' disabled={props.isSubmitting}
                                            sx={{ '&:hover': { opacity: [0.9, 0.8, 0.7] } }} fullWidth>{props.isSubmitting ? "Carregar" : "Registar"}</Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Grid>
        </>
    )
}

export default RegisterOrganizacao;
