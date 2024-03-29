import { Rating } from "@mui/material";
import React from "react";
import BoxStats from "./BoxStats";
import { Link } from 'react-router-dom';

function BoxVoluntariado({image, name, desc, rating, date, location,id, typePerfil, done}) {
    const getRatingComponent = () => {
        return (
            <Rating name="rating-voluntariado" readOnly value={rating} />
        );
    };

    return (
        <Link style={{ color: "#2E3B55", textDecoration: "none" }} to={`/Voluntariado/${id}`} onClick={() => this.forceUpdate()}>
        <BoxStats
            image={image}
            name={name}
            component={getRatingComponent()}
            desc={desc}
            date={date}
            location={location}
            typePerfil={typePerfil}
            done={done}
        /></Link>
    );
}

export default BoxVoluntariado;
