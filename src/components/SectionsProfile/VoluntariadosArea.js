import style from "./Profiles.module.css"
import { Pagination, Grid, Typography, Container, Divider, Button } from "@mui/material";

function VoluntariadosArea(props) {
    console.log(props.type);
    return (
        <div className={style.backgroundwhite}>
            <div >
                <Container style={{
                    height: 80
                }}></Container>

                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">

                    <Typography
                        style={{
                            fontWeight: 500,
                            fontSize: 20,
                            color: '#497174',
                            textTransform: "uppercase",
                            textAlign: 'left',
                            marginLeft: 50
                        }}
                    >
                        {props.type === "organizacao" ? "Voluntariados" : "Voluntariados Realizados"}
                    </Typography>


                    {props.type === "organizacao" ? <Button><Typography style={{color: "#497174"}}>+ Criar</Typography></Button> : <></>}
                    
                </Grid>
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

export default VoluntariadosArea