import style from "./Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider } from "@mui/material";

function VoluntariadosDone(props) {
    return(
        <div className={style.backgroundwhite}>
        <div >
            <Container style={{
                height: 80
            }}></Container>

            <Typography
                style={{
                    fontWeight: 500,
                    fontSize: 20,
                    color: '#2E3B55',
                    textTransform: "uppercase",
                    textAlign: 'left',
                    marginLeft: 50
                }}
            >Voluntariados Realizados</Typography>

            <Divider />
            <Container style={{
                height: 100
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
    </div >
    );

}

export default VoluntariadosDone