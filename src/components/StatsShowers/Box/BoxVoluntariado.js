import { Rating } from "@mui/material";
import React from "react";
import BoxStats from "./BoxStats";

function BoxVoluntariado(props) {
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

export default BoxVoluntariado;
