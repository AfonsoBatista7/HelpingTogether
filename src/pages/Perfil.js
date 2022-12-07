import InfoProfile from "../components/SectionsProfile/InfoProfile";
import VoluntariadosArea from "../components/SectionsProfile/VoluntariadosArea";
import CandidaturasPendentes from "../components/SectionsProfile/CandidaturasPendentes";
import Comentarios from "../components/SectionsProfile/Comentarios";
import style from "../components/SectionsProfile/Profiles.module.css";
import { Typography, Container } from "@mui/material";
import React, { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

function Perfil() {
    const { idPerfil, area } = useParams();

    const [perfilComent, setPerfilComent] = useState(false);

    const [perfil, setPerfil] = useState(null);
    const [perfilLoggedIn, setPerfilLoggedIn] = useState(null);

    const [openPopupAvaliacao, setOpenPopupAvaliacao] = useState(false);
    const [openPopupRegisterVoluntariado, setOpenPopupRegisterVoluntariado] = useState(false);
    const [openPopupSucessful, setOpenPopupSucessful] = useState(false);

    const [state, forceUpdate] = useReducer((x) => x + 1, 0);
    const [state2, forceUpdate2] = useReducer((x) => x + 1, 0);

    //vetor com todos os valores no login da Base de dados
    const [loggedIns, setLoggedIns] = useState([]);

    useEffect(() => {
        setTimeout(() => goToPage(), 500);
    }, [area, perfil]);

    const goToPage = () => {
        var elem;

        switch (area) {
            case "Perfil":
                elem = 0;
                break;
            case "Candidaturas":
                elem = document.getElementById("Perfil").clientHeight + 64;
                break;
            case "Realizados":
                elem =
                    document.getElementById("Candidatura").clientHeight +
                    document.getElementById("Perfil").clientHeight +
                    64;
                break;
            case "Voluntariados":
                elem = document.getElementById("Perfil").clientHeight + 64;
                break;
            case "Comentários":
                elem =
                    document.getElementById("Candidatura").clientHeight +
                    document.getElementById("Perfil").clientHeight +
                    document.getElementById("Voluntariados").clientHeight +
                    64;
                break;
            default:
                elem = 0;
                break;
        }

        window.scrollTo({ top: elem, behavior: "smooth" });
    };

    //vai buscar todos os valores de login da BD e mete em loggedIns
    useEffect(() => {
        const getLoggedIn = async () => {
            const loggedInFromServer = await fetchLoggedIn();

            setLoggedIns(loggedInFromServer);
        };

        getLoggedIn(loggedIns);
    }, []);

    const fetchLoggedIn = async () => {
        const res = await fetch("http://localhost:5000/login");
        const data = await res.json();

        checkIfNewPerfil(data);

        const res2 = await fetch("http://localhost:5000/voluntarios");
        const data2 = await res2.json();

        const res3 = await fetch("http://localhost:5000/organizacoes");
        const data3 = await res3.json();

        var list = [];

        for (const element of data) {
            list.push(element);
        }

        for (const element of data2) {
            list.push(element);
        }
        for (const element of data3) {
            list.push(element);
        }

        return list;
    };

    useEffect(() => {
        checkLogin();
        checkLoginOfLoggedIn();
    }, [loggedIns]);

    const checkLogin = () => {
        for (const element of loggedIns) {
            if (element.id == idPerfil) {
                setPerfil(element);
            }
        }
    };

    const checkLoginOfLoggedIn = () => {
        for (const element of loggedIns) {
            if (element.isLoggedIn) {
                setPerfilLoggedIn(element);
            }
        }
    };

    const checkIfNewPerfil = (list) => {
        for (const element of list) {
            if (element.id === idPerfil) {
                setPerfilComent(true);
            }
        }
    };

    // const voluntariadosToShow = (list) => {
    //     setVoluntToShow(list);
    // }

    const resgisterVoluntariado = () => {
        setOpenPopupRegisterVoluntariado(true);
    };

    const closeResgisterVoluntariado = () => {
        setOpenPopupRegisterVoluntariado(false);
        setOpenPopupSucessful(true);
        forceUpdate();
    };

    const avaliar = () => {
        setOpenPopupAvaliacao(true);
    };

    const closeAvaliacao = () => {
        setOpenPopupAvaliacao(false);
        forceUpdate2();
    };

    return (
        <>
            {perfil ? (
                <div className={style.backgroundwhite}>
                    <div className={style.margins}>
                        <div style={{ height: 40 }}></div>

                        <div id="Perfil">
                            <InfoProfile
                                avaliar={avaliar}
                                closeAvaliacao={closeAvaliacao}
                                perfilLoggedIn={perfilLoggedIn}
                                openPopupAvaliacao={openPopupAvaliacao}
                                setOpenPopupAvaliacao={setOpenPopupAvaliacao}
                                id={perfil.id}
                                name={perfil.name}
                                image={perfil.image}
                                email={perfil.email}
                                phone={perfil.phone}
                                rating={perfil.rating}
                                type={perfil.typePerfil}
                                login={perfil.isLoggedIn}
                                description={perfil.description}
                                birthday={perfil.birthday}
                                gender={perfil.gender}
                            />
                        </div>
                        {perfilLoggedIn &&
                            <div id="Candidatura">
                                {perfil.typePerfil !== "organizacao" &&
                                    perfilLoggedIn.id == idPerfil &&
                                    <CandidaturasPendentes
                                        id={perfilLoggedIn.id}
                                    />
                                }
                            </div>
                        }
                        <div id="Voluntariados">
                            <VoluntariadosArea
                                resgisterVoluntariado={resgisterVoluntariado}
                                closeResgisterVoluntariado={
                                    closeResgisterVoluntariado
                                }
                                openPopupRegisterVoluntariado={
                                    openPopupRegisterVoluntariado
                                }
                                setOpenPopupRegisterVoluntariado={
                                    setOpenPopupRegisterVoluntariado
                                }
                                openPopupSucessful={openPopupSucessful}
                                setOpenPopupSucessful={setOpenPopupSucessful
                                }
                                state={state}
                                id={perfil.id}
                                type={perfil.typePerfil}
                                nameOrg={perfil.name}
                                name={perfil.name}
                                idLoggedIn={perfilLoggedIn}
                            />
                        </div>
                        <div id="Comentários">
                            {perfil.typePerfil !== "organizacao" ? (
                                <>
                                    <Comentarios
                                        newPerfil={perfilComent}
                                        name={perfil.name}
                                        idPerfil={perfil.id}
                                        type="pessoa"
                                        state={state2}
                                        idLoggedIn={perfilLoggedIn}
                                    />

                                    <Container
                                        style={{
                                            height: 50,
                                        }}
                                    ></Container>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default Perfil;
