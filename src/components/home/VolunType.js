import { Height, MonitorHeart } from "@mui/icons-material";
import { Box, Fab, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import style from "./home.module.css";
import { Link } from 'react-router-dom'

const VolunType = (props) => {
    return (
        <Link to="/Voluntariados"> {/* TODO adicionar filtro */}
            <Stack spacing={2} justifyContent="center" alignItems="center">
                <Fab sx={{'&:hover':{backgroundColor: "#2b4345"}, backgroundColor: "#344d67", width:"100px", height:"100px"}}>{props.icon}</Fab>
                <Typography variant="h6" color="#344d67" style={{textDecorationLine: "none"}}>
                    {props.name}
                </Typography>
            </Stack>
        </Link>
    );
};

export default VolunType;
