import React, { useState } from "react";
import {
  Stack,
  TextField,
  Button,
  InputAdornment,
  Menu,
  MenuItem
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import style from "./search.module.css";

/* const filters = {
  Tipo: openTypesFilter,
  Região: openRegionFilter,
  Duração: openDurationFilter
};

const filterTypes = {
  Natureza: filterTypeNature,
  Animais: filterTypeAnimals,
  Poluição: filterTypePollution,
  Comunidade: filterTypeCommunity,
  Gastronomia: filterTypeGastronomy,
  Saúde: filterTypeHealth
} */

// split later?
const SearchBar = () => {
  const [anchorElFilter, setAnchorElFilter] = useState(null);
  const open = Boolean(anchorElFilter);
  const handleClick = (event) => {
    setAnchorElFilter(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElFilter(null);
  };

  return (
    <div>
        <Stack direction="row" spacing={0.5} sx={{marginLeft:10, marginTop:10}}>
          <TextField id="" label="Procurar oportunidades" variant="outlined" sx={{backgroundColor:'white'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}/>
          
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Filters
          </Button>
        </Stack>
        <Menu
          id="filter-menu"
          anchorEl={anchorElFilter}
          open={open}
          onClose={handleClose}
/*           MenuListProps={{
            'aria-labelledby': 'basic-button',
          }} */
        >
          <MenuItem onClick={handleClose}>Tipos</MenuItem>
          <MenuItem onClick={handleClose}>Região</MenuItem>
          <MenuItem onClick={handleClose}>Duração</MenuItem>
        </Menu>
    </div>
  )
}
/* 
import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function InputWithIcon() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="With sx" variant="standard" />
      </Box>
    </Box>
  );
}*/


export default SearchBar