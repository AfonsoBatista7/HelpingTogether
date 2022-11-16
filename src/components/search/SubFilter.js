import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Typography
} from "@mui/material";

const SubFilter = (props) => {
    const [anchorElFilter, setAnchorElFilter] = useState(null);
    const open = Boolean(anchorElFilter);
    const handleFilterOpen = (event) => {
        setAnchorElFilter(event.currentTarget);
    };
    const handleFilterClose = (event) => {
        setAnchorElFilter(null);
    };

    return (
        <div>
        <MenuItem key={props.filter} onClick={handleFilterOpen}    // make separate components for these submenus
            id={props.filter+"-filter-menu-option"}
            aria-haspopup="true">
            <Typography textAlign="left">
                {props.filter}
            </Typography>
        </MenuItem>
        <Menu     // submenu
        id={props.filter+"-filter-menu"}
        anchorEl={anchorElFilter}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        open={open}
        onClose={handleFilterClose}
        >
        <MenuItem onClick={handleFilterClose}>Tipos2</MenuItem>
        <MenuItem onClick={handleFilterClose}>Região2</MenuItem>
        <MenuItem onClick={handleFilterClose}>Duração2</MenuItem>
        </Menu>
        </div>
  )
}

export default SubFilter