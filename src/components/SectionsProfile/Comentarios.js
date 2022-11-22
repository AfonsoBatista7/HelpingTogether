import style from "./Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import CardComment from "../StatsShowers/Card/CardComment";

function Comentarios(props) {

    const [comment, setComment] = useState([])
    const [newComment, setNewComment] = useState([])
    const [displayComment, setDisplayComment] = useState([])

    useEffect(() => {
        const getComententarioVoluntariadosRealizados = async () => {
            const comVoluntariadosFromServer = await fetchComentariosVoluntariadosRealizados()
            setComment(comVoluntariadosFromServer)

        }

        getComententarioVoluntariadosRealizados()

    }, [])


    const fetchComentariosVoluntariadosRealizados = async () => {
        const res = await fetch('http://localhost:5000/comentariosVoluntariadosRealizados')
        const data = await res.json()

        return data;
    }


    useEffect(() => {
        const getNewComment = async () => {
            const listNewComment = await fetchNewComments()
            setNewComment(listNewComment)
        }

        getNewComment()

    }, [])


    const fetchNewComments = async () => {
        const res = await fetch('http://localhost:5000/comentariosFeitosPessoa')
        const data = await res.json()

        return data;
    }


    const checkCommentsVoluntariados = () => {
        var list = [];

        // for (const element of voluntariados) {
        //     for (const com of comment) {
        //         if (element.organizacao === com.name) {
        //             list.push(com);
        //         }
        //     }
        // }

        for (const element of newComment) {
            if (element.nameOfTheCommented === props.name) {
                list.push(element);
            }
        }

        setDisplayComment(list)
    }


    useEffect(() => {
        checkCommentsVoluntariados()

    }, [newComment])



    return (
        <div id="Comentários" className={style.backgroundwhite}>
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
                >Comentários</Typography>

                <Divider className={style.commentsProfile} />
                <Container>
                    <Grid container spacing={{ xs: 2, md: 10 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {!(displayComment.length === 0) ? displayComment.map((com, index) => (
                            <>
                                <div className={style.voluntariadosProfile}></div>
                                <Grid item xs={2} sm={4} md={3} style={{ paddingTop: "5%" }} key={index}>
                                    <CardComment
                                        id={com.id}
                                        rating={com.rating}
                                        image={com.image}
                                        name={com.name}
                                        comment={com.comment}
                                    ></CardComment>
                                </Grid>
                            </>
                        )) : <></>}
                        {!(comment.length === 0) ? comment.map((com, index) => (
                            <>
                                <div className={style.voluntariadosProfile}></div>
                                <Grid item xs={2} sm={4} md={3} key={index}>
                                    <CardComment
                                        id={com.id}
                                        rating={com.rating}
                                        image={com.image}
                                        name={com.name}
                                        comment={com.comment}
                                        date={com.date}
                                    ></CardComment>
                                </Grid>
                            </>
                        )) : <></>}
                    </Grid>

                </Container>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Pagination count={5} className={style.paginationComment} />
                </Grid>
                <Container style={{
                    height: 50
                }}></Container>

            </div >
        </div >
    );

}

export default Comentarios