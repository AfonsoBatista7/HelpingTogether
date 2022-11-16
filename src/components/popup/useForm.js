import React from 'react'
import {useState, useEffect} from 'react'
// import { makeStyles } from '@mui/material';

export function useForm(initialValues) {

    const [values, setValues] = useState(initialValues);

    const handlerInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        setValues,
        handlerInputChange
    }
}

// const useStyles = makeStyles(theme => ({
//     root: {
//         '& .MuiFormControl-root': {
//             width: '80%',
//             margin: theme.spacing(2)
//         }
//     }
// }))

export function Form(props) {

    // const classes = useStyles();
    // <form className={classes.root}></form>

  return (
    <form autoComplete="off">
      {props.children}
    </form>
  )
}

