import { Typography, Link, Grid } from "@mui/material";
import { FaTwitter, FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa";

import style from "./footer.module.css";

function Footer(props) {
    const preventDefault = (event) => event.preventDefault();
    return (
        <footer className={style.footer}>
            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={1}>
                    <Typography
                        style={{
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: ".1rem",
                            textAlign: 'center'
                        }}
                    >
                        <Link
                            href="#home"
                            style={{
                                color: "white",
                                textDecoration: "none",
                            }}
                            onClick={preventDefault}
                        >
                            About Us
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography
                        style={{
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: ".1rem",
                            textAlign: 'center'
                        }}
                    >
                        <Link
                            href="#home"
                            style={{
                                color: "white",
                                textDecoration: "none",
                            }}
                            onClick={preventDefault}
                        >
                            Contacts 
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                style={{
                    marginTop: "30px",
                }}
            >
                <Grid item xs={4}>
                    <Link
                        href="https://twitter.com/"
                        className={style.footerLink}
                        target="_blank"
                    >
                        <FaTwitter size={26} color="#fff" />
                    </Link>
                    <Link
                        href="https://www.instagram.com/"
                        className={style.footerLink}
                        target="_blank"
                    >
                        <FaInstagram size={26} color="#fff" />
                    </Link>
                    <Link
                        href=""
                        className={style.footerLink}
                        target="_blank"
                    >
                        <FaDiscord size={26} color="#fff" />
                    </Link>
                    <Link
                        href="https://www.youtube.com/"
                        className={style.footerLink}
                        target="_blank"
                    >
                        <FaYoutube size={26} color="#fff" />
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Typography>
                        © 2022. Helping Together, All rights reserved.
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;
