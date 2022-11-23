import style from "../components/SectionsProfile/Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider, Button } from "@mui/material";
import React, { useState, useEffect, useReducer } from "react";
import BoxVoluntariado from "../components/StatsShowers/Box/BoxVoluntariado";
import RegisterVoluntariado from "../components/Popup/RegisterVoluntariado";
import Popup from "../components/Popup/Popup";

function Voluntariados() {
    const [state, forceUpdate] = useReducer(x => x + 1, 0);

    const [perfil, setPerfil] = useState(null);
    const [openPopupRegisterVoluntariado, setOpenPopupRegisterVoluntariado] = useState(false);

    const [newVoluntariados, setNewVoluntariados] = useState([]);
    const [voluntariados, setVoluntariados] = useState([])

    //vetor com todos os valores no login da Base de dados
    const [loggedIns, setLoggedIns] = useState([])

    //vai buscar todos os valores de login da BD e mete em loggedIns
    useEffect(() => {
        const getVoluntariados = async () => {
            const voluntariadosFromServer = await fetchVoluntariados()

            setVoluntariados(voluntariadosFromServer)

        }

        getVoluntariados()

    }, [])

    const fetchVoluntariados = async () => {
        const res = await fetch('http://localhost:5000/voluntariados')
        const data = await res.json()

        return data;
    }


    useEffect(() => {
        const getNewVoluntariados = async () => {
            const newVoluntariadosFromServer = await fetchNewVoluntariados()

            setNewVoluntariados(newVoluntariadosFromServer)

        }

        getNewVoluntariados();

    }, [state])

    const fetchNewVoluntariados = async () => {
        const res = await fetch('http://localhost:5000/novosVoluntariados')
        const data = await res.json()

        return data;
    }

    useEffect(() => {
        const getLoggedIn = async () => {


            const loggedInFromServer = await fetchLoggedIn()

            setLoggedIns(loggedInFromServer)
        }

        getLoggedIn(loggedIns)

    }, [])

    const fetchLoggedIn = async () => {
        const res = await fetch('http://localhost:5000/login')
        const data = await res.json()

        return data;
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

    const resgisterVoluntariado = () => {
        setOpenPopupRegisterVoluntariado(true);
    }

    const closeResgisterVoluntariado = () => {
        setOpenPopupRegisterVoluntariado(false);
        forceUpdate();
    }

    return (
        <div className={style.backgroundwhite}>
            <div className={style.margins}>
                <Container style={{
                    height: 80
                }}></Container>
                <Grid container
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
                            marginLeft: 50
                        }}
                    >Voluntariados</Typography>
                    {!perfil ? <></> : <>
                        {perfil.typePerfil === "organizacao" ?
                            <div style={{ float: "right" }}>
                                <Button onClick={resgisterVoluntariado}>
                                    <Typography style={{ color: "#497174" }}>+ Criar</Typography>
                                </Button>
                                <Popup
                                    openPopup={openPopupRegisterVoluntariado}
                                    setOpenPopup={setOpenPopupRegisterVoluntariado}
                                >
                                    <RegisterVoluntariado organizacao={perfil.name} closePopup={closeResgisterVoluntariado} />
                                </Popup></div> : <></>}
                    </>}

                </Grid>

                <Divider />
                <Container>
                    {!(newVoluntariados.length === 0) ? newVoluntariados.map((vol) => (
                        <>
                            <div className={style.boxShow}></div>
                            <BoxVoluntariado
                                id={vol.id}
                                image={vol.image}
                                name={vol.name}
                                rating={vol.rating}
                                desc={vol.description}
                                key={vol.id} className={style.boxShow}></BoxVoluntariado>
                            <div className={style.boxShow}></div></>
                    )) : <></>}
                    {!(voluntariados.length === 0) ? voluntariados.map((vol) => (
                        <>
                            <div className={style.boxShow}></div>
                            <BoxVoluntariado
                                id={vol.id}
                                image={vol.image}
                                name={vol.name}
                                rating={vol.rating}
                                desc={vol.description}
                                className={style.boxShow}></BoxVoluntariado>
                            <div className={style.boxShow}></div></>
                    )) : <></>}
                </Container>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Pagination count={1} />
                </Grid>
                <Container style={{
                    height: 50
                }}></Container>

            </div >
        </div>


    );
}

export default Voluntariados;