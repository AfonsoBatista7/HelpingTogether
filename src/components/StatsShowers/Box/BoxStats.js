import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import style from "./boxStats.module.css";
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function BoxStats(props) {
    const charLimit = 670;
    const isDescBig = props.desc.length > charLimit;

    return (
        <Box className={style.box}>
            <Grid container direction="row">
                <Grid item xs={2.8}>
                    <img
                        src={props.image}
                        alt={props.name}
                        className={style.boxImage}
                    />
                </Grid>
                <Grid item xs={9}>
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
                        <Grid item>
                            <span style={{marginRight: "7px"}}><DateRangeIcon/></span>
                            <span style={{position: "relative", bottom: "5px"}}>{props.date}</span>
                        </Grid>
                        <Grid item>
                            <span style={{marginRight: "7px"}}><LocationOnIcon/></span>
                            <span style={{position: "relative", bottom: "5px"}}>{props.location}</span>
                        </Grid>
                        <Grid item >
                            <div className={style.boxDescription}>
                                {isDescBig ?
                                    <span>
                                        {props.desc.slice(0, charLimit) + "..."}
                                    </span>
                                :
                                    <span>{props.desc}</span>
                                }
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default BoxStats;
