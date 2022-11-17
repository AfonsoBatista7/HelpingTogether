import React, { useState, useEffect } from 'react'
import { Grid, FormHelperText, Avatar, TextField, Button, Typography, Link, Checkbox } from '@mui/material'
import LockOutlined from '@mui/icons-material/LockOutlined';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const Login = (props) => {

    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: 10 }
    const marginBottom = { marginBottom: 10 }
    const marginBottomFinal = { marginBottom: 20 }

    // const [nameUser, setNameUser] = useSate('');
    // const [passUser, setPassUser] = useSate('');

    const initialValue = {
        name: '',
        password: ''
    }

    //vetor com todos os valores no login da Base de dados
    const [loggedIns, setLoggedIns] = useState([])

    //vai buscar todos os valores de login da BD e mete em loggedIns
    useEffect(() => {
        const getLoggedIn = async () => {
            const loggedInFromServer = await fetchLoggedIn()
            setLoggedIns(loggedInFromServer)
        }

        getLoggedIn()

    }, [])

    const fetchLoggedIn = async () => {
        const res = await fetch('http://localhost:5000/login')
        const data = await res.json()

        return data
    }

    const checkLogIn = (e) => {
        
        loggedIns.forEach((element) => { 
            if(element.name == e.name && element.password == e.password){
                return 1;
            } else {
                return 0;
            }
        })
    }

    const onSubmit = (values) => {

        if(checkLogIn(values) == 0) {
            console.log(0)
        } else {
            props.function("isLoggedIn")
        }
       
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
                        <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting} sx={{'&:hover': { opacity: [0.9, 0.8, 0.7]} }} fullWidth>
                        {props.isSubmitting ? "Carregar" : "Entrar"}</Button>
                    </Form>
                )}
            </Formik>
            </div>
        </Grid>
    )
}

export default Login