import InfoProfile from "../components/SectionsProfile/InfoProfile";
import style from "../components/SectionsProfile/Profiles.module.css"
import { Pagination, Grid, Typography, Container } from "@mui/material";

function Perfil() {
    return (
        <div className={style.backgroundwhite}>
                <div className={style.margins}>
                    <Container style={{
                        height: 80
                    }}></Container>
                    
                    <InfoProfile />

                    <Container style={{
                        height: 700
                    }}></Container>
                    <Container style={{
                        height: 50
                    }}></Container>

                </div >
            </div>
    );
}

export default Perfil;