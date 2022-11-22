import React from "react";
import { Grid, Box, Card, CardContent, CardActionArea, Typography, CardMedia } from "@mui/material";
import style from "./miniBoxVoluntariado.module.css";
import { Link } from 'react-router-dom';

function MiniBoxVoluntariado({ name, image, desc, id }) {

    const charLimit = 130;
    const isDescBig = desc.length > charLimit;

    return (
        <Link style={{ color: "#2E3B55", textDecoration: "none" }} to={`/Voluntariado/${id}`}>
            <Card style={{ top: "200px", right: "200px" }} sx={{ maxWidth: 245 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {isDescBig ?
                                <span>
                                    {desc.slice(0, charLimit) + "..."}
                                </span>
                                :
                                <span>{desc}</span>
                            }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}

export default MiniBoxVoluntariado;
