import { Height, MonitorHeart } from "@mui/icons-material";
import { Box, Fab, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import style from "./home.module.css";
import { Link } from 'react-router-dom'

const VolunType = (props) => {
    return (
        <Link to="/Voluntariados"> {/* TODO adicionar filtro */}
            <Stack className={style.button} justifyContent="center" alignItems="center">
                <Fab sx={{'&:hover':{backgroundColor: "#2b4345"}, backgroundColor: "#344d67", width:"150px", height:"150px"}}>{props.icon}</Fab>
                <Typography style={{marginTop: "10px"}} variant="h6" color="#344d67">
                    {props.name}
                </Typography>
            </Stack>
        </Link>
    );
};

export default VolunType;
