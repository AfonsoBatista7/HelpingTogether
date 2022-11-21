import React, { useState } from "react";
import {
    Typography,
    Box,
    Menu,
    Avatar,
    Tooltip,
    MenuItem,
    Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import Perfil from "../pages/Perfil";

// [
//     "Perfil",
//     "Candidatura",
//     "Voluntariados Realizados",
//     "Comentários",
//     "Sair",
// ];

const UserProfileButton = (props) => {
    const logOut = () => {
        handleCloseUserMenu()
        props.takeOffLogin()
    };

    const goToProfile = () => {
        handleCloseUserMenu()
    };

    const goToApplication = () => {
        handleCloseUserMenu()
    };

    const goToVolunteersDone = () => {
        handleCloseUserMenu()
    };

    const goToComments = () => {
        handleCloseUserMenu()
    };

    const settings = {
        Perfil: goToProfile,
        Candidatura: goToApplication,
        VoluntariadosRealizados: goToVolunteersDone,
        Comentários: goToComments,
        Sair: logOut
    };

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const marginButton = { marginLeft: 8 }

    return (
        <div>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <Button name={props.name} variant="text" onClick={handleOpenUserMenu} sx={{ color: 'white' }}>
                        {props.name}
                    <Avatar alt={props.name} src={props.image} style={marginButton}/>
                    </Button>
                </Tooltip>
                <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {Object.keys(settings).map((setting) => (
                        <Link key={setting} style={{ textDecoration: 'none', color:'black' }} to={setting === "Sair" ? '' : '/Perfil'}>
                            <MenuItem key={setting} onClick={settings[setting]}>
                                <Typography textAlign="center">
                                    {setting}
                                </Typography>
                            </MenuItem>
                        </Link>
                    ))}
                </Menu>
            </Box>
        </div>
    );
};

export default UserProfileButton;
