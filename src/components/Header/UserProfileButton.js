import Logout from '@mui/icons-material/Logout';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    ListItemIcon,
    Box,
    Menu,
    Avatar,
    Tooltip,
    MenuItem,
    Button
} from "@mui/material";
import RegisterVoluntariado from '../Popup/RegisterVoluntariado';
import Popup from '../Popup/Popup';


const UserProfileButton = (props) => {

    const [openPopupRegister, setOpenPopupRegister] = useState(false);

    const open = () => {
        setOpenPopupRegister(true);
    };

    const close = () => {
        setOpenPopupRegister(false);
    };

    const logOut = () => {
        handleCloseUserMenu();
        props.takeOffLogin();
    };

    const goToProfile = () => {
        handleCloseUserMenu();
    };

    const goToApplication = () => {
        handleCloseUserMenu();
    };

    const goToVolunteersDone = () => {
        handleCloseUserMenu();
        open();
    };

    const goToComments = () => {
        handleCloseUserMenu();
    };

   const settings = [{
        Perfil: goToProfile,
        Candidaturas: goToApplication,
        Realizados: goToVolunteersDone,
        Comentários: goToComments,
    }, {
        Perfil: goToProfile,
        Voluntariados: goToApplication,
        Criar: goToVolunteersDone,
    }
 ];
    
    const getOption = () => {
        return props.typePerfil==="voluntario" ? 0 : 1 } //0 -> Voluntarios | 1 -> Organization

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const marginButton = { marginLeft: 8 };

    return (
        <div>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <Button
                        name={props.name}
                        variant="text"
                        onClick={handleOpenUserMenu}
                        sx={{ padding: 0, color: "white" }}
                    >
                        {props.name}
                        <Avatar
                            alt={props.name}
                            src={"/" + props.image}
                            style={marginButton}
                        />
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
                    {Object.keys(settings[getOption()]).map((setting) => (
                        <Link
                            href={setting}
                            key={setting}
                            style={{ textDecoration: "none", color: "black" }}
                            to={setting === "Criar" ? "": `/Perfil/${props.id}/${setting}`}
                            onClick={setting === "Criar"? "": () => this.forceUpdate()}
                        >
                            <MenuItem key={setting} onClick={settings[getOption()][setting]}>
                                {setting}
                            </MenuItem>
                        </Link>
                    ))}
                    <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to={"/"}
                        >
                    <MenuItem onClick={logOut}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Sair
                    </MenuItem>
                    </Link>
                </Menu>
            </Box>
            <Popup
                openPopup={openPopupRegister}
                setOpenPopup={setOpenPopupRegister}
            >
                <RegisterVoluntariado closePopup={close} organizacao={props.name} />
            </Popup>
        </div>
    );
};

export default UserProfileButton;
