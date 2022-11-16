import React, {useState} from 'react'
import { Grid, Avatar, Typography, TextField, Button, FormControlLabel, Checkbox} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


const RegisterOrganizacao = () => {

    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 10 }
    const marginBottom = { marginBottom: 10 }
    const marginButton = { marginLeft: 100, marginTop: 50 }
    const marginTopFinal = { marginTop: 50 }

    const [name, setName] = useState([])

    const getValues = (e) => {
        let data=name;
        
        if(data.includes(e.target.value)){
            data.pop(e.target.value)
        } else {
            data.push(e.target.value)

        }

        setName(data)
    }

    return (
        <>
        <Grid>
            <Grid align='center'>
                <Avatar style={avatarStyle}>
                    <AddCircleIcon />
                </Avatar>
                <h2 style={headerStyle}>Registar</h2>
                <Typography variant='caption' style={marginBottom} gutterBottom>Por favor preencha este formulário para criar uma conta</Typography>
            </Grid>
            <form>
                <TextField fullWidth label='Nome' placeholder="Enter your name" style={marginBottom}/>
                <TextField fullWidth label='Email' placeholder="Enter your email" style={marginBottom}/>
                <TextField fullWidth label='Telefone' placeholder="Enter your phone number" style={marginBottom}/>
                <TextField fullWidth label='Palavra-chave' placeholder="Enter your password" style={marginBottom}/>
                <TextField fullWidth label='Confirma palavra-chave' placeholder="Confirm your password" style={marginBottom}/>
                <Button variant="contained" component="label" size="small" style={marginBottom}>
                    <AddPhotoAlternateIcon/>
                    Adicionar foto
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                <div>
                    <Typography sx={{ fontWeight: 'bold' }} style={marginTop}>Selecione o tipo de voluntariados que irá desponibilizar:</Typography>
                    <FormControlLabel
                        control={<Checkbox value="Natureza" onChange={(e) => getValues(e)}/>}
                        label="Natureza" 
                    />
                    <FormControlLabel
                        control={<Checkbox value="Animais" onChange={(e) => getValues(e)}/>}
                        label="Animais" 
                    />
                    <FormControlLabel
                        control={<Checkbox value="Poluição" onChange={(e) => getValues(e)}/>}
                        label="Poluição" 
                    />
                    <FormControlLabel
                        control={<Checkbox value="Comunidade" onChange={(e) => getValues(e)}/>}
                        label="Comunidade" 
                    />
                    <FormControlLabel
                        control={<Checkbox value="Gastronomia" onChange={(e) => getValues(e)}/>}
                        label="Gastronomia" 
                    />
                    <FormControlLabel
                        control={<Checkbox value="Saúde" onChange={(e) => getValues(e)}/>}
                        label="Saúde" 
                    />
                </div>
                <div>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Aceito os termos e condições." 
                        style={marginTopFinal}
                    />
                    <Button type='submit' variant='contained' color='primary' style={marginButton} size="large">Registar</Button>
                </div>
            </form>
        </Grid>    
    </>
    )
}

export default RegisterOrganizacao;