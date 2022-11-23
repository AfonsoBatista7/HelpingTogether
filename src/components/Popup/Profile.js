import { Avatar, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Box, color } from "@mui/system";

function Profile({ name, image, desc, gender, birthday, email, phone, idperfil, rating }) {

    return (
        <Grid container>
            <Grid item xs={6} md={2}>
                <Link style={{ color: "#2E3B55", textDecoration: "none" }} to={`/Perfil/${idperfil}`}>
                    <Avatar alt={name} src={"/" + image} sx={{ width: 80, height: 80 }} />
                </Link>
            </Grid>
            <Grid item xs={6} md={10}>
                <Grid justifyContent="left" item xs zeroMinWidth>
                    <h4 style={{ margin: 0, textAlign: "left" }}>
                        <Link style={{ color: "#2E3B55", textDecoration: "none" }} to={`/Perfil/${idperfil}`}>
                            <Typography>{name}</Typography>
                        </Link>
                    </h4>
                </Grid>
                <Grid item>
                    <Rating
                        name="rating-comment"
                        readOnly
                        value={rating}
                        size="small"
                    ></Rating>
                </Grid>
                <p style={{ textAlign: "left" }}>{desc}</p>
                <p style={{ textAlign: "left", color: "gray" }}>

                </p>
            </Grid>
        </Grid>
    )
}

export default Profile
