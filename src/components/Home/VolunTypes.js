import React from 'react'
import { Grid } from '@mui/material'
import VolunType from './VolunType'
import style from "./home.module.css"

const VolunTypes = (props) => {

  let counter=0;

  return (
        <div>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center"}} className={style.subtitle}>
            QUERO SER VOLUNTÁRIO
          </div>
          <div style={{ minHeight: "75vh",display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Grid container justifyContent="space-evenly" direction="row" >
            {Object.keys(props.types).map((type) => (
                <Grid key={type} item style={{position: "relative", top:`${(-Math.pow((++counter)-3.5, 2)+6.25)*15}px`, padding: 0}}>
                    <VolunType name={type} icon={props.types[type]} />
                </Grid>
            ))}
            </Grid>
          </div>
        </div>
  )
}

export default VolunTypes
