import React, { useState } from "react";
import {
    Typography,
    Box,
    Menu,
    Avatar,
    Tooltip,
    IconButton,
    MenuItem,
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
        props.accountState(false);
    };

    const goToProfile = () => {
        handleCloseUserMenu()
        console.log("O meu perfil :DDD");
    };
    const goToApplication = () => {
        handleCloseUserMenu()
        console.log("Candidaturaaa");
    };
    const goToVolunteersDone = () => {
        handleCloseUserMenu()
        console.log("Voluntariados Feitinhoss :D");
    };
    const goToComments = () => {
        handleCloseUserMenu()
        console.log("Os meus comentários");
    };
    const settings = {
        Perfil: goToProfile,
        Candidatura: goToApplication,
        VoluntariadosRealizados: goToVolunteersDone,
        Comentários: goToComments,
        Sair: logOut,
    };

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt={props.name} src={props.image} />
                    </IconButton>
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
                        <Link style={{ textDecoration: 'none', color:'black' }} to={setting === "Sair" ? '' : '/Perfil'}>
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
