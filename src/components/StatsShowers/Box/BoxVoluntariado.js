import { Rating } from "@mui/material";
import React from "react";
import BoxStats from "./BoxStats";
import { Link } from 'react-router-dom';

function BoxVoluntariado(props) {
    const getRatingComponent = () => {
        return (
            <Rating name="rating-voluntariado" readOnly value={props.rating} />
        );
    };

    return (
        <Link style={{ color: "#2E3B55", textDecoration: "none" }} to={`/Voluntariado/${props.id}`}>
        <BoxStats
            image={props.image}
            name={props.name}
            component={getRatingComponent()}
            desc={props.desc}
        /></Link>
    );
}

export default BoxVoluntariado;
