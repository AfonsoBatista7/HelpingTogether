import { MonitorHeart } from '@mui/icons-material';
import { Box, Fab, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import style from './home.module.css'

const VolunType = (props) => {
    console.log(props.name)
    console.log(props.icon)
  return (
    <div>
        <Stack spacing={2} justifyContent="center" alignItems="center">
            <Fab size="large">
                {props.icon}
            </Fab>
            <Typography variant="h6" color="white">
                {props.name}
            </Typography>
        </Stack>
    </div>
  )
}

export default VolunType