import { Avatar, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Box, color } from "@mui/system";

function Profile({ name, image, desc, gender, birthday, email, phone, idperfil, rating }) {

    return (
        <Grid container>
            <Grid item xs={6} md={3} justifyContent="left">
                <Link style={{ color: "#2E3B55", textDecoration: "none" }} to={`/Perfil/${idperfil}`}>
                    <Avatar alt={name} src={"/" + image} sx={{ width: 110, height: 110 }}/>
                </Link>
            </Grid>
            <Grid item xs={6} md={9}>
                <Grid container>
                    <Grid justifyContent="left" item zeroMinWidth xs={6} md={8}>
                        <Link style={{ color: "#2E3B55", textDecoration: "none" }} to={`/Perfil/${idperfil}`}>
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
                    <p style={{ textAlign: "left" }}>{phone}</p>
                    <p style={{ textAlign: "left" }}>{email}</p>
                    <p style={{ textAlign: "left" }}>{gender}</p>
                    <p style={{ textAlign: "left" }}>{birthday}</p>
                </Grid>


                <p style={{ textAlign: "left" }}>{desc}</p>
                <p style={{ textAlign: "left", color: "gray" }}>

                </p>
            </Grid>
        </Grid>
    )
}

export default Profile
