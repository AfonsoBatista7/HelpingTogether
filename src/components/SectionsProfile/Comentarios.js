import style from "./Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import CardComment from "../StatsShowers/Card/CardComment";
import { VapingRooms } from "@mui/icons-material";

function Comentarios(props) {

    // const [comment, setComment] = useState([])
    // const [newComment, setNewComment] = useState([])
    const [displayComment, setDisplayComment] = useState([])

    useEffect(() => {
        const getComententarioVoluntariadosRealizados = async () => {
            const comVoluntariadosFromServer = await fetchComentariosVoluntariadosRealizados()
            setDisplayComment(comVoluntariadosFromServer)
        }

        getComententarioVoluntariadosRealizados()

    }, [props.state])


    const fetchComentariosVoluntariadosRealizados = async () => {
        var res = [];
        var res2 = [];

        if (props.type === "pessoa") {
            res = await fetch('http://localhost:5000/comentariosVoluntariadosRealizados')
            res2 = await fetch('http://localhost:5000/comentariosFeitosPessoa')
        }

        if (props.type === "voluntariado") {
            res = await fetch('http://localhost:5000/comentariosVoluntariado')
            res2 = await fetch('http://localhost:5000/comentariosFeitosVoluntariado')
        }

        const data = await res.json()

        const data2 = await res2.json()

        var result = checkCommentsVoluntariados(data, data2);

        return result;
    }


    const checkCommentsVoluntariados = (comment, newComment) => {
        var list = [];
 
        if(!props.newVolunt){
            for (const element of comment) {
                list.push(element);
            }
        }

        for (const element of newComment) {
            if (element.idPersonCommented === props.idPerfil) {
                list.push(element);
            }
        }

        return list;
    }



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
                                <Grid item xs={2} sm={4} md={3} key={index}>
                                    <CardComment
                                        id={com.id}
                                        rating={com.rating}
                                        image={com.image}
                                        name={com.name}
                                        comment={com.comment}
                                        idperfil={com.idPersonCommenting}
                                    ></CardComment>
                                </Grid>
                            </>
                        )) : <>
                            <div className={style.voluntariadosProfile} style={{ marginTop: "7%", width: "100%" }}>
                                <Typography style={{
                                    fontWeight: 500,
                                    fontSize: 20,
                                    textAlign: 'center',
                                    color:"grey",
                                    marginLeft: 50
                                }}>
                                    Não tem comentários
                                </Typography>
                            </div></>}
                    </Grid>

                </Container>
                {!(displayComment.length === 0) ?
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Pagination count={1} className={style.paginationComment} />
                    </Grid> : <></>}
                <Container style={{
                    height: 50
                }}></Container>

            </div >
        </div >
    );

}

export default Comentarios