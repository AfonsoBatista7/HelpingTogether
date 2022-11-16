import React, { useState } from 'react'
import { Grid, Avatar, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Checkbox, getNativeSelectUtilityClasses , FormHelperText} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const RegisterOrganizacao = (props) => {

    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 10 }
    const marginBottom = { marginBottom: 10 }
    const marginButton = { marginLeft: 100, marginTop: 50 }
    const marginTopFinal = { marginTop: 50 }

    const [name, setName] = useState([])

    const initialValue = {
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        type: name,
        termsAndConditions: false
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
        console.log(values)

        props.function("isRegisterOrganizacao")
       
        // setTimeout(() =>{
        //     props.resetForm()
        //     props.setSubmitting(false)
        // }, 3000)
    }

    const getValues = (e) => {
        let data = name;

        if (data.includes(e.target.value)) {
            data.pop(e.target.value)
        } else {
            data.push(e.target.value)

        }

        setName(data)
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
                            <Button variant="contained" component="label" size="small" style={marginBottom}>
                                <AddPhotoAlternateIcon />
                                Adicionar foto
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>
                            <div>
                                <Typography name= "type" sx={{ fontWeight: 'bold' }} style={marginTop}>Selecione o tipo de voluntariados que irá desponibilizar:</Typography>
                                <FormHelperText><ErrorMessage name="type" component="div" style={{ color: 'red' }}/></FormHelperText>
                                <FormControlLabel
                                    control={<Checkbox value="Natureza" onChange={(e) => getValues(e)} />}
                                    label="Natureza"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="Animais" onChange={(e) => getValues(e)} />}
                                    label="Animais"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="Poluição" onChange={(e) => getValues(e)} />}
                                    label="Poluição"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="Comunidade" onChange={(e) => getValues(e)} />}
                                    label="Comunidade"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="Gastronomia" onChange={(e) => getValues(e)} />}
                                    label="Gastronomia"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="Saúde" onChange={(e) => getValues(e)} />}
                                    label="Saúde"
                                />
                            </div>
                            <div>
                                <FormControlLabel
                                    control={<Field as={Checkbox} name="termsAndConditions" />}
                                    label="Aceito os termos e condições."
                                    style={marginTopFinal}
                                />
                                <FormHelperText><ErrorMessage name="termsAndConditions" component="div" style={{ color: 'red' }}/></FormHelperText>
                                <Button type='submit' variant='contained' color='primary' disabled={props.isSubmitting}
                                    style={marginButton}>{props.isSubmitting ? "Carregar" : "Registar"}</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Grid>
        </>
    )
}

export default RegisterOrganizacao;