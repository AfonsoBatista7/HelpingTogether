import React from 'react'
// import { MuiPickerUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'; 
// import DateFnsUtils from '@date-io/date-fns';

import AdapterDateFns from '@date-io/date-fns';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import { TextField } from '@mui/material';

export default function DateChoose(props) {

const {name, label, value, onChange} = props;

const convertToDefEventPara = (name, value) => ({
    target: {
        name, value
    }
})

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
            label={label}
            dateFormat="DD/MMM/YYYY"
            name={name}
            value={value}
            onChange={date => onChange(convertToDefEventPara(name,date))}
            //renderInput={(params) => <TextField {...params} />}
        />

    </LocalizationProvider>
  )
}
