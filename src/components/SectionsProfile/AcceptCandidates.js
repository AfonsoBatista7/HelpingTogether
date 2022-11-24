import style from "./Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import MiniBoxCandidate from "../StatsShowers/Box/MiniBoxCandidate";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

function AcceptCandidates(props) {

    const [peopleCandidate, setPeopleCandidate] = useState([])

    useEffect(() => {

        const getVolunts = async () => {

            const listVolunt = await fetchCandidatura()

            setPeopleCandidate(listVolunt)

        }

        getVolunts(peopleCandidate)

    }, [])

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

        console.log(list)

        return list;
    }


    const acceptPerson = async (personId)=>{
        addCandidaturaAceite({idVolunt: props.id, idPerson: personId})
        const res = await fetch('http://localhost:5000/candidaturas')
        const data = await res.json()

        for(const element of data){
            console.log(element)
            if(element.idVolunt===props.id && element.idPerson===personId){
                deleteCandidatura(element.id);
                window.location.reload();
            }
        }

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
            <Container >
                <Grid container direction="row"
                    justifyContent="center"
                    alignItems="flex-start">
                    <Grid item xs={6}
                        justifyContent="center"
                        alignItems="center">
                        <Grid container direction="column" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                            {!(peopleCandidate.length === 0) ? peopleCandidate.map((person, index) => (
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
                                    <IconButton aria-label="delete" size="large" style={{ color: "green" }} onClick={function(){acceptPerson(person.id)}}>
                                        <CheckCircleOutlineRoundedIcon fontSize="inherit" />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="large" style={{ color: "red" }}>
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
                                    Nenhum candidato
                                </Typography>
                            </div></>}
                        </Grid>
                    </Grid>


                    <Grid item xs={6}
                        justifyContent="center"
                        alignItems="center">
                    </Grid>

                </Grid>
            </Container>
        </div>

    );

}

export default AcceptCandidates