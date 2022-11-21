import { Grid, Button, Divider } from '@mui/material'
import React from 'react'
import style from "./chooseType.module.css";


const ChooseType = (props) => {

    const changePopupVoluntario = () => {

        props.changePopup("voluntario");

    };

    const changePopupOrganizacao = () => {

        props.changePopup("organizacao");

    };

    return (
        <div>
            <Grid align='center'>
                <h3 className={style.header}>REGISTAR COMO</h3>
            </Grid>
            <Divider variant="middle" className={style.line} />
            <Button variant="contained" onClick={changePopupVoluntario} size="large" className={style.buttonVoluntariado} sx={{'&:hover': { opacity: [0.9, 0.8, 0.7]} }} fullWidth>Voluntário</Button>
            <Button variant="contained" onClick={changePopupOrganizacao} size="large" className={style.buttonOrganizacao} sx={{'&:hover': { opacity: [0.9, 0.8, 0.7]} }} fullWidth>Organização</Button>
        </div>
    )
}

export default ChooseType
