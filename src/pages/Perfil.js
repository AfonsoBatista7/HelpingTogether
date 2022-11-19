import InfoProfile from "../components/SectionsProfile/InfoProfile";
import VoluntariadosDone from "../components/SectionsProfile/VoluntariadosDone";
import CandidaturasPendentes from "../components/SectionsProfile/CandidaturasPendentes";
import Comentarios from "../components/SectionsProfile/Comentarios";
import style from "../components/SectionsProfile/Profiles.module.css"
import { Pagination, Grid, Typography, Container } from "@mui/material";
import React, { useState, useEffect } from "react";

function Perfil(props) {

    const [perfil, setPerfil] = useState();

    //vetor com todos os valores no login da Base de dados
    const [loggedIns, setLoggedIns] = useState([])

    //vai buscar todos os valores de login da BD e mete em loggedIns
    useEffect(() => {
        // const getLoggedIn = async () => {
        //     const loggedInFromServer = await fetch()
        //     setLoggedIns(loggedInFromServer)
        // }

        // getLoggedIn(loggedIns)

        const fetchLoggedIn = async () => {
            const res = await fetch('http://localhost:5000/login')
            const data = await res.json()
    
            setLoggedIns(data);
        }

        fetchLoggedIn();


        console.log(loggedIns)

    }, [])


    useEffect(() => {
        checkLogin()

    }, [loggedIns])


    const fetchLoggedIn = async () => {
        const res = await fetch('http://localhost:5000/login')
        const data = await res.json()

        return data;
    }

    const checkLogin = () => {

        for (const element of loggedIns) {
            if (element.isLoggedIn) {
                setPerfil(element);
            }
        }

        // console.log(perfil)

    }

    //window.onload= setTimeout(checkLogin, 3000);


    //console.log(loggedIns)


    return (
        <div className={style.backgroundwhite}>
            <div className={style.margins}>
                <div style={{ height: 20 }}></div>
                <div className={style.perfileTitle}>
                    <Typography
                        style={{
                            fontWeight: 700,
                            fontSize: 30,
                            color: '#2E3B55',
                            textTransform: "uppercase",
                            textAlign: 'left',

                        }}
                    >Perfil</Typography>

                </div>

                <InfoProfile />

                <Container style={{
                    height: 70
                }}></Container>

                <CandidaturasPendentes />

                <Container style={{
                    height: 50
                }}></Container>

                <Container style={{
                    height: 70
                }}></Container>

                <VoluntariadosDone />

                <Container style={{
                    height: 50
                }}></Container>

                <Container style={{
                    height: 70
                }}></Container>

                <Comentarios />

                <Container style={{
                    height: 50
                }}></Container>


            </div >
        </div>
    );
}

export default Perfil;