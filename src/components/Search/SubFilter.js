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
    const handleFilterClose = () => {
        setAnchorElFilter(null);
    };

    return (
        <div>
        <MenuItem key={props.filter} onClick={handleFilterOpen} 
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
        {Object.keys(props.items).map((item) => (
            <MenuItem onClick={handleFilterClose}>{props.items[item]}</MenuItem>
        ))}
        </Menu>
        </div>
  )
}

export default SubFilter