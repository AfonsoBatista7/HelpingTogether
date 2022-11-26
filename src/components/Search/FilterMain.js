import React, { useState } from "react";
import {
  Button,
  Menu
} from "@mui/material";
import SubFilter from './SubFilter';

const FilterMain = (props) => {
    const [anchorElFilter, setAnchorElFilter] = useState(null);
    const openFilter = Boolean(anchorElFilter);
    const handleClick = (event) => {
        setAnchorElFilter(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorElFilter(null);
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
            {Object.keys(props.filters).map((filter) => (
               <SubFilter key={filter} filter={filter} items={props.filters[filter]} onFilterUpdate={props.onFilterUpdate}></SubFilter>
            ))}
            </Menu>
    </div>
  )
}

export default FilterMain
