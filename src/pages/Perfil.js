import InfoProfile from "../components/sectionsprofile/InfoProfile";
import style from "../components/sectionsprofile/Profiles.module.css"
import { Pagination, Grid, Typography, Container } from "@mui/material";

function Perfil() {
    return (
        <div className={style.backgroundwhite}>
            <div>
                <div className={style.margins}>
                    <Container style={{
                        height: 80
                    }}></Container>
                    
                    <InfoProfile />

                    <Container style={{
                        height: 700
                    }}></Container>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Pagination count={10} />
                    </Grid>
                    <Container style={{
                        height: 50
                    }}></Container>

                </div >
            </div>
        </div>
    );
}

export default Perfil;