import { Avatar, Grid, Link, Rating } from "@mui/material";
import style from "./cardComment.module.css";
import React from "react";
import { Box} from "@mui/system";

function CardComment(props) {
    const charLimit = 170;
    const isDescBig = props.desc.length > charLimit;

    return (
        <div style={{ width: "13%", height: "100%" }}>
            <Avatar
                alt={props.name}
                src={props.image}
                sx={{
                    top: 30,
                    width: 60,
                    height: 60,
                }}
                className={style.cardAvatar}
            />
            <Box className={style.cardComment}>
                <Grid container direction="column">
                    <Grid item>
                        <b>{props.name}</b>
                    </Grid>
                    <Grid item>
                        <Rating
                            name="rating-comment"
                            readOnly
                            value={props.rating}
                            size="small"
                        ></Rating>
                    </Grid>
                    <Grid item style={{ fontSize: "14px" }}>
                        {isDescBig ?
                            <span>
                                {props.desc.slice(0, charLimit) + "..."}
                            </span>
                        :
                            <span>{props.desc}</span>
                        }
                    </Grid>
                </Grid>
                {isDescBig && (
                    <Link style={{ textDecoration: "none" }} href="/">
                        <b className={style.viewComment}>Mais</b>
                    </Link>
                )}
            </Box>
        </div>
    );
}

export default CardComment;
