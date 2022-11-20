import React, { useState } from "react";
import {
    Typography,
    Button,
    AppBar,
    Stack,
    Toolbar,
    Link,
} from "@mui/material";
import Login from "../Popup/Login";
import Popup from "../Popup/Popup";
import style from "./header.module.css";
import ChooseType from "../Popup/ChooseType";
import imageLogo from "../../images/logo.png";
import imageUser from "../../images/afonso.gif";
import UserProfileButton from "../UserProfileButton";
import RegisterVoluntario from "../Popup/RegisterVoluntario";
import RegisterOrganizacao from "../Popup/RegisterOrganizacao";

function Header(props) {
    const [isLoggedIn, accountState] = useState(false);

    const [openPopupLogin, setOpenPopupLogin] = useState(false);
    const [openPopupRegister, setOpenPopupRegister] = useState(false);
    const [openPopupRegisterVoluntario, setOpenPopupRegisterVoluntario] =
        useState(false);
    const [openPopupRegisterOrganizacao, setOpenPopupRegisterOrganizacao] =
        useState(false);

    const logIn = () => {
        setOpenPopupLogin(true);
    };

    const signUp = () => {
        setOpenPopupRegister(true);
    };

    const goToOrganizations = () => {
        console.log("Voluntariados");
    };

    const goToVolunteers = () => {
        console.log("Organizações");
    };

    const changePopup = (popup) => {
        switch (popup) {
            case "login":
                setOpenPopupLogin(true);
                break;
            case "register":
                setOpenPopupRegister(true);
                break;
            case "voluntario":
                setOpenPopupRegister(false);
                setOpenPopupRegisterVoluntario(true);
                break;
            case "organizacao":
                setOpenPopupRegister(false);
                setOpenPopupRegisterOrganizacao(true);
                break;
            case "isLoggedIn":
                accountState(true);
                setOpenPopupLogin(false);
                break;
            default:
        }
    };

    return (
        <>
            <AppBar position="static" sx={{ bgcolor: "#497174" }}>
                <Toolbar>
                    <Link
                        href="/"
                        className={style.headerLink}
                        style={{
                            marginRight: "20px",
                            width: "3%",
                        }}
                    >
                        <img
                            src={imageLogo}
                            alt="logo"
                            href="/"
                            className={style.headerImage}
                        />
                    </Link>
                    <Link href="/" className={style.headerLink}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".2rem",
                            }}
                        >
                            HELPING TOGETHER
                        </Typography>
                    </Link>
                    <Stack
                        direction="row"
                        spacing={2}
                        className={style.headerButton}
                    >
                        <Button
                            size="large"
                            sx={{ color: "white" }}
                            onClick={goToOrganizations}
                        >
                            Voluntariados
                        </Button>
                        <Button
                            size="large"
                            sx={{ color: "white" }}
                            onClick={goToVolunteers}
                        >
                            Organizações
                        </Button>
                        {!isLoggedIn ? (
                            <>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        backgroundColor:"#EFF5F5",
                                        textTransform: "none",
                                        borderRadius: "20px",
                                        color: "#497174",
                                    }}
                                    onClick={logIn}
                                >
                                    Entrar
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        border: " 1px solid #EFF5F5",
                                        textTransform: "none",
                                        borderRadius: "20px",
                                        color: "#EFF5F5",
                                    }}
                                    onClick={signUp}
                                >
                                    Registar
                                </Button>
                            </>
                        ) : (
                            <UserProfileButton
                                name="Afonso"
                                image={imageUser}
                                accountState={accountState}
                            />
                        )}
                    </Stack>
                </Toolbar>
            </AppBar>
            <Popup
                tipo="login"
                openPopup={openPopupLogin}
                setOpenPopup={setOpenPopupLogin}
                function={changePopup}
            >
                <Login function={changePopup} />
            </Popup>
            <Popup
                openPopup={openPopupRegister}
                setOpenPopup={setOpenPopupRegister}
            >
                <ChooseType function={changePopup} />
            </Popup>
            <Popup
                tipo="register"
                openPopup={openPopupRegisterVoluntario}
                setOpenPopup={setOpenPopupRegisterVoluntario}
                function={changePopup}
            >
                <RegisterVoluntario />
            </Popup>
            <Popup
                tipo="register"
                openPopup={openPopupRegisterOrganizacao}
                setOpenPopup={setOpenPopupRegisterOrganizacao}
                function={changePopup}
            >
                <RegisterOrganizacao />
            </Popup>
        </>
    );
}

export default Header;
