import style from "./Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import RegisterVoluntariado from "../Popup/RegisterVoluntariado";
import Popup from "../Popup/Popup";
import MiniBoxVoluntariado from "../StatsShowers/Box/MiniBoxVoluntariado";

function VoluntariadosArea(props) {

    const [displayVolunt, setDisplayVolunt] = useState([]);


    useEffect(() => {
        const getVolunt = async () => {
            const listVolunt = await fetchVoluntariados()
            setDisplayVolunt(listVolunt)
        }

        getVolunt()

    }, [props.state])

    const fetchVoluntariados = async () => {
        var res = [];
        var resultado = [];

        if (props.type === "organizacao") {
            res = await fetch('http://localhost:5000/voluntariados');
            var data1 = await res.json()
            data1 = checkOrganization(data1);

            const res2 = await fetch('http://localhost:5000/novosVoluntariados')
            var data2 = await res2.json()
            data2 = checkOrganization(data2);
            resultado = makeList(data1, data2);

        } else {
            res = await fetch('http://localhost:5000/voluntariadosRealizados')
            var data3 = await res.json()

            resultado = checkVoluntDone(data3);
        }


        return resultado;
    }

    const checkVoluntDone = (data) => {
        var list = [];

        for (const element of data) {
            for (const e of element.participants)
                if (e === props.id) {
                    list.push(element);
                }
        }

        return list;
    }



    const checkOrganization = (data) => {
        var list = [];

        for (const element of data) {
            if (element.organizacao === props.name) {
                list.push(element);
            }
        }

        return list;
    }

    const makeList = (newV, v) => {
        var list = [];

        for (const element of newV) {
            list.push(element);
        }

        for (const element of v) {
            list.push(element);
        }

        return list;
    }


    return (
        <div id="Voluntariados" className={style.backgroundwhite}>
            <div >
                <Container style={{
                    height: 80
                }}></Container>

                {props.idLoggedIn ?
                    <>
                        {(props.type === "organizacao") && (props.id === props.idLoggedIn.id) ?
                            <>
                                <Button onClick={props.resgisterVoluntariado} style={{ float: "right" }}>
                                    <Typography style={{ color: "#497174" }}>+ Criar</Typography>
                                </Button >
                                <Popup
                                    openPopup={props.openPopupRegisterVoluntariado}
                                    setOpenPopup={props.setOpenPopupRegisterVoluntariado}
                                >
                                    <RegisterVoluntariado organizacao={props.nameOrg} closePopup={props.closeResgisterVoluntariado} />
                                </Popup>
                                <Popup
                                    tipo="registerSucessful"
                                    openPopup={props.openPopupSucessful}
                                    setOpenPopup={props.setOpenPopupSucessful}
                                >
                                </Popup></> : <></>}
                    </> : <></>}

                <Divider style={{ marginTop: "36px", marginBottom: "20px" }}>
                    <Grid container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center">

                        <Grid item xs={6}>
                            <Typography
                                style={{
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: '#344D67',
                                    textTransform: "uppercase",
                                }}
                            >
                                {props.type === "organizacao" ? "Voluntariados" : "Voluntariados Realizados"}
                            </Typography>
                        </Grid>
                    </Grid>
                </Divider>
                <Container>
                    {!(displayVolunt.length === 0) ?
                        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 2, sm: 8, md: 16 }}>
                            {displayVolunt.map((vol, index) => (
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
                        :
                        <div>
                            <img style={{ display: "block", marginRight: "auto", marginLeft: "auto", width: "30%" }} alt="imgEmptyVol" src={`/img${Math.floor(Math.random() * 9) + 1}.png`}></img>
                            <Typography style={{
                                fontWeight: 500,
                                fontSize: 20,
                                textAlign: 'center',
                                color: "grey",
                            }}>
                                Ainda não realizou voluntariados
                            </Typography>
                        </div>
                    }
                </Container>
                {!(displayVolunt.length === 0) &&
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Pagination count={1} className={style.pagination} />
                    </Grid>}

            </div >
        </div >
    );

}

export default VoluntariadosArea