import style from "./Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import RegisterVoluntariado from "../Popup/RegisterVoluntariado";
import Popup from "../Popup/Popup";
import MiniBoxVoluntariado from "../StatsShowers/Box/MiniBoxVoluntariado";

function VoluntariadosArea(props) {

    const [volunt, setVoluntariados] = useState([])

    useEffect(() => {
        const getLoggedIn = async () => {
            const listVolunt = await fetchVoluntariados()
            setVoluntariados(listVolunt)
        }

        getLoggedIn(volunt)

    }, [])

    const fetchVoluntariados = async () => {
        var res = [];

        if (props.type === "organizacao") {
            res = await fetch('http://localhost:5000/voluntariados');
        } else {
            res = await fetch('http://localhost:5000/voluntariadosRealizados')
        }

        var data = await res.json()

        if (props.type === "organizacao")
            data = checkOrganization(data);

        return data;
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

    const [openPopupRegisterVoluntariado, setOpenPopupRegisterVoluntariado] = useState(false);

    const resgisterVoluntariado = () => {
        setOpenPopupRegisterVoluntariado(true);
    }

    const closeResgisterVoluntariado = () => {
        setOpenPopupRegisterVoluntariado(false);
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


                    {props.type === "organizacao" ?
                        <>
                            <Button onClick={resgisterVoluntariado}>
                                <Typography style={{ color: "#497174" }}>+ Criar</Typography>
                            </Button > <Popup
                                openPopup={openPopupRegisterVoluntariado}
                                setOpenPopup={setOpenPopupRegisterVoluntariado}
                            >
                                <RegisterVoluntariado organizacao={props.nameOrg} closePopup={closeResgisterVoluntariado} />
                            </Popup></> : <></>}

                </Grid>
                <Divider className={style.voluntariadosProfile}/>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {!(volunt.length === 0) ? volunt.map((vol, index) => (
                            <><Grid item xs={2} sm={4} md={4} key={index}> 
                                <MiniBoxVoluntariado
                                    image={vol.image}
                                    name={vol.name}
                                    desc={vol.description}
                                    key={vol.id}></MiniBoxVoluntariado>
                                </Grid></>
                        )) : <></>}
                    </Grid>
                </Container>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Pagination count={5} className={style.pagination}/>
                </Grid>

            </div >
        </div >
    );

}

export default VoluntariadosArea