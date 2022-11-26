import { Box, Avatar, Grid, Rating } from "@mui/material";
import style from "./miniBoxCandidate.module.css";
import React, { useState } from "react";
import Profile from "../../Popup/Profile";
import Popup from "../../Popup/Popup";
import { Typography } from "antd";

function MiniBoxCandidate({ name, image, rating, desc, birthday, id, email, phone, gender }) {

    const [openPopup, setOpenPopup] = useState(false);

    const open = () => {
        setOpenPopup(true);
    }

    const close = () => {
        setOpenPopup(false);
    }

    return (
        <>
            <Box className={style.box} onClick={open}>
                <Grid container direction="row" alignContent="center" >
                    <Grid item>
                        {image ? <Avatar className={style.avatar} alt={name} src={"/" + image} />
                            : <Avatar className={style.avatar} alt={name} src={"/defaultPhoto.jpg"} />}
                    </Grid>
                    <Grid>
                        <Grid container direction="column" >
                            <Grid item>
                                <Typography style={{ position: "relative", left: "3px", wordWrap: "break-word" }}>
                                    <b>{name}</b>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Rating
                                    name="rating-candidatos"
                                    readOnly
                                    value={rating}
                                    size="small"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Popup
                tipo="perfil"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <Profile idperfil={id} name={name} image={image} rating={rating} desc={desc} gender={gender} birthday={birthday} email={email} phone={phone} closePopup={close} />
            </Popup>
        </>
    );
}

export default MiniBoxCandidate;
