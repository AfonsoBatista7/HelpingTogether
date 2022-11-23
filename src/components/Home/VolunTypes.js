import React from 'react'
import { Grid, Typography } from '@mui/material'
import VolunType from './VolunType'

const VolunTypes = (props) => {
  return (
        <Grid container spacing={10} style={{width: 450, height: 300}}>
        {Object.keys(props.types).map((type) => (
            <Grid key={type} item xs={4}>
                <VolunType name={type} icon={props.types[type]} />
            </Grid>
        ))}
        </Grid>
  )
}

export default VolunTypes
