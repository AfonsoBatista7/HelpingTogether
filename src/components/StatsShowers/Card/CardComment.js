import { Avatar, Grid, Link, Rating } from "@mui/material";
import style from "./cardComment.module.css";
import React from "react";
import { Box} from "@mui/system";

function CardComment({name, image, comment, rating}) {
    const charLimit = 170;
    const isDescBig = comment.length > charLimit;

    return (
        <div className={style.entireCard} >
            <Avatar
                alt={name}
                src={image}
                sx={{
                    top: 35,
                    width: 70,
                    height: 70,
                }}
                className={style.cardAvatar}
            />
            <Box className={style.cardComment}>
                <Grid container direction="column">
                    <Grid item>
                        <b>{name}</b>
                    </Grid>
                    <Grid item>
                        <Rating
                            name="rating-comment"
                            readOnly
                            value={rating}
                            size="small"
                        ></Rating>
                    </Grid>
                    <Grid item style={{ fontSize: "14px" }}>
                        {isDescBig ?
                            <span>
                                {comment.slice(0, charLimit) + "..."}
                            </span>
                        :
                            <span>{comment}</span>
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
