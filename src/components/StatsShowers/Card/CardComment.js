import { Avatar, Grid, Link, Rating } from "@mui/material";
import style from "./cardComment.module.css";
import React from "react";
import { Box, color } from "@mui/system";
import { useState } from "react";

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
                    margin: "0 auto",
                    width: 60,
                    height: 60,
                    boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
                }}
            />
            <Box className={style.boxComment}>
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
                        {isDescBig ? (
                            <span>
                                {props.desc.slice(0, charLimit) + "..."}
                            </span>
                        ) : (
                            <span>{props.desc}</span>
                        )}
                    </Grid>
                </Grid>
                {isDescBig && (
                    <Link style={{ textDecoration:"none"}} href="/">
                        <b
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                color: "#EB6440",
                            }}
                        >
                            Mais
                        </b>
                    </Link>
                )}
            </Box>
        </div>
    );
}

export default CardComment;
