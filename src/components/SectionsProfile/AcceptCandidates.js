import style from "./Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import MiniBoxCandidate from "../StatsShowers/Box/MiniBoxCandidate";

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
        console.log(props.id)

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
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                        {!(peopleCandidate.length === 0) ? peopleCandidate.map((person, index) => (
                            <><Grid item xs={2} sm={4} md={4} key={index}>
                                <MiniBoxCandidate
                                    id={person.id}
                                    image={person.image}
                                    name={person.name}
                                    desc={person.description}
                                    rating={person.rating}
                                ></MiniBoxCandidate>
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
                    </Grid></Container>
                {!(peopleCandidate.length === 0) ?
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Pagination count={1} className={style.pagination} />
                    </Grid> : <></>}
        </div>

    );

}

export default AcceptCandidates