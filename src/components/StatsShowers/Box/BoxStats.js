import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import style from "./boxStats.module.css";

function BoxStats(props) {
    return (
            <Box className={style.box}>
                <Grid container direction="row" style={{ width: "100%" }}>
                    <Grid item style={{ width: "18%", marginRight: "1%" }}>
                        <img
                            src={props.image}
                            alt={props.name}
                            className={style.boxImage}
                        />
                    </Grid>
                    <Grid item style={{ width: "81%" }}>
                        <Grid container direction="column">
                            <Grid
                                item
                                container
                                justifyContent="space-between"
                                alignItems="center"
                                direction="row"
                            >
                                <Grid item>
                                    <Typography variant="h6">
                                        <b>{props.name}</b>
                                    </Typography>
                                </Grid>
                                <Grid item style={{ marginRight: "5px" }}>
                                    {props.component}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <div className={style.boxDescription}>
                                {props.desc}
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
    );
}

export default BoxStats;
