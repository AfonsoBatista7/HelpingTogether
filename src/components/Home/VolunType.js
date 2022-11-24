import { Height, MonitorHeart } from "@mui/icons-material";
import { Box, Fab, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import style from "./home.module.css";

const VolunType = (props) => {
    return (
        <Stack className={style.button} justifyContent="center" alignItems="center">
            <Fab sx={{'&:hover':{backgroundColor: "#2b4345"}, backgroundColor: "#344d67", width:"100px", height:"100px"}}>{props.icon}</Fab>
            <Typography variant="h6" color="#344d67">
                {props.name}
            </Typography>
        </Stack>
    );
};

export default VolunType;
