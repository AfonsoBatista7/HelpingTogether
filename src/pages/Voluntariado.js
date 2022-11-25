import Comentarios from "../components/SectionsProfile/Comentarios";
import style from "../components/SectionsProfile/Profiles.module.css"
import { Pagination, Grid, Typography, Container, Button } from "@mui/material";
import InfoVoluntariado from "../components/SectionsProfile/InfoVoluntariado";
import AcceptCandidates from "../components/SectionsProfile/AcceptCandidates";
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import React, { useState, useEffect, useReducer } from 'react'
import { useParams, } from "react-router-dom";
import { CollectionsOutlined, ContentCutOutlined } from "@mui/icons-material";

function Voluntariado() {

    const { idVolt } = useParams();

    const [volunt, setVoluntariado] = useState(null);

    const [volntAll, setAllVolunt] = useState([]);

    const [candidate, editState] = useState(false);

    const [perfil, setPerfil] = useState(null);

    const [voltDone, setVoltDone] = useState(false);

    const [voluntsDone, setVoluntsDone] = useState([]);

    const [voluntsComent, setVoluntsComent] = useState(false);

    const [openPopupAvaliacao, setOpenPopupAvaliacao] = useState(false);
    const [state, forceUpdate] = useReducer(x => x + 1, 0);

    //vetor com todos os valores no login da Base de dados
    const [loggedIns, setLoggedIns] = useState([]);

    const [candidatura, setCandidatura] = useState([])

    const [candid, setVoluntariados] = useState([]);

    const checkifiscandid = (id) => {

        const getVolunts = async () => {

            const listVolunt = await fetchCandidatura()

            checkIfCandidate(listVolunt, id)

            setVoluntariados(listVolunt)

        }

        getVolunts(candid)

    }

    const fetchCandidatura = async () => {
        var res = await fetch('http://localhost:5000/candidaturas');

        var data = await res.json()

        return data;
    }

    //vai buscar todos os valores de login da BD e mete em loggedIns
    useEffect(() => {
        const getLoggedIn = async () => {
            const loggedInFromServer = await fetchLoggedIn()

            setLoggedIns(loggedInFromServer)
        }

        getLoggedIn(loggedIns)

    }, [])

    useEffect(() => {
        const getVoluntariados = async () => {
            const VoluntariadosFromServer = await fetchVoluntariados()

            setAllVolunt(VoluntariadosFromServer)

        }

        getVoluntariados(volntAll)

    }, [])

    useEffect(() => {
        const getVolunteringDone = async () => {
            const VoltDoneFromServer = await fetchVoltDone()

            setVoluntsDone(VoltDoneFromServer)

            checkVoltDone(VoltDoneFromServer)
        }

        getVolunteringDone(voluntsDone)

    }, [])

    const fetchVoltDone = async () => {
        const res = await fetch('http://localhost:5000/voluntariadosRealizados')
        const data = await res.json()

        return data;
    }

    useEffect(() => {
        checkVoltDone(voluntsDone)


    }, [voluntsDone])

    const checkVoltDone = (VoltDone) => {

        for (const element of VoltDone) {
            if (element.id == idVolt) {
                setVoltDone(true);
            }
        }

    }

    const checkIfCandidate = (candid, idLogin) => {
        for (const element of candid) {
            if ((element.idPerson == idLogin) && (element.idVolunt == idVolt)) {
                editState(true);
                setCandidatura(element);
            }
        }

    }

    const fetchLoggedIn = async () => {
        const res = await fetch('http://localhost:5000/login')
        const data = await res.json()

        return data;
    }

    const fetchVoluntariados = async () => {
        const res = await fetch('http://localhost:5000/novosVoluntariados')
        const res2 = await fetch('http://localhost:5000/voluntariados')

        const data = await res.json()
        const data2 = await res2.json()

        var list = [];
        var listNewVol = [];

        for (const element of data) {
            list.push(element)
            listNewVol.push(element)
        }

        checkIfNewVoluntariado(listNewVol)

        for (const element of data2) {
            list.push(element)
        }

        return list;
    }

    useEffect(() => {
        checkVoluntariados()


    }, [volntAll])

    const checkIfNewVoluntariado = (list) => {
        for (const element of list) {
            if (element.id == idVolt) {
                setVoluntsComent(true);
            }
        }
    }

    const checkVoluntariados = () => {
        for (const element of volntAll) {
            if (element.id == idVolt) {
                setVoluntariado(element);
            }
        }
    }

    useEffect(() => {
        checkLogin()

    }, [loggedIns])

    const checkLogin = () => {

        for (const element of loggedIns) {
            if (element.isLoggedIn) {

                checkifiscandid(element.id)
                setPerfil(element);
            }
        }

    }

    function changeState() {
        var temp = !candidate;

        editState(temp);

        checkBottum(temp)
    }



    function checkBottum(temp) {

        if (temp) {
            addVoluntariado({ idVolunt: volunt.id, idPerson: perfil.id });
        } else {
            deleteVoluntariado(candidatura.id);
        }
    }


    const addVoluntariado = async (value) => {
        const res = await fetch('http://localhost:5000/candidaturas', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(value),
        })

        const data = await res.json()

    }

    const deleteVoluntariado = async (id) => {
        const res = await fetch(`http://localhost:5000/candidaturas/${id}`, {
            method: 'DELETE',
        })
    }

    const avaliar = () => {
        setOpenPopupAvaliacao(true);
    }

    const closeAvaliacao = () => {
        setOpenPopupAvaliacao(false);
        forceUpdate();
    }

    return (<>
        {volunt ? <>
            <div className={style.backgroundwhite}>
                <div style={{ height: 40 }}></div>

                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    className={style.marginsVoluntariado}>

                    <Grid item xs={6}
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <Typography
                            style={{
                                fontWeight: 700,
                                fontSize: 30,
                                color: '#497174',
                                textTransform: "uppercase",
                                textAlign: 'left',
                                marginLeft: "6%"
                            }}
                        >Voluntariado</Typography>
                    </Grid>
                    <Grid item xs={5} className={style.marginsVoluntariado}>
                        {!perfil ? <></> : <>
                            {perfil.typePerfil === "organizacao" ? <>
                            </> : <>
                                {!voltDone ? <>
                                    {!candidate ?
                                        <Button variant="contained" color="success" size="medium" style={{ float: 'right' }} className={style.buttonedit} onClick={changeState}>
                                            < DoneOutlineRoundedIcon className={style.marginRight} style={{
                                                color: 'white',
                                                fontSize: 20
                                            }}></ DoneOutlineRoundedIcon> <Typography
                                                style={{
                                                    fontWeight: 500,
                                                    fontSize: 20,
                                                    textTransform: "uppercase",
                                                    textAlign: 'left',

                                                }}
                                            >Candidatar</Typography>
                                        </Button>
                                        : <Button variant="contained" color="error" size="small" style={{ float: 'right' }} className={style.buttonedit} onClick={changeState}>
                                            < CancelOutlinedIcon className={style.marginRight} style={{
                                                color: 'white',
                                                fontSize: 20
                                            }}></ CancelOutlinedIcon> <Typography
                                                style={{
                                                    fontWeight: 500,
                                                    fontSize: 15,
                                                    textTransform: "uppercase",
                                                    textAlign: 'center',

                                                }}
                                            >Cancelar Candidatura</Typography>
                                        </Button>}
                                </> : <></>}</>}
                        </>}

                    </Grid>
                </Grid>

                <InfoVoluntariado avaliar={avaliar} closeAvaliacao={closeAvaliacao} openPopupAvaliacao={openPopupAvaliacao} setOpenPopupAvaliacao={setOpenPopupAvaliacao} state={state} done={voltDone} id={volunt.id} name={volunt.name} image={volunt.image} organizacao={volunt.organizacao} startDate={volunt.startDate} description={volunt.description} endDate={volunt.endDate} location={volunt.location} rating={volunt.rating} />

                <Container style={{
                    height: 50
                }}></Container>

                {volunt.organizacao===perfil.name? 
                <AcceptCandidates id={volunt.id} ></AcceptCandidates>
                :<></>}

                <Comentarios newVolunt={voluntsComent} name={volunt.name} idPerfil={volunt.id} type="voluntariado" state={state} />


                <Container style={{
                    height: 50
                }}></Container>


            </div ></>
            : <></>}</>

    );
}

export default Voluntariado;