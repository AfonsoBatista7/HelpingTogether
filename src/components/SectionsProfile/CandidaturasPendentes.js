import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom'
import style from "./Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider, Fab} from "@mui/material";
import React, { useState, useEffect } from "react";
import MiniBoxVoluntariado from "../StatsShowers/Box/MiniBoxVoluntariado";

function CandidaturasPendentes(props) {

    const [candid, setVoluntariados] = useState([])
    const [candidAceite, setVoluntariadosAceites] = useState([])
    const [candidRegect, setVoluntariadosRegect] = useState([])

    useEffect(() => {

        const getVolunts = async () => {

            const listVolunt = await fetchCandidatura()

            setVoluntariados(listVolunt)

        }

        getVolunts(candid)

    }, [candid])

    useEffect(() => {

        const getVoluntsAceites = async () => {

            const listVoluntAceites = await fetchCandidaturaAceites()

            setVoluntariadosAceites(listVoluntAceites)

        }

        getVoluntsAceites(candidAceite)

    }, [candidAceite])

    useEffect(() => {

        const getVoluntsRegect = async () => {

            const listVoluntRegect = await fetchCandidaturaRegect()

            setVoluntariadosRegect(listVoluntRegect)

        }

        getVoluntsRegect(candidRegect)

    }, [])

    const fetchCandidaturaRegect = async () => {
        var res = await fetch('http://localhost:5000/candidaturasRejeitadas');
        var res1 = await fetch('http://localhost:5000/voluntariados');
        var res2 = await fetch('http://localhost:5000/novosVoluntariados');

        var data = await res.json()
        var data1 = await res1.json()
        var data2 = await res2.json()

        var list = []

        for (const element of data) {
            for (const element2 of data1) {
                if ((element.idPerson === props.id) && (element.idVolunt === element2.id)) {
                    list.push(element2)
                }
            }
            for (const element3 of data2) {
                if ((element.idPerson === props.id) && (element.idVolunt === element3.id)) {
                    list.push(element3)
                }
            }

        }

        return list;
    }


    const fetchCandidaturaAceites = async () => {
        var res = await fetch('http://localhost:5000/candidaturasAceites');
        var res1 = await fetch('http://localhost:5000/voluntariados');
        var res2 = await fetch('http://localhost:5000/novosVoluntariados');

        var data = await res.json()
        var data1 = await res1.json()
        var data2 = await res2.json()

        var list = []

        for (const element of data) {
            for (const element2 of data1) {
                if ((element.idPerson === props.id) && (element.idVolunt === element2.id)) {
                    list.push(element2)
                }
            }
            for (const element3 of data2) {
                if ((element.idPerson === props.id) && (element.idVolunt === element3.id)) {
                    list.push(element3)
                }
            }

        }

        return list;
    }



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
                if ((element.idPerson === props.id) && (element.idVolunt === element2.id)) {
                    list.push(element2)
                }
            }
            for (const element3 of data2) {
                if ((element.idPerson === props.id) && (element.idVolunt === element3.id)) {
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

                <Divider style={{marginBottom: "20px"}}>  
                    <Typography style={{ fontWeight: 500,
                                         fontSize: 20,
                                         color: '#344D67',
                                         textTransform: "uppercase",
                    }} >Candidaturas Pendentes</Typography>
                </Divider>
                <Container >
                        {!(candid.length === 0) ? 
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                                {candid.map((vol, index) => (
                                    <Grid item xs={2} sm={4} md={4} key={index}>
                                        <MiniBoxVoluntariado
                                            id={vol.id}
                                            image={vol.image}
                                            name={vol.name}
                                            desc={vol.description}
                                        ></MiniBoxVoluntariado>
                                    </Grid>
                                ))}
                            </Grid>
                         : <div>
                            <img style={{display: "block", marginRight:"auto", marginLeft:"auto" ,width:"30%"}} alt="imgEmptyVol" src={`/img${Math.floor(Math.random()*9)+1}.png`}></img>
                            <Typography style={{
                                fontWeight: 500,
                                fontSize: 20,
                                textAlign: 'center',
                                color: "grey",
                            }}>
                                Nenhuma candidatura pendente
                            </Typography>
                        </div>}
                    </Container>
                
                <Link to="/Voluntariados">
                    <Fab
                         style={{ marginLeft: "auto"}} 
                     sx={{
                        "&:hover": {
                            backgroundColor: "#1d2b3a",
                        },
                        backgroundColor: "#344D67",
                        display: "flex",
                        alignContent: "center",
                        color: "#EFF5F5",
                    }} aria-label="add">
                        <AddIcon />
                    </Fab>
                </Link>
                {!(candid.length === 0) &&
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Pagination count={1} className={style.pagination} style={{marginBottom:"3%"}}/>
                    </Grid>}




                <Divider className={style.commentsProfile} />
                <Container >
                    <Grid container direction="row"
                        justifyContent="space-between"
                        alignItems="left">

                        <Grid item xs={5} justifyContent="left"
                            alignItems="left">
                            <Typography style={{ marginLeft: "15%", marginBottom: "5%", fontSize: 20 }}>Candidaturas aceites </Typography>
                            <Grid container direction="row" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }} justifyContent="left"
                                alignItems="center">

                                {!(candidAceite.length === 0) ? candidAceite.map((vol, index) => (
                                    <><Grid item xs={6} sm={6} md={6} key={index}>
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
                                        textAlign: 'left',
                                        color: "grey",
                                        marginLeft: 50
                                    }}>
                                        Nenhuma candidatura aceite
                                    </Typography>
                                </div></>}
                            </Grid>
                        </Grid>


                        <Divider orientation="vertical" variant="middle" flexItem />

                        <Grid item xs={5}
                            justifyContent="center"
                            alignItems="center">
                            <Typography style={{ marginLeft: "30%", marginBottom: "5%", fontSize:20}}>Candidaturas Rejeitadas </Typography>
                            <Grid container direction="row" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }} justifyContent="center"
                                alignItems="center" >

                                {!(candidRegect.length === 0) ? candidRegect.map((vol, index) => (
                                    <><Grid item xs={6} sm={6} md={6} key={index}>
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
                                        Nenhuma candidatura rejeitada
                                    </Typography>
                                </div></>}
                            </Grid>
                        </Grid>

                    </Grid>

                </Container>

            </div >
        </div >
    );

}

export default CandidaturasPendentes