import { FormLabel, Grid, TextField } from '@mui/material';
import React from 'react'
import {useState, useEffect} from 'react'
import {useForm, Form} from './useForm';
import { FormControl, FormControlLabel, Radio } from '@mui/material';
import Controls from "../controls/Controls";


const initialValues = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    gender: '',
    //isPermanent: false,
    birthdate: new Date(),
}

const genderItems = [
    { id: 'male', title: 'Masculino' },
    { id: 'female', title: 'Feminino' },
    { id: 'other', title: 'Outro' },
]

export default function VoluntarioForm() {

    const {
        values,
        setValues,
        handlerInputChange
    } = useForm(initialValues);


  return (
    <Form>
        <Grid container>
            <Grid item xs={6}>
                <Controls.Input
                    name="fullName" 
                    label="Nome completo"
                    value={values.fullName}
                    onChange= {handlerInputChange}
                />
                <Controls.Input
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handlerInputChange}
                />
                <Controls.Input
                    name="phone"
                    label="Telefone"
                    value={values.phone}
                    onChange={handlerInputChange}
                />
            </Grid>
            <Grid item xs={6}>
                <Controls.RadioGroup
                    name="gender"
                    label="Género"
                    value={values.gender}
                    onChange={handlerInputChange}
                    items={genderItems}
                />
                {/* <Controls.DateChoose
                    name="birthdate"
                    label="Data Nascimento"
                    value={values.birthdate}
                    onChange={handlerInputChange}
                    /> */}
                    {/* <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handlerInputChange}
                    /> */}

                    <div>
                        <Controls.Button
                            type= "Submit"
                            text="Submeter" />
                        {/* <Controls.Button
                            text="Limpar"
                            color="default" /> */}
                    </div>
            </Grid>
        </Grid>
    </Form>
  )
}
