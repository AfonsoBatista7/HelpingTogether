import InfoProfile from "../components/SectionsProfile/InfoProfile";
import VoluntariadosArea from "../components/SectionsProfile/VoluntariadosArea";
import CandidaturasPendentes from "../components/SectionsProfile/CandidaturasPendentes";
import Comentarios from "../components/SectionsProfile/Comentarios";
import style from "../components/SectionsProfile/Profiles.module.css"
import { Pagination, Grid, Typography, Container } from "@mui/material";
import React, { useState, useEffect } from "react";

function Perfil(props) {

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
                if(props.name){
                    console.log(props.name);
                    setPerfil(props);
                }else{
                setPerfil(element);
                }
            }
        }

    }

    return (<>
        {perfil ? <>
            <div className={style.backgroundwhite}>
                <div className={style.margins}>
                    <div style={{ height: 20 }}></div>
                    <div className={style.perfileTitle}>
                        <Typography
                            style={{
                                fontWeight: 700,
                                fontSize: 30,
                                color: '#497174',
                                textTransform: "uppercase",
                                textAlign: 'left',

                            }}
                        >Perfil</Typography>

                    </div>

                    <InfoProfile id={perfil.id} name={perfil.name} image={perfil.image} email={perfil.email} phone={perfil.phone} rating={perfil.rating} type={perfil.typePerfil} login={perfil.isLoggedIn} description={perfil.description} birthday={perfil.birthday} gender={perfil.gender} />

                    {perfil.typePerfil !== "organizacao" ? <>
                        <Container style={{
                            height: 70
                        }}></Container>

                        <CandidaturasPendentes />

                        <Container style={{
                            height: 50
                        }}></Container>
                    </>
                        : <></>}


                    <Container style={{
                        height: 70
                    }}></Container>

                   
                    <VoluntariadosArea id={perfil.id} type={perfil.typePerfil} nameOrg={perfil.name} name={perfil.name}  />

                    <Container style={{
                        height: 50
                    }}></Container>

                    {perfil.typePerfil !== "organizacao" ? <>

                        <Container style={{
                            height: 70
                        }}></Container>

                        <Comentarios />

                        <Container style={{
                            height: 50
                        }}></Container></> :
                         <></>}


                    </div >
            </div>
        </>
            : <></>}</>
    );
}

export default Perfil;