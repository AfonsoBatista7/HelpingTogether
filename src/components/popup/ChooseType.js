import { Grid, Button, Divider } from '@mui/material'
import React from 'react'
import { createTheme } from '@mui/material/styles';


const ChooseType = (props) => {

    const changePopupVoluntario = () => {

        props.function("voluntario");

    };

    const changePopupOrganizacao = () => {

        props.function("organizacao");

    };

    //     const backgroundVol = {
    //         width: "px",
    //         height: "px",
    //         background: "url(../images/Comida.png) no-repeat",
    // }

    const headerStyle = { marginBottom: 10 }
    const line = { marginBottom: 20 }

    const buttonVoluntario = {
        backgroundColor: '#00bcd4', marginBottom: 10, marginTop: 10, lineHeight: "40px" }
    const buttonOrganizacao = { backgroundColor: '#8bc34a', marginBottom: 10, marginTop: 10, lineHeight: "40px" }

    return (
        <div>
            <Grid align='center'>
                <h3 style={headerStyle}>REGISTAR COMO</h3>
            </Grid>
            <Divider variant="middle" style={line} />
            <Button variant="contained" onClick={changePopupVoluntario} size="large" style={buttonVoluntario} sx={{'&:hover': { opacity: [0.9, 0.8, 0.7]} }} fullWidth>Voluntário</Button>
            <Button variant="contained" onClick={changePopupOrganizacao} size="large" style={buttonOrganizacao} sx={{'&:hover': { opacity: [0.9, 0.8, 0.7]} }} fullWidth>Organização</Button>
        </div>
    )
}

export default ChooseType
