import React from 'react'
import { TextField } from '@mui/material';

export default function input(props) {

const {name, label, value, onChange} = props;

  return (
    <TextField
        varient="outlined"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
    />
  )
}
