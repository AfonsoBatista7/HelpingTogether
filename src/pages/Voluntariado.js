import Comentarios from "../components/SectionsProfile/Comentarios";
import style from "../components/SectionsProfile/Profiles.module.css"
import { Grid, Typography, Container, Button } from "@mui/material";
import InfoVoluntariado from "../components/SectionsProfile/InfoVoluntariado";
import AcceptCandidates from "../components/SectionsProfile/AcceptCandidates";
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import React, { useState, useEffect, useReducer } from 'react'
import { useParams, } from "react-router-dom";
import ShowOldCandidates from "../components/SectionsProfile/ShowOldCandidates";


function Voluntariado() {

    const { idVolt } = useParams();

    const [volunt, setVoluntariado] = useState(null);

    const [volntAll, setAllVolunt] = useState([]);

    const [candidate, editState] = useState(false);

    const [acceptedorRejected, editStateAceptedRejected] = useState(false);

    const [perfil, setPerfil] = useState(null);

    const [voltDone, setVoltDone] = useState(false);

    const [voltRealizado, setVoltRealizado] = useState(false);

    const [voluntsDone, setVoluntsDone] = useState([]);

    const [voluntsComent, setVoluntsComent] = useState(false);

    const [openPopupAvaliacao, setOpenPopupAvaliacao] = useState(false);
    const [state, forceUpdate] = useReducer(x => x + 1, 0);

    //vetor com todos os valores no login da Base de dados
    const [loggedIns, setLoggedIns] = useState([]);

    const [candidatura, setCandidatura] = useState([])

    const [candid, setVoluntariados] = useState([]);


    useEffect(() => {

        checkifVoluntariadoRealizado()
    }, [])

    const checkifVoluntariadoRealizado = async () => {
        var res = await fetch('http://localhost:5000/voluntariadosRealizados');
        var data = await res.json()

        for (const element of data) {
            if (element.id == idVolt) {
                setVoltRealizado(true)
            }
        }


    }


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

    const checkifAlredyAcceptedRejected = (id) => {
        const getAcceptedRejected = async (id) => {

            await fetchAcceptedRjected(id)

        }

        getAcceptedRejected(id)
    }

    const fetchAcceptedRjected = async (id) => {
        var res = await fetch('http://localhost:5000/candidaturasAceites');
        var data = await res.json()

        var res2 = await fetch('http://localhost:5000/candidaturasRejeitadas');
        var data2 = await res2.json()

        var res3 = await fetch('http://localhost:5000/voluntariadosRealizados');
        var data3 = await res3.json()

        for (const element of data) {
            if ((element.idVolunt == idVolt) && (element.idPerson == id))

                editStateAceptedRejected(true)
        }

        for (const element of data2) {
            if ((element.idVolunt === idVolt) && (element.idPerson === id))
                editStateAceptedRejected(true)
        }

        for (const element of data3) {
            if (element.id == idVolt)
                editStateAceptedRejected(true)
        }

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

    const voluntDone = (value) => {
        const getVolunteringDone = async () => {
            const VoltDoneFromServer = await fetchVoltDone(value)

            setVoluntsDone(VoltDoneFromServer)

            checkVoltDone(VoltDoneFromServer)
        }

        getVolunteringDone(voluntsDone)

    }

    const fetchVoltDone = async (id) => {
        const res = await fetch('http://localhost:5000/voluntariadosRealizados')
        const data = await res.json()

        var list = []

        for (const elem of data) {
            for (const e of elem.participants) {
                if (e === id)
                    list.push(elem)
            }
        }

        return list;
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
                checkifAlredyAcceptedRejected(element.id)
                setPerfil(element);

                voluntDone(element.id);
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

    const volunEnded = perfil  && acceptedorRejected && voltRealizado;

    const volunNotEnded = perfil  && !acceptedorRejected && !voltDone;

    const redOrGreen = () => {
        if (volunEnded)
            return "3px solid #EB6440"
        else if (volunNotEnded)
            return "3px solid green"
        else
            return ""

    }

    return (
        <>
            {volunt &&
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
                                    color: '#344D67',
                                    textTransform: "uppercase",
                                    textAlign: 'left',
                                    marginLeft: "6%"
                                }}
                            >Voluntariado</Typography>
                        </Grid>
                        <Grid item xs={5} className={style.marginsVoluntariado}>
                            {perfil && <>
                                {acceptedorRejected ? <>
                                    {voltRealizado &&
                                        <Typography style={{
                                            fontWeight: 700,
                                            fontSize: 20,
                                            color: '#EB6440',
                                            textAlign: 'right',
                                            position: "relative",
                                            left: "7%"
                                        }}> Voluntariado Terminado </Typography>
                                    }
                                </>
                                    : <>
                                        {perfil.typePerfil !== "organizacao" && <>
                                            {!voltDone &&
                                                <>
                                                    {!candidate ?
                                                        <Button variant="contained" color="success" size="small" style={{ float: 'right', position: "relative", left: "5.5vw" }}
                                                            onClick={changeState}>
                                                            <DoneOutlineRoundedIcon className={style.marginRight} style={{
                                                                color: 'white',
                                                                fontSize: 20
                                                            }} />
                                                            <Typography
                                                                style={{
                                                                    fontWeight: 500,
                                                                    fontSize: 20,
                                                                    textTransform: "uppercase",
                                                                    textAlign: 'left',

                                                                }}
                                                            >Candidatar</Typography>
                                                        </Button>
                                                        : <Button variant="contained" color="error" size="large" style={{ float: 'right', position: "relative", left: "5.5vw" }} onClick={changeState}>
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
                                                            >Cancelar</Typography>
                                                        </Button>
                                                    }
                                                </>
                                            }
                                        </>}
                                    </>}
                            </>}

                        </Grid>
                    </Grid>

                    <InfoVoluntariado style={{ outline: redOrGreen(), outlineOffset: "5px" }} avaliar={avaliar} closeAvaliacao={closeAvaliacao} openPopupAvaliacao={openPopupAvaliacao} setOpenPopupAvaliacao={setOpenPopupAvaliacao} realizado={voltRealizado} state={state} done={voltDone} id={volunt.id} name={volunt.name} image={volunt.image} organizacao={volunt.organizacao} startDate={volunt.startDate} description={volunt.description} endDate={volunt.endDate} location={volunt.location} rating={volunt.rating} type={volunt.type} />

                    <Container style={{
                        height: 50
                    }}></Container>

                    {perfil && <>
                        {(volunt.organizacao === perfil.name) && !voltRealizado &&
                            <AcceptCandidates id={volunt.id} />
                        }
                    </>}

                    <Container style={{
                        height: 50
                    }}></Container>


                    <ShowOldCandidates idVolt={idVolt} />

                    <Comentarios newVolunt={voluntsComent} name={volunt.name} idPerfil={volunt.id} type="voluntariado" state={state} />

                    <Container style={{
                        height: 50
                    }}></Container>

                </div>
            }
        </>

    );
}

export default Voluntariado;