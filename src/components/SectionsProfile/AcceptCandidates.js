import style from "./Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider, IconButton } from "@mui/material";
import React, { useState, useEffect,useReducer } from "react";
import MiniBoxCandidate from "../StatsShowers/Box/MiniBoxCandidate";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

function AcceptCandidates(props) {

    const [state, forceUpdate] = useReducer(x => x + 1, 0);

    const [peopleCandidate, setPeopleCandidate] = useState([])

    const [peopleAccepted, setPeopleAccepted] = useState([])

    useEffect(() => {

        const getVolunts = async () => {

            const listVolunt = await fetchCandidatura()

            setPeopleCandidate(listVolunt)

        }

        getVolunts(peopleCandidate)

    }, [state])

    useEffect(() => {

        const getAccepted = async () => {

            const listAccepted = await fetchAccepted()

            setPeopleAccepted(listAccepted)

        }

        getAccepted(peopleAccepted)

    }, [state])

    const fetchAccepted = async () => {
        var res = await fetch(`http://localhost:5000/candidaturasAceites/`);

        var data = await res.json()

        var cand = []

        for (const element of data) {
            if (element.idVolunt === props.id) {
                cand.push(element)
            }
        }

        var list = []

        for (const element of cand) {
            var res1 = await fetch(`http://localhost:5000/login/${element.idPerson}`);
            var res2 = await fetch(`http://localhost:5000/voluntarios/${element.idPerson}`);

            var data1 = await res1.json()
            var data2 = await res2.json()

            if (Object.keys(data1).length !== 0) {
                list.push(data1)
            }
            if (Object.keys(data2).length !== 0) {
                list.push(data2)
            }
        }

        return list;

    }

    const fetchCandidatura = async () => {
        var res = await fetch(`http://localhost:5000/candidaturas/`);

        var data = await res.json()

        var cand = []

        for (const element of data) {
            if (element.idVolunt === props.id) {
                cand.push(element)
            }
        }

        var list = []

        for (const element of cand) {
            var res1 = await fetch(`http://localhost:5000/login/${element.idPerson}`);
            var res2 = await fetch(`http://localhost:5000/voluntarios/${element.idPerson}`);

            var data1 = await res1.json()
            var data2 = await res2.json()

            if (Object.keys(data1).length !== 0) {
                list.push(data1)
            }
            if (Object.keys(data2).length !== 0) {
                list.push(data2)
            }
        }

        return list;
    }


    const acceptPerson = async (personId) => {
        await addCandidaturaAceite({ idVolunt: props.id, idPerson: personId })
        const res = await fetch('http://localhost:5000/candidaturas')
        const data = await res.json()

        for (const element of data) {
            if (element.idVolunt === props.id && element.idPerson === personId) {
                await deleteCandidatura(element.id);
            }
        }
        forceUpdate();
    }

    const rejectPerson = async (personId) => {
        await addCandidaturaAceite({ idVolunt: props.id, idPerson: personId })
        const res = await fetch('http://localhost:5000/candidaturas')
        const data = await res.json()

        for (const element of data) {
            if (element.idVolunt === props.id && element.idPerson === personId) {
               await deleteCandidatura(element.id);
            }
        }
        forceUpdate();
    }

    const cancelPerson = async (personId) => {
       await addCandidatura({ idVolunt: props.id, idPerson: personId })
        const res = await fetch('http://localhost:5000/candidaturasAceites')
        const data = await res.json()

        for (const element of data) {
            if (element.idVolunt === props.id && element.idPerson === personId) {
                await deleteCandidaturaAceite(element.id);
            }
        }
        forceUpdate();
    }


    const addCandidaturaAceite = async (value) => {
        const res = await fetch('http://localhost:5000/candidaturasAceites', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(value),
        })

        const data = await res.json()

    }


    const addCandidatura = async (value) => {
        const res = await fetch('http://localhost:5000/candidaturas', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(value),
        })

        const data = await res.json()

    }

    const deleteCandidaturaAceite = async (id) => {
        const res = await fetch(`http://localhost:5000/candidaturasAceites/${id}`, {
            method: 'DELETE',
        })
    }

    const deleteCandidatura = async (id) => {
        const res = await fetch(`http://localhost:5000/candidaturas/${id}`, {
            method: 'DELETE',
        })
    }

    const addCandidaturaRegeitada= async (value) => {
        const res = await fetch('http://localhost:5000/candidaturasRejeitadas', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(value),
        })

        const data = await res.json()

    }


    return (
        <div >
            <Container style={{
                height: 80
            }}></Container>

            <Divider style={{marginBottom: "20px"}}>  
                <Typography style={{ fontWeight: 500,
                                        fontSize: 20,
                                        color: '#344D67',
                                        textTransform: "uppercase",
                }}>Candidatos Pendentes</Typography>
            </Divider>
            <Container >
                <Grid container direction="row"
                    justifyContent="space-between"
                    alignItems="left">

                    <Grid item xs={6} justifyContent="left"
                        alignItems="left">
                        <Grid container direction="column" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }} justifyContent="left"
                        alignItems="center" >
                             <Typography style={{marginLeft:"10%", marginTop: "5%"}}>Candidatos por aceitar </Typography>
                            {!(peopleCandidate.length === 0) ? 
                            peopleCandidate.map((person, index) => (
                                <Grid container direction="row" item xs={2} sm={4} md={4} key={index}>
                                    <MiniBoxCandidate
                                        id={person.id}
                                        image={person.image}
                                        name={person.name}
                                        desc={person.description}
                                        rating={person.rating}
                                        email={person.email}
                                        phone={person.phone}
                                        gender={person.gender}
                                        birthday={person.birthday}
                                    ></MiniBoxCandidate>
                                    <div style={{marginLeft:"1%"}}></div>
                                    <IconButton aria-label="delete" size="large" style={{ color: "green" }} onClick={function () { acceptPerson(person.id) }}>
                                        <CheckCircleOutlineRoundedIcon fontSize="inherit" />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="large" style={{ color: "red" }} onClick={function () { rejectPerson(person.id) }}>
                                        <HighlightOffRoundedIcon fontSize="inherit" />
                                    </IconButton>
                                </Grid>
                            )) : <div className={style.voluntariadosProfile} style={{ marginTop: "5%", width: "100%" }}>
                                <Typography style={{
                                    fontWeight: 500,
                                    fontSize: 20,
                                    textAlign: 'center',
                                    color: "grey",
                                    marginLeft: 50
                                }}>
                                    Nenhum candidato
                                </Typography>
                            </div>}
                        </Grid>
                    </Grid>

                    
                       <Divider orientation="vertical" variant="middle" flexItem />
               
                    <Grid item xs={5}
                        justifyContent="center"
                        alignItems="center">

                        <Grid container direction="column" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }} justifyContent="center"
                        alignItems="center" >
                            <Typography  style={{marginLeft:"10%", marginTop: "5%"}}>Candidatos Aceites </Typography>
                            {!(peopleAccepted.length === 0) ? peopleAccepted.map((person, index) => (
                                <><Grid container direction="row" item xs={2} sm={4} md={4} key={index}>
                                    <MiniBoxCandidate
                                        id={person.id}
                                        image={person.image}
                                        name={person.name}
                                        desc={person.description}
                                        rating={person.rating}
                                        email={person.email}
                                        phone={person.phone}
                                        gender={person.gender}
                                        birthday={person.birthday}
                                    ></MiniBoxCandidate>
                                    <div style={{marginLeft:"1%"}}></div>
                                    <IconButton aria-label="delete" size="large" style={{ color: "red" }} onClick={function () { cancelPerson(person.id) }}>
                                        <HighlightOffRoundedIcon fontSize="inherit" />
                                    </IconButton>
                                </Grid></>
                            )) : <><div className={style.voluntariadosProfile} style={{ marginTop: "5%", width: "100%" }}>
                                <Typography style={{
                                    fontWeight: 500,
                                    fontSize: 20,
                                    textAlign: 'center',
                                    color: "grey",
                                    marginLeft: 50
                                }}>
                                    Nenhum candidato aceite
                                </Typography>
                            </div></>}
                        </Grid>
                    </Grid>

                </Grid>

            </Container>
        </div >

    );

}

export default AcceptCandidates