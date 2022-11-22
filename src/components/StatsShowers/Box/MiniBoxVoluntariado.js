import React from "react";
import { Card,CardContent,CardActionArea,Typography,CardMedia } from "@mui/material";
import style from "./miniBoxVoluntariado.module.css";

function MiniBoxVoluntariado({ name, image, desc }) {

    const charLimit = 130;
    const isDescBig = desc.length > charLimit;

    return (
        <Card className={style.box} sx={{maxWidth: 245}}>
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
    );
}

export default MiniBoxVoluntariado;
