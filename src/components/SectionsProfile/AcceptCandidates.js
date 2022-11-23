import style from "./Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import MiniBoxVoluntariado from "../StatsShowers/Box/MiniBoxVoluntariado";

function AcceptCandidates(props) {

    const [candid, setVoluntariados] = useState([])

    useEffect(() => {

        const getVolunts = async () => {

            const listVolunt = await fetchCandidatura()

            setVoluntariados(listVolunt)

        }

        getVolunts(candid)

    }, [])

    const fetchCandidatura = async () => {
        var res = await fetch('http://localhost:5000/candidaturas');

        var data = await res.json()

        return data;
    }

    return (
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
        >Candidatos Pendentes</Typography>
        <Divider className={style.commentsProfile} />
        </div>

    );

}

export default AcceptCandidates