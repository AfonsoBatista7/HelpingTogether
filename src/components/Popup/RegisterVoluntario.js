import React from 'react'
import { useState } from 'react'
import { Grid, Avatar, Collapse, IconButton, Alert, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Checkbox, Stack, FormHelperText } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CloseIcon from '@mui/icons-material/Close';

const RegisterVoluntario = (props) => {

    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const both = { marginTop: 20, marginBottom: 15 }
    const marginBottom = { marginBottom: 10 }
    const marginTop2 = { marginTop: 30 }

    const [date, setDate] = useState(new Date());

    const [dateSetter, changeDateSetter] = useState(false);

    const [open, setOpen] = useState(false);

    const handleChange = (newValue) => {
        setDate(newValue.$d);
        changeDateSetter(true);
    };

    const onSubmit = (values) => {

        props.changePopup("isRegisterVoluntario")

        addLoggedIn({ ...values, isLoggedIn: false, typePerfil: "voluntario" })
    }

    const initialValue = {
        name: '',
        email: '',
        gender: '',
        birthday: date,
        phone: '',
        password: '',
        confirmPassword: '',
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

    function calcMaior18() {
        var cutoff = new Date();
        cutoff.setFullYear(cutoff.getFullYear() - 18);

        return (date <= cutoff);
    }

    function checkNull() {
        return (dateSetter);
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Muito curto").required("Necessário"),
        email: Yup.string().email("Coloque um email válido").required("Necessário"),
        gender: Yup.string().oneOf(["male", "female"], "Required").required("Necessário"),
        birthday: Yup.date().test("null", "Necessário", checkNull).test("age", "Tem que ter mais que 18 anos", calcMaior18),
        phone: Yup.number().typeError("Coloque um número de telefone válido").required('Necessário').min(910000000, "Deve começar em 91, 92, 93 ou 96 e ter 9 digitos").max(970000000, "Deve começar em 91, 92, 93 ou 96 e ter 9 digitos"),
        password: Yup.string().min(6, "Comprimento minimo de 6 caracteres").required("Necessário"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password não é igual").required("Necessário"),
        termsAndConditions: Yup.string().oneOf(["true"], "Aceite os termos e condições")
    })

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
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Género</FormLabel>
                                <Field as={RadioGroup} aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Feminino" />
                                    <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                                </Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name="gender" component="div" style={{ color: 'red' }} /></FormHelperText>
                            <LocalizationProvider dateAdapter={AdapterDayjs} name="birthday" >
                                <Stack spacing={3} style={both}>
                                    <DatePicker
                                        label="Data Nascimento"
                                        inputFormat="DD/MM/YYYY"
                                        value={date}
                                        onChange={handleChange}
                                        renderInput={(params) => <TextField {...params} />}
                                        name="birthday"
                                    />
                                </Stack>
                            </LocalizationProvider>
                            <FormHelperText><ErrorMessage name="birthday" component="div" style={{ color: 'red' }} /></FormHelperText>
                            <Field as={TextField} fullWidth name="phone" label='Telefone' placeholder="Introduza o número de telefone" style={marginBottom}
                                helperText={<ErrorMessage name="phone" component="div" style={{ color: 'red' }} />} />
                            <Field as={TextField} fullWidth name="password" label='Palavra-chave' type='password' placeholder="Introduza a palavra-chave" style={marginBottom}
                                helperText={<ErrorMessage name="password" component="div" style={{ color: 'red' }} />} />
                            <Field as={TextField} fullWidth name="confirmPassword" label='Confirma palavra-chave' type='password' placeholder="Confirma a palavra-chave" style={marginBottom}
                                helperText={<ErrorMessage name="confirmPassword" component="div" style={{ color: 'red' }} />} />
                            <Button variant="contained" component="label" size="small" style={marginBottom} sx={{'&:hover': { opacity: [0.9, 0.8, 0.7]} }}>
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
                                <FormControlLabel
                                    control={<Field as={Checkbox} name="termsAndConditions" />}
                                    label="Aceito os termos e condições."
                                    style={marginTop2}
                                />
                                <FormHelperText><ErrorMessage name="termsAndConditions" component="div" style={{ color: 'red' }} /></FormHelperText>
                                <Grid container spacing={3} justifyContent="center">
                                    <Grid item xs={6}>
                                        <Button type='submit' variant='contained' color='primary' disabled={props.isSubmitting}
                                            sx={{'&:hover': { opacity: [0.9, 0.8, 0.7]} }} fullWidth>{props.isSubmitting ? "Carregar" : "Registar"}</Button>
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

export default RegisterVoluntario;
