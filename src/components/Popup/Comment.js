import { Avatar, Grid, Rating , Typography} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Box, color } from "@mui/system";


function Comment(props) {
  return (

    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        <Link style={{ color: "#2E3B55", textDecoration: "none" }} to={`/Perfil/${props.idperfil}/Perfil`} onClick={() => this.forceUpdate()}>
          <Avatar alt={props.name} src={"/" + props.image} sx={{ width: 80, height: 80 }} />
        </Link>
      </Grid>
      <Grid justifyContent="left" item xs zeroMinWidth>
        <h4 style={{ margin: 0, textAlign: "left" }}>
        <Link style={{ color: "#2E3B55", textDecoration: "none" }} to={`/Perfil/${props.idperfil}/Perfil`} onClick={() => this.forceUpdate()}>
          <Typography>{props.name}</Typography>
          </Link>
        </h4>
        <Grid item>
          <Rating
            name="rating-comment"
            readOnly
            value={props.rating}
            size="small"
          ></Rating>
        </Grid>
        <p style={{ textAlign: "left" }}>{props.desc}</p>
        <p style={{ textAlign: "left", color: "gray" }}>
          {props.date}
        </p>
      </Grid>
    </Grid>

  )
}

export default Comment

