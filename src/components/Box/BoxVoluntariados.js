import { Grid, Paper, Rating, Typography } from "@mui/material";
import React from "react";

function BoxVoluntariados(props) {
    const charLimit = 28;

    const buildDescription = () => {
        if (props.desc.length > charLimit) {
            let slicedDesc = props.desc.slice(0, charLimit),
                lastSpace = slicedDesc.lastIndexOf(" "),
                firstString = slicedDesc.slice(0, lastSpace) + "\n",
                secondString = props.desc.slice(
                    lastSpace,
                    lastSpace + charLimit
                );
            secondString =
                props.desc.length - lastSpace > charLimit
                    ? secondString + "..."
                    : secondString;
            return firstString + secondString;
        }

        return props.desc;
    };

    return (
        <div>
            <Grid container direction="row">
                <Grid item>
                    <img
                        src={props.image}
                        alt={props.name}
                        style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "cover",
                            borderRadius: "5px",
                            objectPosition: "50% 50%",
                            marginRight: "10px",
                            boxShadow:
                                "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
                        }}
                    />
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Grid container alignItems="center" direction="row">
                                <Grid item xs={6}>
                                    <Typography variant="h6">
                                        {props.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Rating
                                        name="rating-voluntariado"
                                        readOnly
                                        value={props.rating}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Paper
                                style={{
                                    padding: "10px",
                                    height: "57px",
                                    border: "1px solid #2E3B55",
                                    backgroundColor: "transparent",
                                    whiteSpace: "pre-line",
                                }}
                                elevation={2}
                            >
                                {buildDescription()}
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default BoxVoluntariados;
