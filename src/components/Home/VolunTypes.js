import React, { useState } from "react";
import { Grid } from "@mui/material";
import VolunType from "./VolunType";
import style from "./home.module.css";

const VolunTypes = (props) => {
    //Select a random type
    const [typeSelected, selectType] = useState(`${Object.keys(props.types)[Math.floor(Math.random()*Object.keys(props.types).length-1)]}`);

    let counter = 0;

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    fontSize: "60px",
                }}
                className={style.subtitle}
            >
                QUERO SER VOLUNTÁRIO
            </div>
            <img
                src="/help.png"
                alt="typeVoluntariado"
                style={{
                    display: "block",
                    marginRight: "auto",
                    marginLeft: "auto",
                    width: "15%",
                }}
            />
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    top: "5vh",
                    fontSize: "30px",
                }}
                className={style.sloganSubtitle}
            >
              Escolhe que tipo de causa ajudar!
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    top: "10vh",
                    textTransform: "uppercase",
                    minHeight: "70px",
                    fontSize: "50px",
                }}
                className={style.sloganSubtitle}
            >
                {typeSelected}
            </div>
            <div
                style={{
                    minHeight: "35vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Grid container justifyContent="space-evenly" direction="row">
                    {Object.keys(props.types).map((type) => (
                        <Grid
                            key={type}
                            item
                            style={{
                                position: "relative",
                                top: `${
                                    (-Math.pow(++counter - 3.5, 2) + 6.25) * 15
                                }px`,
                                padding: 0,
                            }}
                        >
                            <VolunType
                                name={type}
                                icon={props.types[type]}
                                selectType={selectType}
                                currentType={typeSelected}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default VolunTypes;
