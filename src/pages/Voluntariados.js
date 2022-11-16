import style from "../components/SectionsProfile/Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider } from "@mui/material";

function Voluntariados() {
    return (
        <div className={style.backgroundwhite}>
            <div>
                <Container style={{
                    height: 80
                }}></Container>

                <Typography
                    style={{
                        fontWeight: 700,
                        fontSize: 30,
                        color: '#2E3B55',
                        textTransform: "uppercase",
                        textAlign: 'left',
                        marginLeft: 50
                    }}
                >Voluntariados</Typography>

                <Divider />
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
    );
}

export default Voluntariados;