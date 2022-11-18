import { Grid, Button, Divider } from '@mui/material'
import React from 'react'


const ChooseType = (props) => {

    const headerStyle = { marginBottom: 10 }
    const line = { marginBottom: 20 }

    const buttonVoluntario = {
        backgroundColor: '#00bcd4', marginBottom: 10, marginTop: 10, lineHeight: "40px" }
    const buttonOrganizacao = { backgroundColor: '#8bc34a', marginBottom: 10, marginTop: 10, lineHeight: "40px" }

    const changePopupVoluntario = () => {

        props.changePopup("voluntario");

    };

    const changePopupOrganizacao = () => {

        props.changePopup("organizacao");

    };

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
