import style from "./Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import MiniBoxVoluntariado from "../StatsShowers/Box/MiniBoxVoluntariado";

function CandidaturasPendentes(props) {

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
        var res1 = await fetch('http://localhost:5000/voluntariados');
        var res2 = await fetch('http://localhost:5000/novosVoluntariados');

        var data = await res.json()
        var data1 = await res1.json()
        var data2 = await res2.json()

        var list = []

        for (const element of data) {
            for (const element2 of data1) {
                if ((element.idPerson === props.id)&&(element.idVolunt===element2.id) ){
                    list.push(element2)
                }
            }
            for (const element3 of data2) {
                if ((element.idPerson === props.id)&&(element.idVolunt===element3.id) ){
                    list.push(element3)
                }
            }

        }

        return list;
    }

    return (
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

                <Divider className={style.voluntariadosProfile} />
                <Container >
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                        {!(candid.length === 0) ? candid.map((vol, index) => (
                            <><Grid item xs={2} sm={4} md={4} key={index}>
                                <MiniBoxVoluntariado
                                    id={vol.id}
                                    image={vol.image}
                                    name={vol.name}
                                    desc={vol.description}
                                ></MiniBoxVoluntariado>
                            </Grid></>
                        )) : <><div className={style.voluntariadosProfile} style={{ marginTop: "5%", width: "100%" }}>
                            <Typography style={{
                                fontWeight: 500,
                                fontSize: 20,
                                textAlign: 'center',
                                color: "grey",
                                marginLeft: 50
                            }}>
                                Nenhuma candidatura pendente
                            </Typography>
                        </div></>}
                    </Grid></Container>
                {!(candid.length === 0) ?
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Pagination count={1} className={style.pagination} />
                    </Grid> : <></>}

            </div >
        </div >
    );

}

export default CandidaturasPendentes