import style from "../components/SectionsProfile/Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider, Button } from "@mui/material";
import React, { useState, useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom"
import BoxOrganization from "../components/StatsShowers/Box/BoxOrganization";
import SearchBar from "../components/Search/SearchBar";

function Organizacoes() {
    const [state, forceUpdate] = useReducer(x => x + 1, 0);
    const [organizacoes, setOrganizacoes] = useState([])

    const [organizacoesNumberVol, setOrganizacoesNumberVol] = useState([])

    const [newVoluntariados, setNewVoluntariados] = useState([]);
    const [voluntariados, setVoluntariados] = useState([])
    const [searchFilter, setSearchFilter] = useSearchParams()

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

    const clearFilter = (filter) => {
        let updatedSearchParams = new URLSearchParams(searchFilter.toString());
        updatedSearchParams.delete(filter);
        setSearchFilter(updatedSearchParams.toString());
        forceUpdate()
    }

    const filters = {
        Tipo: ['Natureza', 'Animais', 'Poluição', 'Comunidade', 'Gastronomia', 'Saúde']
    };

    useEffect(() => {
        const getOrganizacoes = async () => {
            const organizacoesFromServer = await fetchOrganizacoes()
            let results = organizacoesFromServer

            if (searchFilter.get("Texto") != null) {
                results = results.filter(elem => elem["name"].toLowerCase().includes( searchFilter.get("Texto").toLowerCase() ))
            } if (searchFilter.get("Tipo") != null) {
                results = results.filter(elem => elem["type"].includes(searchFilter.get("Tipo")))
            }
            setOrganizacoes(results)
        }

        getOrganizacoes()

    }, [state])

    const fetchOrganizacoes = async () => {
        const res = await fetch('http://localhost:5000/organizacoes')
        const data = await res.json()

        const res2 = await fetch('http://localhost:5000/login')
        const data2 = await res2.json()

        var list = [];

        for(const element of data2){
            if(element.typePerfil === "organizacao")
            list.push(element)
        }

        for(const element of data){
            list.push(element)
        }

        return list;
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
                }}/>

                <Typography
                    style={{
                        fontWeight: 700,
                        fontSize: 30,
                        color: '#344D67',
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
                        onClearFilter={clearFilter}
                        filters={filters} />
                </Grid>
                <Container>
                    { ( !(organizacoes.length === 0) && !(voluntariados.length === 0) ) &&
                      organizacoes.map((org) => (
                        <>
                            <div className={style.boxShow}></div>
                            <BoxOrganization 
                                image={org.image}
                                name={console.log(org.name)}
                                desc={org.description}
                                getNumVoluntariados={checkOrganizationNumberVol()}
                                idOrg={org.id}
                                typePerfil={org.typePerfil}
                                key={org.id} className={style.boxShow}></BoxOrganization>
                            <div className={style.boxShow}></div></>
                    ))}
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
                }}/>

            </div >
        </div >
    );
}

export default Organizacoes;