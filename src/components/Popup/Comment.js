import { Avatar, Grid, Link, Rating } from "@mui/material";
import React from "react";
import { Box, color } from "@mui/system";
import { useState } from "react";

function Comment(props) {
  return (

    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        <Avatar alt={props.name} src={props.image} sx={{ width: 80, height: 80 }} />
      </Grid>
      <Grid justifyContent="left" item xs zeroMinWidth>
        <h4 style={{ margin: 0, textAlign: "left" }}>{props.name}</h4>
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

