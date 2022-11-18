import InfoProfile from "../components/SectionsProfile/InfoProfile";
import VoluntariadosDone from "../components/SectionsProfile/VoluntariadosDone";
import style from "../components/SectionsProfile/Profiles.module.css"
import { Pagination, Grid, Typography, Container } from "@mui/material";

function Perfil() {
    return (
        <div className={style.backgroundwhite}>
            <div className={style.margins}>
                    <div style={{height:20}}></div>
                    <div className={style.perfileTitle}>
                        <Typography
                            style={{
                                fontWeight: 700,
                                fontSize: 30,
                                color: '#2E3B55',
                                textTransform: "uppercase",
                                textAlign: 'left',
                              
                            }} 
                        >Perfil</Typography>
                    
                    </div>

                <InfoProfile />

                <Container style={{
                    height: 70
                }}></Container>

                <VoluntariadosDone/>

                <Container style={{
                    height: 50
                }}></Container>

            </div >
        </div>
    );
}

export default Perfil;