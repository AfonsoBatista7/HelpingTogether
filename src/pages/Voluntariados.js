import style from "../components/SectionsProfile/Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider, Button } from "@mui/material";
import React, { useState, useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom"
import BoxVoluntariado from "../components/StatsShowers/Box/BoxVoluntariado";
import RegisterVoluntariado from "../components/Popup/RegisterVoluntariado";
import Popup from "../components/Popup/Popup";
import SearchBar from "../components/Search/SearchBar";
import { Link } from "react-router-dom";
import { ObjectSchema } from "yup";
import { FilterRounded } from "@mui/icons-material";

function Voluntariados() {
    const [state, forceUpdate] = useReducer(x => x + 1, 0);

    const [perfil, setPerfil] = useState(null);
    const [openPopupRegisterVoluntariado, setOpenPopupRegisterVoluntariado] = useState(false);

    const [voluntariados, setVoluntariados] = useState([])
    // filters active
/*     const [searchFilter, setSearchFilter] = useSearchParams({
        Texto: "", Tipo: "", Região: "", Duração: "",
    }) */
    const [searchFilter, setSearchFilter] = useSearchParams()

    //vetor com todos os valores no login da Base de dados
    const [loggedIns, setLoggedIns] = useState([])

    const filters = {
        Tipo: ['Natureza', 'Animais', 'Poluição', 'Comunidade', 'Gastronomia', 'Saúde'],
        Região: [
            "Norte",
            "Centro",
            "Alentejo",
            "Área Metropolitana Lisboa",
            "Algarve",
            "Açores",
            "Madeira",
        ],
        Duração: ["Reduzida", "Média", "Longa"],
    };

    const searchTextUpdate = (text) => {
        let updatedSearchParams = new URLSearchParams(searchFilter.toString());
        updatedSearchParams.set("Texto", text);
        setSearchFilter(updatedSearchParams.toString());
        forceUpdate()
    }

    const searchFilterUpdate = (filter, value) => {
        let updatedSearchParams = new URLSearchParams(searchFilter.toString());
        updatedSearchParams.set(filter, value);
        setSearchFilter(updatedSearchParams.toString());
        forceUpdate()
    }

    const clearFilters = () => {
        //setSearchFilter(prev => ({...prev, Tipo: "", Região: "", Duração: ""}))
        setSearchFilter({})
        forceUpdate()
    }

    const isFiltered = () => {
        return searchFilter["Texto"] != "" || searchFilter["Tipo"] != "" 
            || searchFilter["Região"] != "" || searchFilter["Duração"] != ""
    }

    const getDayDifference = (dateStringA, dateStringB) => {
        const d1 = new Date(dateStringA)
        const d2 = new Date(dateStringB)
        let diff = Math.abs(d1.getTime() - d2.getTime())
        let dayDiff = diff / (1000 * 3600 * 24)
        return dayDiff
    }

    const isRightDuration = (durationString, dateStringA, dateStringB) => {
        let dayDiff = getDayDifference(dateStringA, dateStringB)
        switch(durationString) {
            case filters["Duração"][0]:     // dur. reduzida
                return dayDiff == 0;
            case filters["Duração"][1]:     // dur. media
                return dayDiff >= 1 && dayDiff <= 7;
            case filters["Duração"][2]:     // dur. longa
                return dayDiff >= 8;
        }
    }

    //vai buscar todos os valores de login da BD e mete em loggedIns
    useEffect(() => {
        const getVoluntariados = async () => {
            const voluntariadosFromServer = await fetchVoluntariados()
            let results = voluntariadosFromServer

            if (searchFilter.get("Texto") != null) {
                results = results.filter(elem => elem["name"].toLowerCase().includes( searchFilter.get("Texto").toLowerCase() ))
            } if (searchFilter.get("Tipo") != null) {
                results = results.filter(elem => elem["type"].includes(searchFilter.get("Tipo")))
            } if (searchFilter.get("Região") != null) {
                results = results.filter(elem => elem["region"].includes(searchFilter.get("Região")))
            } if (searchFilter.get("Duração") != null) {
                results = results.filter(elem => isRightDuration(searchFilter.get("Duração"), elem["startDate"], elem["endDate"]))
            }

/*             if (isFiltered()) {
                results = []
                const searchText = searchFilter["Texto"]
                const searchType = searchFilter["Tipo"]
                const searchRegion = searchFilter["Região"]
                const searchDuration = searchFilter["Duração"]

                voluntariadosFromServer.forEach(elem => {
                    let elemValid = true
                    if (searchText != "") {
                        elemValid = false
                        if (elem["name"].toLowerCase().includes(searchText)) {
                            elemValid = true
                            //console.log("Text check success")
                    }}
                    if (searchType != "" && !elem["type"].includes(searchType)) {
                        elemValid = false
                        //console.log("Type check fail")
                    } if (searchRegion != "" && !elem["region"].includes(searchRegion)) {
                        elemValid = false
                        //console.log("Region check fail")
                    } if (searchDuration != "" && !isRightDuration(searchDuration, elem["startDate"], elem["endDate"])) {
                        elemValid = false
                        //console.log("Duration check fail")
                    }
                    if (elemValid)
                        results.push(elem)
                });
            } */
            setVoluntariados(results)
        }

        getVoluntariados()

    }, [state])


    const fetchVoluntariados = async () => {
        const res = await fetch('http://localhost:5000/voluntariados')
        const data = await res.json()

        const res2 = await fetch('http://localhost:5000/novosVoluntariados')
        const data2 = await res2.json()

        var list = [];

        for (const element of data2) {
            list.push(element);
        }

        for (const element of data) {
            list.push(element);
        }

        return list;
    }

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

    const resgisterVoluntariado = () => {
        setOpenPopupRegisterVoluntariado(true);
    }

    const closeResgisterVoluntariado = () => {
        setOpenPopupRegisterVoluntariado(false);
        forceUpdate();
    }

    return (
        <div className={style.backgroundwhite}>
            <div className={style.margins}>
                <Container style={{
                    height: 80
                }}></Container>
                <Grid container
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
                            marginLeft: 50
                        }}
                    >Voluntariados</Typography>
                    {!perfil ? <></> : <>
                        {perfil.typePerfil === "organizacao" ?
                            <div style={{ float: "right" }}>
                                <Button onClick={resgisterVoluntariado}>
                                    <Typography style={{ color: "#497174" }}>+ Criar</Typography>
                                </Button>
                                <Popup
                                    openPopup={openPopupRegisterVoluntariado}
                                    setOpenPopup={setOpenPopupRegisterVoluntariado}
                                >
                                    <RegisterVoluntariado organizacao={perfil.name} closePopup={closeResgisterVoluntariado} />
                                </Popup></div> 
                                : <>
                                <div style={{ float: "right" }}>
                                    <Link style={{  textDecoration: "none"}} to={`/Perfil/${perfil.id}/Realizados`}>
                                        <Button variant="contained" style={{background: "#497174"}}>
                                            <Typography style={{ color: "white" }}>Ver Realizados</Typography>
                                        </Button>
                                    </Link></div> </>}
                    </>}

                </Grid>

                <Divider />
                <Grid item className={style.filter}>
                    <SearchBar 
                        onSearchTextUpdate={searchTextUpdate} 
                        onFilterUpdate={searchFilterUpdate} 
                        onClearFilter={clearFilters}
                        filters={filters} />
                </Grid>
                <Container>
                    {!(voluntariados.length === 0) ? voluntariados.map((vol) => (
                        <div key={vol.id}>
                            <div className={style.boxShow}></div>
                            <BoxVoluntariado
                                id={vol.id}
                                image={vol.image}
                                name={vol.name}
                                rating={vol.rating}
                                desc={vol.description}
                                date={vol.endDate}
                                location={vol.location}
                                typePerfil="voluntariado"
                                className={style.boxShow}></BoxVoluntariado>
                            <div className={style.boxShow}></div></div>
                    )) : <></>}
                </Container>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Pagination count={1} />
                </Grid>
                <Container style={{
                    height: 50
                }}></Container>

            </div >
        </div>


    );
}

export default Voluntariados;