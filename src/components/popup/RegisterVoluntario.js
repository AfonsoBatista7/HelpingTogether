import React from 'react'
import { Grid, Avatar, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Checkbox } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


const RegisterVoluntario = () => {

    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const marginBottom = { marginBottom: 10 }
    const marginTop2 = { marginTop: 10 }
    const marginButton = { marginLeft: 150 }

    return (
        <>
        <Grid>
            <Grid align='center'>
                <Avatar style={avatarStyle}>
                    <AddCircleIcon />
                </Avatar>
                <h2 style={headerStyle}>Registar</h2>
                <Typography variant='caption' gutterBottom>Por favor preencha este formulário para criar uma conta</Typography>
            </Grid>
            <form>
                <TextField fullWidth label='Nome' placeholder="Enter your name" style={marginBottom}/>
                <TextField fullWidth label='Email' placeholder="Enter your email" style={marginBottom}/>
                <FormControl component="fieldset" style={marginTop}>
                    <FormLabel component="legend">Género</FormLabel>
                    <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                        <FormControlLabel value="female" control={<Radio />} label="Feminino" />
                        <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                    </RadioGroup>
                </FormControl>
                <TextField fullWidth label='Telefone' placeholder="Enter your phone number" style={marginBottom}/>
                <TextField fullWidth label='Palavra-chave' placeholder="Enter your password" style={marginBottom}/>
                <TextField fullWidth label='Confirma palavra-chave' placeholder="Confirm your password" style={marginBottom}/>
                <Button variant="contained" component="label" size="small" style={marginBottom}>
                    <AddPhotoAlternateIcon/>
                    Adicionar foto
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                <div>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Aceito os termos e condições." 
                        style={marginTop2}
                    />
                    <Button type='submit' variant='contained' color='primary' style={marginButton}>Registar</Button>
                </div>
            </form>
        </Grid>    
    </>
    )
}

export default RegisterVoluntario;