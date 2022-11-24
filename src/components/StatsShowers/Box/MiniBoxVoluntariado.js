import React from "react";
import { Card,CardContent,CardActionArea,Typography,CardMedia } from "@mui/material";
import style from "./miniBoxVoluntariado.module.css";
import { Link } from 'react-router-dom';

function MiniBoxVoluntariado(props) {

    const charLimit = 130;
    const isDescBig = props.desc.length > charLimit;

    return (
        <Link style={{ color: "#2E3B55", textDecoration: "none" }} to={`/Voluntariado/${props.id}`} onClick={() => this.forceUpdate()}>
            <Card className={style.box} sx={{ maxWidth: 245 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={"/" + props.image}
                        alt={props.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {isDescBig ?
                                <span>
                                    {props.desc.slice(0, charLimit) + "..."}
                                </span>
                                :
                                <span>{props.desc}</span>
                            }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}

export default MiniBoxVoluntariado;
