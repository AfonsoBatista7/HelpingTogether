import { Fab, Stack} from "@mui/material";
import React, { useState } from "react";
import style from "./home.module.css";
import { Link } from 'react-router-dom'

const VolunType = (props) => {

    const url = "/Voluntariados?Tipo=" + props.name
    
    // const [isSelected, select] = useState(false);

    const changeType = () => {
        // select(true);
        props.selectType(props.name);
    }


    return (
    <Link to={url}> {/* TODO adicionar filtro */}
        <Stack className={style.button} justifyContent="center" alignItems="center">
            <Fab onMouseEnter={changeType}
                  className={`${props.currentType===props.name && style.selected}`}
                  sx={{ 
                    '&:hover':{backgroundColor: "#2b4345"}, backgroundColor: "#344d67", width:"150px", height:"150px"}}>
                {props.icon}
            </Fab>
        </Stack>
     </Link>
    );
};

export default VolunType;
