import React, { useState } from "react";
import {
  Button,
  Menu
} from "@mui/material";
import SubFilter from './SubFilter';

const FilterMain = () => {
    const [anchorElFilter, setAnchorElFilter] = useState(null);
    const openFilter = Boolean(anchorElFilter);
    const handleClick = (event) => {
        setAnchorElFilter(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorElFilter(null);
    };

    const filters = {
        Tipo: ['Natureza', 'Animais', 'Poluição', 'Comunidade', 'Gastronomia', 'Saúde'],
        Região: ['Norte', 'Centro', 'Alentejo', 'Área Metropolitana Lisboa', 'Algarve', 'Açores', 'Madeira'],
        Duração:  ['Reduzida', 'Média', 'Longa']
    };
  return (
    <div>
        <Button
        id="filter-button"
        aria-controls={openFilter ? 'filter-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openFilter ? 'true' : undefined}
        onClick={handleClick}
        variant="contained" 
        size="large"
        sx={{textTransform: 'none', borderRadius: '20px', color:'white'}}
        >Filtros</Button>

        <Menu
            id="filter-menu"
            anchorEl={anchorElFilter}
            open={openFilter}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'filter-button',
            }}
            >
            {Object.keys(filters).map((filter) => (
               <SubFilter filter={filter} items={filters[filter]}></SubFilter>
            ))}
            </Menu>
    </div>
  )
}

export default FilterMain