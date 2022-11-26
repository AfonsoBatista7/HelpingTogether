import style from "./Profiles.module.css"
import { Link } from 'react-router-dom';
import { Pagination, Grid, Typography, Container, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import MiniBoxCandidate from "../StatsShowers/Box/MiniBoxCandidate";


function ShowOldCandidates(props) {

    const [displayParticipant, setDisplayParticipant] = useState([])

    useEffect(() => {
        const getParticipant = async () => {
            const comVoluntariadosFromServer = await fetchParticipantes()
            setDisplayParticipant(comVoluntariadosFromServer)
        }

        getParticipant()

    }, [props.state])


    const fetchParticipantes = async () => {
        var result = [];

        var res1 = await fetch('http://localhost:5000/voluntarios')
        var data1 = await res1.json()

        var res2 = await fetch('http://localhost:5000/voluntariadosRealizados')
        var data2 = await res2.json()

        var vol = checkVoltDone(data2);

        if (vol) {
            result = checkOldVolutarios(data1, vol);
        }

        return result;
    }

    const checkVoltDone = (VoltDone) => {

        for (const element of VoltDone) {
            if (element.id == props.idVolt) {
                return element.participants;
            }
        }

        return null;
    }

    const checkOldVolutarios = (voluntarios, vol) => {
        var list = [];

        for (const element of vol) {
            for (const e of voluntarios) {
                if (element === e.id) {
                    list.push(e);
                }
            }
        }

        return list;
    }


    return (<>
        {displayParticipant.length != 0 ? <>
            <div id="Participantes" className={style.backgroundwhite}>
                <div>
                    <Container style={{
                        height: 80
                    }}></Container>
                    <Divider style={{ marginBottom: "20px" }}>
                        <Typography style={{
                            fontWeight: 500,
                            fontSize: 20,
                            color: '#344D67',
                            textTransform: "uppercase",
                        }} >Participantes</Typography>

                    </Divider>
                    <Container className={style.margintop}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                            {displayParticipant.map((participant, index) => (
                                <Grid container item xs={2} sm={4} md={4} key={index}>
                                    <Link style={{  textDecoration: "none" , width:"100%" }} to={`/Perfil/${participant.id}/Perfil`}>
                                        <MiniBoxCandidate
                                            id={participant.id}
                                            image={participant.image}
                                            name={participant.name}
                                            desc={participant.description}
                                            rating={participant.rating}
                                            email={participant.email}
                                            phone={participant.phone}
                                            gender={participant.gender}
                                            birthday={participant.birthday}
                                        ></MiniBoxCandidate>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                    {!(displayParticipant.length === 0) &&
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Pagination count={1} className={style.paginationComment} />
                        </Grid>}
                    <Container style={{
                        height: 50
                    }} />
                </div >
            </div> </> : <></>
        }</>
    )
}

export default ShowOldCandidates
