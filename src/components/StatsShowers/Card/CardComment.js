import { Avatar, Grid, Link, Rating } from "@mui/material";
import style from "./cardComment.module.css";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Popup from "../../Popup/Popup";
import Comment from "../../Popup/Comment";


function CardComment({ name, image, comment, rating, date, idperfil }) {

    console.log(idperfil)
    console.log(name)

    const charLimit = 170;
    const isDescBig = comment.length > charLimit;

    const [openPopup, setOpenPopup] = useState(false);

    const open = () => {
        setOpenPopup(true);
    }

    const close = () => {
        setOpenPopup(false);
    }

    return (
        <>
            <div className={style.entireCard} onClick={open}>
                <Avatar
                    alt={name}
                    src={"/" + image}
                    sx={{
                        top: 35,
                        width: 70,
                        height: 70,
                    }}
                    className={style.cardAvatar}
                />
                <Box className={style.cardComment}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <b>{name}</b>
                        </Grid>
                        <Grid item>
                            <Rating
                                name="rating-comment"
                                readOnly
                                value={rating}
                                size="small"
                            ></Rating>
                        </Grid>
                        <Grid item style={{ marginTop: "10px", fontSize: "14px" }}>
                            {isDescBig ?
                                <span>
                                    {comment.slice(0, charLimit) + "..."}
                                </span>
                                :
                                <span>{comment}</span>
                            }
                        </Grid>
                    </Grid>
                    {isDescBig && (
                        <Link style={{ textDecoration: "none" }} href="/">
                            <b className={style.viewComment}>Mais</b>
                        </Link>
                    )}
                </Box>
            </div>
            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <Comment idperfil={idperfil} name={name} image={image} rating={rating} desc={comment} date={date} closePopup={close} />
            </Popup>
        
        </>
    );
}

export default CardComment;
