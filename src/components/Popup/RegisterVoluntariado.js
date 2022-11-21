import React from 'react'
import { useState } from 'react'
import { Grid, Avatar, Collapse, IconButton, Alert, Typography, TextField, Button, Stack, FormHelperText } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import style from "./voluntariado.module.css";
import * as Yup from 'yup';
import CloseIcon from '@mui/icons-material/Close';

function RegisterVoluntariado(props) {

    const [dateInic, setDateIni] = useState(new Date())
    const [dateFini, setDateFin] = useState(new Date())

    const [dateSetterIni, changeDateSetterIni] = useState(false)
    const [dateSetterFin, changeDateSetterFin] = useState(false)

    const [open, setOpen] = useState(false);


    const handleChangeIni = (newValue) => {
        setDateIni(newValue.$d)
        changeDateSetterIni(true);
    };

    const handleChangeFin = (newValue) => {
        setDateFin(newValue.$d)
        changeDateSetterFin(true);
    };

    const onSubmit = (values) => {

        addVoluntariado({ ...values, dateIni: dateInic.toLocaleDateString(), dateFin: dateFini.toLocaleDateString(), organizacao: props.organizacao })

        props.closePopup()
    };


    const addVoluntariado = async (values) => {
        const res = await fetch('http://localhost:5000/novosVoluntariados', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(values),
        })

        const data = await res.json()

    }

    const initialValue = {
        name: '',
        localization: '',
        description: '',
        dateIni: dateInic,
        dateFin: dateFini
    }

    function checkNullIni() {
        return (dateSetterIni);
    }

    function checkNullFin() {
        return (dateSetterFin);
    }

    function checkDateFin() {
        return (dateInic <= dateFini);
    }


    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Muito curto").required("Necessário"),
        localization: Yup.string().required("Necessário"),
        description: Yup.string().required("Necessário"),
        dateIni: Yup.date().test("null", "Necessário", checkNullIni),
        dateFin: Yup.date().test("null", "Necessário", checkNullFin).test("bigger", "Tem ser no mesmo dia ou depois da data inicial", checkDateFin),
    })


    return (
        <>
            <Grid>
                <Grid align='center'>
                    <Avatar className={style.avatar}>
                        <AddCircleIcon />
                    </Avatar>
                    <h2  className={style.header}>Registar Voluntariado</h2>
                    <Typography variant='caption' gutterBottom>Por favor preencha este formulário para criar um voluntariado</Typography>
                </Grid>
                <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form autoComplete="off">
                            <Field as={TextField} fullWidth name="name" label='Nome' placeholder="Introduza o nome" className={style.both}
                                helperText={<ErrorMessage name="name" component="div" style={{ color: 'red' }} />} />
                            <Field as={TextField} fullWidth name="localization" label='Localização' placeholder="Introduza a localização do voluntariado"  className={style.bottom}
                                helperText={<ErrorMessage name="localization" component="div" style={{ color: 'red' }} />} />
                            <Field as={TextField} fullWidth multiline name="description" label='Descrição' placeholder="Introduza uma descrição do voluntariado"  className={style.bottom}
                                helperText={<ErrorMessage name="description" component="div" style={{ color: 'red' }} />} />
                            <LocalizationProvider dateAdapter={AdapterDayjs} name="dateIni" >
                                <Stack spacing={3} className={style.both}>
                                    <DatePicker
                                        label="Data Início"
                                        inputFormat="DD/MM/YYYY"
                                        value={dateInic}
                                        onChange={handleChangeIni}
                                        renderInput={(params) => <TextField {...params} />}
                                        name="dateIni"
                                    />
                                </Stack>
                            </LocalizationProvider>
                            <FormHelperText><ErrorMessage name="dateIni" component="div" style={{ color: 'red' }} /></FormHelperText>
                            <LocalizationProvider dateAdapter={AdapterDayjs} name="dateFin" >
                                <Stack spacing={3} className={style.both}>
                                    <DatePicker
                                        label="Data Fim"
                                        inputFormat="DD/MM/YYYY"
                                        value={dateFini}
                                        onChange={handleChangeFin}
                                        renderInput={(params) => <TextField {...params} />}
                                        name="dateFin"
                                    />
                                </Stack>
                            </LocalizationProvider>
                            <FormHelperText><ErrorMessage name="dateFin" component="div" style={{ color: 'red' }} /></FormHelperText>
                            <Button variant="contained" component="label" size="small" className={style.pic} sx={{ '&:hover': { opacity: [0.9, 0.8, 0.7] } }}>
                                <AddPhotoAlternateIcon />
                                Adicionar Foto Voluntariado
                                <input hidden accept="image/*" multiple type="file" onClick={() => { setOpen(true); }} />
                            </Button>
                            <Collapse in={open}>
                                <Alert action={
                                    <IconButton aria-label="close" color="inherit" size="small" onClick={() => { setOpen(false); }}>
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                } sx={{ mb: 2 }}
                                >
                                    Foto importada com sucesso!
                                </Alert>
                            </Collapse>
                            <div>
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

export default RegisterVoluntariado