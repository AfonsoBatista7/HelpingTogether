import style from "../components/SectionsProfile/Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider, Button } from "@mui/material";
import React, { useState, useEffect } from "react";

function Voluntariados() {

    const [perfil, setPerfil] = useState(null);

    //vetor com todos os valores no login da Base de dados
    const [loggedIns, setLoggedIns] = useState([])

    //vai buscar todos os valores de login da BD e mete em loggedIns
    useEffect(() => {
        const getLoggedIn = async () => {


            const loggedInFromServer = await fetchLoggedIn()

            setLoggedIns(loggedInFromServer)
            console.log(loggedIns)


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
                        {perfil.typePerfil === "organizacao" ? <Button><Typography style={{ color: "#497174" }}>+ Criar</Typography></Button> : <></>}
                    </>}

                </Grid>

                <Divider />
                <Container style={{
                    height: 700
                }}></Container>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Pagination count={10} />
                </Grid>
                <Container style={{
                    height: 50
                }}></Container>

            </div >
        </div>

    );
}

export default Voluntariados;