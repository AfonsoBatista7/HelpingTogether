import { Box, Avatar, Grid, Rating } from "@mui/material";
import style from "./miniBoxCandidate.module.css";
import React from "react";

function MiniBoxCandidate({ name, image, rating }) {
    return (
        <Box className={style.box}>
            <Grid container direction="row" alignContent="center" >
                <Grid item>
                    <Avatar className={style.avatar} alt={name} src={image} />
                </Grid>
                <Grid>
                    <Grid container direction="column" >
                        <Grid item><b style={{position: "relative", left: "3px"}}>{name}</b></Grid>
                        <Grid item>
                            <Rating
                                name="rating-candidatos"
                                readOnly
                                value={rating}
                                size="small"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default MiniBoxCandidate;
