import React from 'react'
import { useState } from 'react'
import { Grid, Avatar, Collapse, IconButton, Alert, Typography, TextField, Button, Stack, FormHelperText, InputLabel, MenuItem, FormControl, Select, FormControlLabel, Checkbox } from '@mui/material'
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

    const [region, setRegion] = useState('');
    const [types, setTypes] = useState([])

    const handleChange = (event) => {
        setRegion(event.target.value);
    };


    const handleChangeIni = (newValue) => {
        setDateIni(newValue.$d)
        changeDateSetterIni(true);
    };

    const handleChangeFin = (newValue) => {
        setDateFin(newValue.$d)
        changeDateSetterFin(true);
    };

    const onSubmit = (values) => {

        addVoluntariado({ ...values, region: region, startDate: dateInic.toLocaleDateString(), endDate: dateFini.toLocaleDateString(), organizacao: props.organizacao, image: "defaultPhotoOrganization.jpg" })

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
        region: region,
        location: '',
        description: '',
        startDate: dateInic,
        endDate: dateFini,
        type: types
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

    function checkNullSelect() {
        return region;
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


    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Muito curto").required("Necessário"),
        region: Yup.string().test("null", "Necessário", checkNullSelect),
        location: Yup.string().required("Necessário"),
        description: Yup.string().required("Necessário"),
        startDate: Yup.date().test("null", "Necessário", checkNullIni),
        endDate: Yup.date().test("null", "Necessário", checkNullFin).test("bigger", "Tem ser no mesmo dia ou depois da data inicial", checkDateFin),
        type: Yup.array().min(1, "Tem que selecionar pelo menos um tipo").required("Necessário"),
    })


    return (
        <>
            <Grid>
                <Grid align='center'>
                    <Avatar className={style.avatar}>
                        <AddCircleIcon />
                    </Avatar>
                    <h2 className={style.header}>Registar Voluntariado</h2>
                    <Typography variant='caption' gutterBottom>Por favor preencha este formulário para criar um voluntariado</Typography>
                </Grid>
                <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form autoComplete="off">
                            <Field as={TextField} fullWidth name="name" label='Nome' placeholder="Introduza o nome" className={style.both}
                                helperText={<ErrorMessage name="name" component="div" style={{ color: 'red' }} />} />
                            <FormControl fullWidth className={style.bottom}>
                                <InputLabel id="region">Região</InputLabel>
                                <Field as={Select}
                                    name="region"
                                    labelId="region"
                                    id="region"
                                    value={region}
                                    label="region"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"Norte"}>Norte</MenuItem>
                                    <MenuItem value={"Centro"}>Centro</MenuItem>
                                    <MenuItem value={"Alentejo"}>Alentejo</MenuItem>
                                    <MenuItem value={"Área Metropolitana Lisboa"}>Área Metropolitana Lisboa</MenuItem>
                                    <MenuItem value={"Argarve"}>Argarve</MenuItem>
                                    <MenuItem value={"Açores"}>Açores</MenuItem>
                                    <MenuItem value={"Madeira"}>Madeira</MenuItem>
                                </Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name="region" component="div" style={{ color: 'red' }} /></FormHelperText>
                            <Field as={TextField} fullWidth name="location" label='Localização' placeholder="Introduza a localização do voluntariado" className={style.bottom}
                                helperText={<ErrorMessage name="location" component="div" style={{ color: 'red' }} />} />
                            <Field as={TextField} fullWidth multiline name="description" label='Descrição' placeholder="Introduza uma descrição do voluntariado" className={style.bottom}
                                helperText={<ErrorMessage name="description" component="div" style={{ color: 'red' }} />} />
                            <LocalizationProvider dateAdapter={AdapterDayjs} name="startDate" >
                                <Stack spacing={3} className={style.both}>
                                    <DatePicker
                                        label="Data Início"
                                        inputFormat="DD/MM/YYYY"
                                        value={dateInic}
                                        onChange={handleChangeIni}
                                        renderInput={(params) => <TextField {...params} />}
                                        name="startDate"
                                    />
                                </Stack>
                            </LocalizationProvider>
                            <FormHelperText><ErrorMessage name="startDate" component="div" style={{ color: 'red' }} /></FormHelperText>
                            <LocalizationProvider dateAdapter={AdapterDayjs} name="endDate" >
                                <Stack spacing={3} className={style.both}>
                                    <DatePicker
                                        label="Data Fim"
                                        inputFormat="DD/MM/YYYY"
                                        value={dateFini}
                                        onChange={handleChangeFin}
                                        renderInput={(params) => <TextField {...params} />}
                                        name="endDate"
                                    />
                                </Stack>
                            </LocalizationProvider>
                            <FormHelperText><ErrorMessage name="endDate" component="div" style={{ color: 'red' }} /></FormHelperText>
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
                            <Typography name="type" sx={{ fontWeight: 'bold' }} >Selecione o tipo do voluntariado:</Typography>
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
                            <div class={style.top}>
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
