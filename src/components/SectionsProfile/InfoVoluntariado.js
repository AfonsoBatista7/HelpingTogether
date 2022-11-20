
import style from "./Profiles.module.css"
import image from "../../images/volunteering/Comida.png";
import org from "../../images/organizations/UNICEF.jpg";
import React, { useState } from 'react'

import { Grid, Typography, Container, Avatar, Button, TextField, Rating } from "@mui/material";
import PinDropRoundedIcon from '@mui/icons-material/PinDropRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';


function InfoVoluntariado(props) {



    var valueMessage = "Hello World sjajvsjdoKSDOAKALAPDASKDPAKDASKDVOAVKAKVKDNVFKAakjdjfahkfhkfhaksfhkjahfkashfkdhfkahfkhakrhgkuafhnsjdcajcnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnMDMVKADMVKAMVKAFVKDNFVKANDFKVNAKNFVAKSNVKASNVKANDVFNKSNFVKNSKAVNKASNVKASNVKFNVKANVKANVKANDKFMwlfkmLWFMLmfkfefKEFlkefjlkwflkawfkmaslvkmkadsvmamvmvaksndvkfkam";


    return (
        <div  >
            <Grid container direction="row"
                justifyContent="space-around"
                alignItems="flex-start">

                <Grid item xs={3}
                    justifyContent="center"
                    alignItems="center">

                    <img className={style.photoVoluntariado}
                        src={image}

                    />

                    <Grid container direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        className={style.marginPhone}>
                       <Avatar className={style.marginRight}
                             src={org}

                             sx={{ width: 30, height: 30 }} />
                        <Typography
                            style={{
                                fontWeight: 500,
                                fontSize: 20,
                                color: '#2E3B55',
                                textTransform: "uppercase",
                                textAlign: 'center'
                            }}>UNICEF</Typography>
                    </Grid>

                    <Grid container direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        className={style.marginPhone}>
                        <PinDropRoundedIcon className={style.marginRight} style={{
                            color: 'white',
                            fontSize: 30
                        }}></PinDropRoundedIcon>
                        <Typography
                            style={{
                                fontWeight: 500,
                                fontSize: 20,
                                color: '#2E3B55',
                                textAlign: 'center'
                            }}>Porto</Typography>
                    </Grid>


                    <Grid container direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        className={style.marginPhone}>
                        <CalendarMonthRoundedIcon className={style.marginRight} style={{
                            color: 'white',
                            fontSize: 30
                        }}></CalendarMonthRoundedIcon>

                        <Typography className={style.margintop}
                            style={{
                                fontWeight: 500,
                                fontSize: 15,
                                color: '#2E3B55',
                                textTransform: "uppercase",
                                textAlign: 'center'
                            }}>20/07/2022 - 25/07/2022</Typography>
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


                            <div className={style.descriptionvoluntario}>
                                <Typography style={{
                                    fontWeight: 700,
                                    fontSize: 30,
                                    color: '#2E3B55',
                                    textTransform: "uppercase",
                                    textAlign: 'left'
                                }}>Distribuição de refeições</Typography>
                            </div>

                            <div className={style.rating}>
                                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly size="large" />
                            </div>
                        </Grid>

                    </div>

                    <Container className={style.descriptionarea}>

                        <TextField className={style.description}
                            disabled
                            fullWidth
                            multiline
                            id="outlined-disabled"
                            defaultValue={valueMessage}
                        />

                    </Container>
                    <div className={style.avaliarbutton}><Button style={{background: "#2E3B55"}} variant="contained">Avaliar</Button></div>

                </Grid>
            </Grid >
        </div >
    );
}

export default InfoVoluntariado
