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

                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">

                    <Grid item xs={6}>
                        <Typography
                            style={{
                                fontWeight: 500,
                                fontSize: 20,
                                color: '#497174',
                                textTransform: "uppercase",
                                textAlign: 'left',
                                marginLeft: 50
                            }}
                        >
                            {props.type === "organizacao" ? "Voluntariados" : "Voluntariados Realizados"}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        {(props.type === "organizacao") && (props.id === props.idLoggedIn) ?
                            <>
                                <Button onClick={props.resgisterVoluntariado} style={{ float: "right" }}>
                                    <Typography style={{ color: "#497174" }}>+ Criar</Typography>
                                </Button > <Popup
                                    openPopup={props.openPopupRegisterVoluntariado}
                                    setOpenPopup={props.setOpenPopupRegisterVoluntariado}
                                >
                                    <RegisterVoluntariado organizacao={props.nameOrg} closePopup={props.closeResgisterVoluntariado} />
                                </Popup></> : <></>}
                    </Grid>

                </Grid>
                <Divider className={style.voluntariadosProfile} />
                <Container>
                    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 2, sm: 8, md: 16 }}>
                        {!(displayVolunt.length === 0) ? displayVolunt.map((vol, index) => (
                            <><Grid item xs={2} sm={4} md={4} key={index}>
                                <MiniBoxVoluntariado
                                    id={vol.id}
                                    image={vol.image}
                                    name={vol.name}
                                    desc={vol.description}
                                ></MiniBoxVoluntariado>
                            </Grid></>
                        )) : <>
                            <div className={style.voluntariadosProfile} style={{ marginTop: "3%", width: "100%" }}>
                                <Typography style={{
                                    fontWeight: 500,
                                    fontSize: 20,
                                    textAlign: 'center',
                                    color: "grey",
                                    marginLeft: 50
                                }}>
                                    Não tem voluntariados
                                </Typography>
                            </div>
                        </>}
                    </Grid>
                </Container>
                {!(displayVolunt.length === 0) ?
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Pagination count={1} className={style.pagination} />
                    </Grid> : <></>}

            </div >
        </div >
    );

}

export default VoluntariadosArea