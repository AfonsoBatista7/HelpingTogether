import React from 'react'
import {FormControl, FormControlLabel, Checkbox as MuiCheckBox} from '@mui/material';

export default function Checkbox(props) {

const {name, label, value, onChage} = props;

const convertToDefEventPara = (name, value) => ({
    target: {
        name, value
    }
})

  return (
    <FormControl> 
        <FormControlLabel
        control={<MuiCheckBox
            name={name}
            color="primary"
            checked={value}
            onChange={e => onChage (convertToDefEventPara(name, e.target.checked))}
        />}
        label={label}
        />
    </FormControl>
  )
}
