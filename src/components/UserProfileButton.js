import React, { useState } from "react";


import {
    Typography,
    Box,
    Menu,
    Avatar,
    Tooltip,
    IconButton,
    MenuItem,
    Button,
} from "@mui/material";

import { Anchor } from 'antd';
const { Link } = Anchor;

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
                        <Avatar alt={props.name} src={props.image} style={marginButton} />
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
                        <Anchor>
                            <Link href={setting} title={setting.toString} key={setting} style={{ textDecoration: 'none', color: 'black' }} to={setting === "Sair" ? '' : '/Perfil#' + setting}>
                                <MenuItem key={setting} onClick={settings[setting]}>
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            </Link>
                        </Anchor>
                    ))}
                </Menu>
            </Box>
        </div>
    );
};

export default UserProfileButton;
