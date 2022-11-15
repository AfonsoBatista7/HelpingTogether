import React, {useState} from 'react'
import {
    Typography,
    Button,
    AppBar,
    Stack,
    Toolbar,
} from "@mui/material";
import imageLogo from "../../images/logo.png";
import imageUser from "../../images/afonso.gif";
import UserProfileButton from "../userProfileButton"

import style from "./header.module.css";

function Header(props) {

    const [isLoggedIn, accountState] = useState(false);

    const logIn = () => {
        accountState(true);
    };

    const signUp = () => {
        console.log("Registar");
    };

    const goToOrganizations = () => {
        console.log("Voluntariados");
    };

    const goToVolunteers = () => {
        console.log("Organizações");
    };

    return (
        <AppBar position="static" sx={{ bgcolor: "#2E3B55" }}>
            <Toolbar>
                    <img
                        src={imageLogo}
                        alt="logo"
                        component="a"
                        href="/"
                        className={style.headerImage}
                    ></img>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".2rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        HELPING TOGETHER
                    </Typography>
                    <Stack direction="row" spacing={2}  className={style.headerButton}>
                        <Button size="large" href="" sx={{color:'white'}} onClick={goToOrganizations}>Voluntariados</Button>
                        <Button size="large" href="" sx={{color:'white'}} onClick={goToVolunteers}>Organizações</Button>
                        {!isLoggedIn ? 
                            <>
                                <Button variant="contained" size="large" href="" sx={{textTransform: 'none', borderRadius: '20px', color:'white'}} onClick={logIn}>Entrar</Button>
                                <Button variant="outlined" size="large" href="" sx={{textTransform: 'none', borderRadius: '20px', color:'white'}} onClick={signUp}>Registar</Button> 
                            </> : <UserProfileButton name="Afonso" image={imageUser} accountState={accountState}/>
                        }
                    </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

