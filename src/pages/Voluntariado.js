import Comentarios from "../components/SectionsProfile/Comentarios";
import style from "../components/SectionsProfile/Profiles.module.css"
import { Pagination, Grid, Typography, Container, Button } from "@mui/material";
import InfoVoluntariado from "../components/SectionsProfile/InfoVoluntariado";
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import React, { useState, useEffect } from 'react'
import { useParams, } from "react-router-dom";

function Voluntariado() {

    const { idVolt } = useParams();

    const [volunt, setVoluntariado] = useState(null);

    const [volntAll, setAllVolunt] = useState([])

    const [candidate, editState] = useState(false);

    const [perfil, setPerfil] = useState(null);

    //vetor com todos os valores no login da Base de dados
    const [loggedIns, setLoggedIns] = useState([])

    //vai buscar todos os valores de login da BD e mete em loggedIns
    useEffect(() => {
        const getLoggedIn = async () => {
            const loggedInFromServer = await fetchLoggedIn()

            setLoggedIns(loggedInFromServer)
        }

        getLoggedIn(loggedIns)

    }, [])

    useEffect(() => {
        const getVoluntariados = async () => {
            const VoluntariadosFromServer = await fetchVoluntariados()

            setAllVolunt(VoluntariadosFromServer)

        }

        getVoluntariados(volntAll)

    }, [])

    const fetchLoggedIn = async () => {
        const res = await fetch('http://localhost:5000/login')
        const data = await res.json()

        return data;
    }

    const fetchVoluntariados = async () => {
        const res = await fetch('http://localhost:5000/novosVoluntariados')

        const res2 = await fetch('http://localhost:5000/voluntariados')
        const data = await res.json()
        const data2 = await res2.json()

        var list = [];

        for (const element of data) {
            list.push(element)
        }

        for (const element of data2) {
            list.push(element)
        }

        return list;
    }

    useEffect(() => {
        checkVoluntariados()
        

    }, [volntAll])

    const checkVoluntariados = () => {
        for (const element of volntAll) {
            if (element.id == idVolt) {
                setVoluntariado(element);
            }
        }
    }

    useEffect(() => {
        checkLogin()

    }, [loggedIns])

    const checkLogin = () => {

        for (const element of loggedIns) {
            if (element.isLoggedIn) {
                setPerfil(element);
            }
        }

    }

    function changeState() {
        editState(!candidate);

        if (candidate) {
            addVoluntariado();
        }
    }




    const addVoluntariado = async () => {
        const res = await fetch('http://localhost:5000/candidaturas', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(volunt),
        })

        const data = await res.json()

    }


    return (<>
        {volunt ? <>
            <div className={style.backgroundwhite}>
                <div style={{ height: 40 }}></div>

                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    className={style.marginsVoluntariado}>

                    <Grid item xs={6}
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <Typography
                            style={{
                                fontWeight: 700,
                                fontSize: 30,
                                color: '#497174',
                                textTransform: "uppercase",
                                textAlign: 'left',

                            }}
                        >Voluntariado</Typography>
                    </Grid>

                    <Grid item xs={5} className={style.marginsVoluntariado}>
                        {!perfil ? <></> : <>
                            {perfil.typePerfil === "organizacao" ? <>
                            </> : <>
                                {!candidate ?
                                    <Button variant="contained" color="success" size="medium" style={{ float: 'right' }} className={style.buttonedit} onClick={changeState}>
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
                            </>}</>}

                    </Grid>
                </Grid>

                <InfoVoluntariado volunt={volunt} />

                <Container style={{
                    height: 50
                }}></Container>


                <Comentarios />

                <Container style={{
                    height: 50
                }}></Container>


            </div ></>
            : <></>}</>

    );
}

export default Voluntariado;