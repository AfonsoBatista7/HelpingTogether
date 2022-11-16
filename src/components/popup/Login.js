import React from 'react'
import { Grid, FormHelperText, Avatar, TextField, Button, Typography, Link, Checkbox } from '@mui/material'
import LockOutlined from '@mui/icons-material/LockOutlined';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const Login = (props) => {

    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const marginBottom = { marginBottom: 10 }
    const marginBottomFinal = { marginBottom: 20 }
    const error = { color: 'red' }

    const initialValue = {
        name: '',
        password: ''
    }

    const onSubmit = (values) => {
        console.log(values)

        props.function("isLoggedIn")
       
        // setTimeout(() =>{
        //     props.resetForm()
        //     props.setSubmitting(false)
        // }, 3000)
    }

     const validationSchema= Yup.object().shape({
        name: Yup.string().min(3,"Muito curto").required("Necessário"),
        password: Yup.string().min(6,"Comprimento minimo de 6 caracteres").required("Necessário")
     })

    return (
        <Grid>
            <div>
            <Grid align='center'>
                <Avatar style={avatarStyle}>
                    <LockOutlined />
                </Avatar>
                <h2>Entrar</h2>
            </Grid>
            <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={onSubmit}>
                {(props) => (
                    <Form autoComplete="off">
                        <Field as={TextField} name="name" label='Nome de utilizador' placeholder='Nome de utilizador' fullWidth style={marginBottom}
                            helperText={<ErrorMessage name="name" component="div" style={{color: 'red'}}/>} />
                        <Field as={TextField} name="password" label='Palavra-chave' placeholder='Palavra-chave' type='password' fullWidth style={marginBottomFinal}
                            helperText={<ErrorMessage name="password" component="div" style={{color: 'red'}}/>} />
                        <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting} style={btnstyle} fullWidth>
                        {props.isSubmitting ? "Carregar" : "Entrar"}</Button>
                    </Form>
                )}
            </Formik>
            </div>
        </Grid>
    )
}

export default Login