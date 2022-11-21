import { Rating } from "@mui/material";
import React from "react";
import BoxStats from "./BoxStats";

function BoxVoluntariado({image, name, desc, rating}) {
    const getRatingComponent = () => {
        return (
            <Rating name="rating-voluntariado" readOnly value={rating} />
        );
    };

    return (
        <BoxStats
            image={image}
            name={name}
            component={getRatingComponent()}
            desc={desc}
        />
    );
}

export default BoxVoluntariado;
