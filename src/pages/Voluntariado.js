import InfoProfile from "../components/SectionsProfile/InfoProfile";
import VoluntariadosDone from "../components/SectionsProfile/VoluntariadosDone";
import CandidaturasPendentes from "../components/SectionsProfile/CandidaturasPendentes";
import Comentarios from "../components/SectionsProfile/Comentarios";
import style from "../components/SectionsProfile/Profiles.module.css"
import { Pagination, Grid, Typography, Container, Button } from "@mui/material";
import InfoVoluntariado from "../components/SectionsProfile/InfoVoluntariado";
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import React, { useState } from 'react'

function Voluntariado(props) {


    const [candidate, editState] = useState(false);

    function changeState() {
        editState(!candidate);
    }

    return (
        <div className={style.backgroundwhite}>
            <div style={{ height: 20 }}></div>
            <div className={style.margins}   style={{ alignItems: 'left', backgroundColor: "#6cc4a1", borderRadius: '10px' }} >
            <div style={{ height: 20 }}></div>

                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    className={style.marginsVoluntariado}>

                    <Grid item xs={6}>
                        <Typography
                            style={{
                                fontWeight: 700,
                                fontSize: 30,
                                color: '#2E3B55',
                                textTransform: "uppercase",
                                textAlign: 'left',

                            }}
                        >Voluntariado</Typography>
                    </Grid>

                    <Grid item xs={5} className={style.marginsVoluntariado}>
                    {!candidate ?
                        <Button variant="contained" color="success" size="medium" style={{ float: 'right' }}  className={style.buttonedit} onClick={changeState}>
                            < DoneOutlineRoundedIcon className={style.marginRight} style={{
                                color: 'white',
                                fontSize: 20
                            }}></ DoneOutlineRoundedIcon> <Typography
                                style={{
                                    fontWeight: 500,
                                    fontSize: 20,
                                    textTransform: "uppercase",
                                    textAlign: 'left',

                                }}
                            >Candidatar</Typography>
                        </Button>
                        : <Button variant="contained" color="error" size="small" style={{ float: 'right' }} className={style.buttonedit} onClick={changeState}>
                            < CancelOutlinedIcon className={style.marginRight} style={{
                                color: 'white',
                                fontSize: 20
                            }}></ CancelOutlinedIcon> <Typography
                                style={{
                                    fontWeight: 500,
                                    fontSize: 15,
                                    textTransform: "uppercase",
                                    textAlign: 'center',

                                }}
                            >Cancelar Candidatura</Typography>
                        </Button>}

                        </Grid>
                </Grid>
               

                <InfoVoluntariado />

                <Container style={{
                    height: 50
                }}></Container>


                <Comentarios />

                <Container style={{
                    height: 50
                }}></Container>


            </div >
        </div>
    );
}

export default Voluntariado;