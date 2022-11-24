import style from "../components/SectionsProfile/Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider, Button } from "@mui/material";
import React, { useState, useEffect, useReducer } from "react";
import BoxOrganization from "../components/StatsShowers/Box/BoxOrganization";
import SearchBar from "../components/Search/SearchBar";

function Organizacoes() {
    const [state, forceUpdate] = useReducer(x => x + 1, 0);
    const [organizacoes, setOrganizacoes] = useState([])

    const [organizacoesNumberVol, setOrganizacoesNumberVol] = useState([])

    const [newVoluntariados, setNewVoluntariados] = useState([]);
    const [voluntariados, setVoluntariados] = useState([])
    const [searchFilter, setSearchFilter] = useState({
        Texto: "", Tipo: ""
    })

    const searchTextUpdate = (text) => {
        setSearchFilter(prev => ({...prev, Texto: text}))
        forceUpdate()
    }

    const searchFilterUpdate = (filter, value) => {
        setSearchFilter(prev => ({...prev, Tipo: value}))
        forceUpdate()
    }

    const clearFilters = () => {
        setSearchFilter(prev => ({...prev, Tipo: ""}))
        forceUpdate()
    }

    const filters = {
        Tipo: ['Natureza', 'Animais', 'Poluição', 'Comunidade', 'Gastronomia', 'Saúde']
    };

    useEffect(() => {
        const getOrganizacoes = async () => {
            const organizacoesFromServer = await fetchOrganizacoes()
            let results = organizacoesFromServer
            //console.log(searchFilter)

            if (searchFilter["Tipo"] != "") {
                results = results.filter(elem => elem["type"].includes(searchFilter["Tipo"]))
            } if (searchFilter["Texto"] != "") {
                results = results.filter(elem => elem["name"].includes(searchFilter["Texto"]))
            }
            setOrganizacoes(results)
        }

        getOrganizacoes()

    }, [state])

    const fetchOrganizacoes = async () => {
        const res = await fetch('http://localhost:5000/organizacoes')
        const data = await res.json()

        return data;
    }


    useEffect(() => {
        const getVoluntariados = async () => {
            const voluntariadosFromServer = await fetchVoluntariados()

            setVoluntariados(voluntariadosFromServer)

        }

        getVoluntariados()

    }, [])

    const fetchVoluntariados = async () => {
        const res = await fetch('http://localhost:5000/voluntariados')
        const data = await res.json()

        return data;
    }


    useEffect(() => {
        const getNewVoluntariados = async () => {
            const newVoluntariadosFromServer = await fetchNewVoluntariados()

            setNewVoluntariados(newVoluntariadosFromServer)

        }

        getNewVoluntariados()

    }, [])

    const fetchNewVoluntariados = async () => {
        const res = await fetch('http://localhost:5000/novosVoluntariados')
        const data = await res.json()

        return data;
    }


    const checkOrganizationNumberVol = () => {
        var listAll = [];
        var num = 1;

        for (const org of organizacoes) {
            for (const vol of voluntariados) {
                if(org.name === vol.organizacao){
                    listAll[org.id] = num;
                    num++;
                }
            }
            num = 1;
        }

        return listAll;
    }


    return (
        <div className={style.backgroundwhite}>
            <div className={style.margins}>
                <Container style={{
                    height: 80
                }}></Container>

                <Typography
                    style={{
                        fontWeight: 700,
                        fontSize: 30,
                        color: '#497174',
                        textTransform: "uppercase",
                        textAlign: 'left',
                        marginLeft: 50
                    }}
                >Organizações</Typography>

                <Divider />
                <Grid item className={style.filter}>
                    <SearchBar 
                        onSearchTextUpdate={searchTextUpdate} 
                        onFilterUpdate={searchFilterUpdate} 
                        onClearFilter={clearFilters}
                        filters={filters} />
                </Grid>
                <Container>
                    { ( !(organizacoes.length === 0) && !(voluntariados.length === 0) ) ?  organizacoes.map((org) => (
                        <>
                            <div className={style.boxShow}></div>
                            <BoxOrganization 
                                image={org.image}
                                name={org.name}
                                desc={org.description}
                                getNumVoluntariados={checkOrganizationNumberVol()}
                                idOrg={org.id}
                                key={org.id} className={style.boxShow}></BoxOrganization>
                            <div className={style.boxShow}></div></>
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
        </div >
    );
}

export default Organizacoes;