import style from "./Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import MiniBoxVoluntariado from "../StatsShowers/Box/MiniBoxVoluntariado";

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

        var res = await fetch(`http://localhost:5000/candidaturas/${props.id}`);

        var data = await res.json()

        console.log(data)

        var list = []

        if (data.length > 1) {
            for (const element of data) {
                var res1 = await fetch(`http://localhost:5000/login/${element.idPerson}`);
                var res2 = await fetch(`http://localhost:5000/voluntarios/${element.idPerson}`);

                var data1 = await res1.json()
                var data2 = await res2.json()

                if (data1) {
                    list.push(data1)
                }
                if (data2) {
                    list.push(data2)
                }
            }

        } else {
            if (Object.keys(data).length!==0) {

                var res1 = await fetch(`http://localhost:5000/login/${data.idPerson}`);
                var res2 = await fetch(`http://localhost:5000/voluntarios/${data.idPerson}`);

                var data1 = await res1.json()
                var data2 = await res2.json()

                console.log(data1)
                console.log(data2)

                if (Object.keys(data1).length!==0) {
                    list.push(data1)
                }
                if (Object.keys(data2).length!==0) {
                    list.push(data2)
                }
            }
        }

        console.log(list)

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
        </div>

    );

}

export default AcceptCandidates