import { Typography, Link, Grid } from "@mui/material";
import { FaTwitter, FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa";

import style from "./footer.module.css";

function Footer(props) {
    const preventDefault = (event) => event.preventDefault();
    return (
        <footer className={style.footer}>
            <div style={{ position: "relative", top: 35 }}>
                <Grid container direction="row" justifyContent="center">
                    <Grid item xs={1}>
                        <Typography className={style.footerButton}>
                            <Link
                                href="#home"
                                sx={{
                                    color: "#497174",
                                    textDecoration: "none",
                                    font: "bold 14px/1.4 'Open Sans', arial, sans-serif",
                                    letterSpacing: "0.15em",
                                }}
                                onClick={preventDefault}
                            >
                                Sobre Nós
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography className={style.footerButton}>
                            <Link
                                href="#home"
                                sx={{
                                    color: "#497174",
                                    textDecoration: "none",
                                    font: "bold 14px/1.4 'Open Sans', arial, sans-serif",
                                    letterSpacing: "0.15em",
                                }}
                                onClick={preventDefault}
                            >
                                Contactos
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    style={{
                        marginTop: "30px",
                    }}
                >
                    <Grid item>
                        <Link
                            href="https://twitter.com/"
                            className={style.footerLink}
                            target="_blank"
                        >
                            <FaTwitter size={26} color="#497174" />
                        </Link>
                        <Link
                            href="https://www.instagram.com/"
                            className={style.footerLink}
                            target="_blank"
                        >
                            <FaInstagram size={26} color="#497174" />
                        </Link>
                        <Link
                            href=""
                            className={style.footerLink}
                            target="_blank"
                        >
                            <FaDiscord size={26} color="#497174" />
                        </Link>
                        <Link
                            href="https://www.youtube.com/"
                            className={style.footerLink}
                            target="_blank"
                        >
                            <FaYoutube size={26} color="#497174" />
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography style={{ color: "#497174" }}>
                            © 2022. Helping Together, All rights reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </footer>
    );
}

export default Footer;