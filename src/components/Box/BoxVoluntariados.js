import { Rating } from "@mui/material";
import React from "react";
import BoxStats from "./BoxStats";
import style from "./boxVoluntariados.module.css";

function BoxVoluntariados(props) {
    const getRatingComponent = () => {
        return (
            <Rating name="rating-voluntariado" readOnly value={props.rating} />
        );
    };

    return (
        <BoxStats
            image={props.image}
            name={props.name}
            component={getRatingComponent()}
            desc={props.desc}
        />
    );
}

export default BoxVoluntariados;
