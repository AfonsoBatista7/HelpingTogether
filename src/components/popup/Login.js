import React, { useState, useEffect } from 'react'
import { Grid, Avatar, TextField, Button, Collapse, IconButton, Alert } from '@mui/material'
import LockOutlined from '@mui/icons-material/LockOutlined';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CloseIcon from '@mui/icons-material/Close';


const Login = (props) => {

    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginBottom = { marginBottom: 10 }
    const marginBottomFinal = { marginBottom: 20 }

    const [open, setOpen] = useState(false);

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

    const checkLogin = (e) => {

        for (const element of loggedIns) {
            if (element.name === e.name && element.password === e.password) {
                return element;
            }
        }

        return 0;
    }
    
    const onSubmit = (values) => {

        let element = checkLogin(values);

        if (element === 0) {
            setOpen(true)
        } else {
            props.changePopup("isLoggedIn");
            props.putLogin(element);
        }

    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Muito curto").required("Necessário"),
        password: Yup.string().min(6, "Comprimento minimo de 6 caracteres").required("Necessário")
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
                        <><Form autoComplete="off">
                            <Field as={TextField} name="name" label='Nome de utilizador' placeholder='Nome de utilizador' fullWidth style={marginBottom}
                                helperText={<ErrorMessage name="name" component="div" style={{ color: 'red' }} />} />
                            <Field as={TextField} name="password" label='Palavra-chave' placeholder='Palavra-chave' type='password' fullWidth style={marginBottomFinal}
                                helperText={<ErrorMessage name="password" component="div" style={{ color: 'red' }} />} />
                            <Button type='submit' color='primary' variant="contained" sx={{ '&:hover': { opacity: [0.9, 0.8, 0.7] } }}
                                 fullWidth> Entrar </Button>
                        </Form>
                            <Collapse in={open}>
                                <Alert severity="error" action={<IconButton aria-label="close" color="inherit" size="small" onClick={() => { setOpen(false); }}>
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>} sx={{ mb: 2 }}
                                >
                                    Não existe conta para os dados inseridos.
                                </Alert>
                            </Collapse></>
                    )}
                </Formik>
            </div>
        </Grid>
    )
}

export default Login