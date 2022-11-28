
import style from "./Profiles.module.css"
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Forest, Pets, Factory, People, FoodBank, HealthAndSafety } from '@mui/icons-material';
import { Grid, Typography, Container, Avatar, Button, TextField, Rating } from "@mui/material";
import PinDropRoundedIcon from '@mui/icons-material/PinDropRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import Evaluation from "../Popup/Evaluation";
import Popup from "../Popup/Popup";

function InfoVoluntariado(props) {

    const [perfil, setPerfil] = useState(null);

    //vetor com todos os valores no login da Base de dados
    const [loggedIns, setLoggedIns] = useState([])

    const [org, setOrg] = useState(null);

    const [organizacoes, setOrganizacoes] = useState([])

    const volunTypes = {
        Natureza: <Forest sx={{ color: "#344D67", fontSize: 30 }} fontSize="large" />,
        Animais: <Pets sx={{ color: "#344D67", fontSize: 30 }} fontSize="large" />,
        Poluição: <Factory sx={{ color: "#344D67", fontSize: 30 }} fontSize="large" />,
        Comunidade: <People sx={{color: "#344D67", fontSize: 30 }} fontSize="large" />,
        Gastronomia: <FoodBank sx={{ color:"#344D67", fontSize: 30 }} fontSize="large" />,
        Saúde: <HealthAndSafety sx={{ color: "#344D67", fontSize: 30 }} fontSize="large" />,
    };

    //vai buscar todos os valores de login da BD e mete em loggedIns
    useEffect(() => {
        const getLoggedIn = async () => {


            const loggedInFromServer = await fetchLoggedIn()

            setLoggedIns(loggedInFromServer)


        }

        getLoggedIn(loggedIns)

    }, [])

    const fetchLoggedIn = async () => {
        const res = await fetch('http://localhost:5000/login')
        const data = await res.json()

        return data;
    }


    useEffect(() => {
        checkLogin()

    }, [loggedIns])



    const checkLogin = () => {

        for (const element of loggedIns) {
            if (element.isLoggedIn) {
                setPerfil(element);
            }
        }

    }

    useEffect(() => {
        const getOrganizacoes = async () => {
            const organizacoesFromServer = await fetchOrganizacoes()

            setOrganizacoes(organizacoesFromServer)

        }

        getOrganizacoes(organizacoes)

    }, [])


    const fetchOrganizacoes = async () => {
        const res = await fetch('http://localhost:5000/organizacoes')

        const res2 = await fetch('http://localhost:5000/login')

        const data = await res.json()

        const data2 = await res2.json()

        var list = [];

        for (const element of data) {
            list.push(element)
        }

        for (const element of data2) {
            if (element.typePerfil === "organizacao")
                list.push(element)
        }

        return list;
    }

    useEffect(() => {
        checkOrganizacao()

    }, [organizacoes])

    const checkOrganizacao = () => {

        for (const element of organizacoes) {
            if (element.name === props.organizacao) {
                setOrg(element);
            }
        }

    }


    return (<>
        {org &&
            <div className={style.margins} style={{...props.style, alignItems: 'left', 
                backgroundImage: "linear-gradient(0deg, rgba(173,231,146,1) 0%, rgba(110,204,175,1) 100%)",
                borderRadius: '10px', padding: '10px' }}
            >
                <Grid container direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start">

                    <Grid item xs={3}
                        justifyContent="center"
                        alignItems="center">

                        <img className={style.photoVoluntariado}
                            src={"/" + props.image}
                        />

                        <Grid container direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            className={style.marginPhone}>
                            <Avatar className={style.marginRight}
                                src={"/" + org.image}

                                sx={{ width: 30, height: 30 }} />
                            <Link style={{ color: "#344D67", textDecoration: "none" }} to={`/Perfil/${org.id}/Perfil`} onClick={() => this.forceUpdate()}>
                                <Typography
                                    style={{
                                        fontWeight: 500,
                                        fontSize: 20,
                                        color: '#344D67',
                                        textTransform: "uppercase",
                                        textAlign: 'center'
                                    }}>{props.organizacao}</Typography>
                            </Link>
                        </Grid>

                        <Grid container direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            className={style.marginPhone}>
                            <PinDropRoundedIcon className={style.marginRight} style={{
                                color: '#344D67',
                                fontSize: 30
                            }}></PinDropRoundedIcon>
                            <Typography
                                style={{
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: '#344D67',
                                    textAlign: 'center'
                                }}>{props.location}</Typography>
                        </Grid>


                        <Grid container direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            className={style.marginPhone}>
                            <CalendarMonthRoundedIcon className={style.marginRight} style={{
                                color: '#344D67',
                                fontSize: 30
                            }}></CalendarMonthRoundedIcon>

                            <Typography className={style.margintop}
                                style={{
                                    fontWeight: 500,
                                    fontSize: 15,
                                    color: '#344D67',
                                    textTransform: "uppercase",
                                    textAlign: 'center'
                                }}>{props.startDate} - {props.endDate}</Typography>
                        </Grid>

                    </Grid>
                    <Grid item xs={8}
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        className={style.widhtdescription}>


                        <div className={style.titleVoluntariado}>

                            <Grid container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center">


                                <div className={style.descriptionvoluntario} >
                                    <Typography style={{
                                        fontWeight: 700,
                                        fontSize: 30,
                                        color: '#344D67',
                                        textTransform: "uppercase",
                                        wordWrap: "break-word",
                                        textAlign: 'left'
                                    }}>{props.name}</Typography>
                                </div>

                                <div className={style.rating}>
                                    <Rating name="half-rating-read" defaultValue={props.rating} precision={1} readOnly size="large" />
                                </div>
                            </Grid>

                        </div>

                        <Container className={style.descriptionarea} style={{ padding: "20px" }}>
                            <div style={{ float: "left" }}>
                                <Typography style={{ color: "#344D67" }}>
                                    Descrição
                                </Typography>
                            </div>
                            <TextField
                                disabled
                                fullWidth
                                multiline
                                rows={5}
                                id="outlined-disabled"
                                defaultValue={props.description}
                            />

                        </Container>



                    </Grid>
                </Grid >

                {props.type.length !== 0 &&
                <div style={{marginRight: "8px"}}>
                    <Grid container alignItems="flex-end" justifyContent="flex-end" direction="row" spacing={1}>
                        {props.type.map((type) => (
                            <Grid item>
                                {volunTypes[type]}
                            </Grid>
                        ))}
                    </Grid>
                </div> 
                }
                {perfil && <>
                    {perfil.typePerfil !== "organizacao" && <>
                        {props.done &&
                            <div className={style.avaliarbutton}>
                                <Button style={{borderRadius: "20px", width: "20vw", background: "#344D67" }} variant="contained" onClick={props.avaliar}>
                                    <Typography style={{ color: "#D6E4E5" }}>Avaliar</Typography>
                                </Button>
                                <Popup
                                    openPopup={props.openPopupAvaliacao}
                                    setOpenPopup={props.setOpenPopupAvaliacao}
                                >
                                    <Evaluation idPersonCommented={props.id} idPersonCommenting={perfil.id} name={perfil.name} nameOfTheCommented={props.name} type="voluntariado" closePopup={props.closeAvaliacao} />
                                </Popup>
                            </div>
                        }
                    </>
                    }
                </>}
            </div >
        }</>
    );
}

export default InfoVoluntariado
