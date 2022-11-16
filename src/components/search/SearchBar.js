import React, { useState } from "react";
import {
  Stack,
  TextField,
  Button,
  InputAdornment,
  Menu,
  MenuItem,
  Typography
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import FilterMain from "./FilterMain";
import style from "./search.module.css";

const SearchBar = () => {
  return (
    <div>
        <Stack direction="row" spacing={0.5} sx={{marginLeft:10, marginTop:10}}>
          <TextField id="" label="Procurar oportunidades" variant="outlined" size="small" className={style.searchBar}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}/>
          <FilterMain />
        </Stack> 
    </div>
  )
}

export default SearchBar