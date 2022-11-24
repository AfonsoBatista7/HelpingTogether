import { Avatar, Container, Grid, Rating, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Box, color } from "@mui/system";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FemaleIcon from '@mui/icons-material/Female';
import CakeIcon from '@mui/icons-material/Cake';
import style from "./profile.module.css";
import MaleIcon from '@mui/icons-material/Male';

function Profile({ name, image, desc, gender, birthday, email, phone, idperfil, rating }) {

    const fontColor = {
        style: { color: "#2E3B55" }
    }


    return (
        <Grid container>
            <Grid item xs={6} md={3} justifyContent="left" >
                <Link style={{ color: "#2E3B55", textDecoration: "none" }} to={`/Perfil/${idperfil}/Perfil`}>
                    {image ? <Avatar alt={name} src={"/" + image} sx={{ width: 110, height: 110 }} className={style.pic} />
                    : <Avatar alt={name} src={"/defaultPhoto.jpg"} sx={{ width: 110, height: 110 }} className={style.pic} /> }
                </Link>
            </Grid>
            <Grid item xs={6} md={9}>
                <Grid container>
                    <Grid justifyContent="left" item zeroMinWidth xs={6} md={8}>
                        <Link style={{ color: "#2E3B55", textDecoration: "none" }} to={`/Perfil/${idperfil}/Perfil`}>
                            <h2 style={{ margin: 0, textAlign: "left" }}>{name}</h2>
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Rating
                            name="rating-comment"
                            readOnly
                            value={rating}
                        ></Rating>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid justifyContent="left" item zeroMinWidth xs={6} md={1}>
                        <PhoneIcon color="action" className={style.icons} />
                        <EmailIcon color="action" />
                        {gender == "Feminino" ? <FemaleIcon color="action" />
                            : <MaleIcon color="action" />}
                        <CakeIcon color="action" />
                    </Grid>
                    <Grid item xs={6} md={9}>
                        <p className={style.text}>{phone}</p>
                        <p className={style.text}>{email}</p>
                        <p className={style.text}>{gender}</p>
                        <p className={style.text}>{birthday}</p>
                    </Grid>
                </Grid>
                <p style={{ textAlign: "left", color: "gray" }}></p>
            </Grid>
            {desc ? 
            <><p style={{ textAlign: "left" }}>{desc}</p>
            <Container style={{
                        width: 200,
                        height: 20
                    }}></Container></>
                : <>
                    <p style={{ textAlign: "left" }}>Não tem descrição no perfil.</p>
                    <Container style={{
                        width: 200,
                        height: 10
                    }}></Container></>}
        </Grid>
    )
}

export default Profile
