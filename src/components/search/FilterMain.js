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

    const [anchorElTypeFilter, setAnchorElTypeFilter] = useState(null);
    const openTypeFilter = Boolean(anchorElTypeFilter);
    const handleTypeFilterOpen = (event) => {
        setAnchorElTypeFilter(event.currentTarget);
    };
    const handleTypeFilterClose = (event) => {
        setAnchorElTypeFilter(null);
    };

/*     const [anchorElRegionFilter, setAnchorElRegionFilter] = useState(null);
    const openRegionFilter = Boolean(anchorElRegionFilter);
    const handleRegionFilterOpen = (event) => {
        setAnchorElRegionFilter(event.currentTarget);
    };
    const handleRegionFilterClose = (event) => {
        setAnchorElRegionFilter(null);
    };

    const [anchorElDurationFilter, setAnchorElDurationFilter] = useState(null);
    const openDurationFilter = Boolean(anchorElDurationFilter);
    const handleDurationFilterOpen = (event) => {
        setAnchorElDurationFilter(event.currentTarget);
    };
    const handleDurationFilterClose = (event) => {
        setAnchorElDurationFilter(null);
    }; */

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
        >Filters</Button>

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
               <SubFilter filter={filter}></SubFilter>
            ))}
            </Menu>
    </div>
  )
}

export default FilterMain