import React from 'react'
import { useState } from "react";
import { Grid, Typography, TextField, Button, FormHelperText, FormControlLabel, Rating } from '@mui/material'
import style from "./evaluation.module.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PowerInputSharp } from '@mui/icons-material';

function Evaluation(props) {

    const [rate, setRate] = useState(0);

    const initialValue = {
        rating: rate,
        comment: ''
    }

    function checkNull() {
        return (rate != 0);
    }

    const validationSchema = Yup.object().shape({
        rating: Yup.number().test("null", "Necessário", checkNull),
        comment: Yup.string().required("Necessário")
    })


    const onSubmit = (value) => {

        var todayDate = new Date();
        var temp1 = todayDate.toTimeString().split(":")[0];
        var temp2 = todayDate.toTimeString().split(":")[1];
        var finalDate = todayDate.toLocaleDateString().concat(" ", temp1, ":", temp2);

        addComment({ ...value, name: props.name, date: finalDate, nameOfTheCommented: props.nameOfTheCommented, idPersonCommenting: props.idPersonCommenting, idPersonCommented: props.idPersonCommented });

        props.closePopup()

    }

    const addComment = async (value) => {

        if (props.type === "pessoa") {

            const res = await fetch('http://localhost:5000/comentariosFeitosPessoa', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ ...value, image: props.image }),
            })
        }

        if (props.type === "voluntariado") {

            const res = await fetch('http://localhost:5000/comentariosFeitosVoluntariado', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ ...value, image: props.image }),
            })
        }


    }


    return (
        <>
            <Grid>
                <Grid >
                    <h2 className={style.header}>Avaliação</h2>
                    <Typography variant='caption'>Por favor preencha com a avaliação desejada</Typography>
                </Grid>
                <Formik initialValues={initialValue} validationSchema={validationSchema} enableReinitialize={true} onSubmit={onSubmit}>
                    {(props) => (
                        <Form autoComplete="off">
                            {/* <Field as={Rating} className={style.top} name="rating" size="large" value={rate} onChange={(event, newValue) => {setRate(newValue);}}/> */}
                            <FormControlLabel
                                control={<Rating name="rating" size="large" value={rate} onChange={(event, newValue) => { setRate(newValue); }} />}
                                className={style.top}
                            />
                            <FormHelperText><ErrorMessage name="rating" component="div" style={{ color: 'red' }} /></FormHelperText>
                            <Field as={TextField} className={style.both} fullWidth multiline name="comment" label="Comentário" placeholder="Introduza o comentário"
                                helperText={<ErrorMessage name="comment" component="div" style={{ color: 'red' }} />} />
                            <div>
                                <Grid container spacing={3} justifyContent="center">
                                    <Grid item xs={6}>
                                        <Button type='submit' variant='contained' disabled={props.isSubmitting}
                                            sx={{ backgroundColor: "#344D67", '&:hover': { opacity: [0.9, 0.8, 0.7] } }} fullWidth>{props.isSubmitting ? "Carregar" : "Avaliar"}</Button>
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

export default Evaluation
