import style from "./Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";

function CandidaturasPendentes(props) {

    const [candid, setVoluntariados] = useState([])

    useEffect(() => {

        const getLoggedIn = async () => {

            const listVolunt = await fetchCandidatura()

            setVoluntariados(listVolunt)

        }

        getLoggedIn(candid)

    }, [])

    const fetchCandidatura = async () => {
        var res= await fetch('http://localhost:5000/candidaturas');

        var data = await res.json()

        return data;
    }

    return(
        <div id="Candidatura" className={style.backgroundwhite}>
        <div >
            <Container style={{
                height: 80
            }}></Container>

            <Typography
                style={{
                    fontWeight: 500,
                    fontSize: 20,
                    color: '#497174',
                    textTransform: "uppercase",
                    textAlign: 'left',
                    marginLeft: 50
                }}
            >Candidaturas Pendentes</Typography>

            <Divider />
            <Container style={{
                height: 100
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
    </div >
    );

}

export default CandidaturasPendentes