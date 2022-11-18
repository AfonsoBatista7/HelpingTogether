import React, { useState } from "react";
import {
  Stack,
  TextField,
  InputAdornment
} from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import FilterMain from "./FilterMain";
import style from "./search.module.css";

const SearchBar = () => {
  return (
    <div>
        <Stack direction="row" spacing={0.5} sx={{marginLeft:15, marginTop:5}}>
          <TextField id="" label="Procurar oportunidades" variant="outlined" size="small" className={style.searchBar}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AiOutlineSearch />
                </InputAdornment>
              ),
            }}/>
          <FilterMain />
        </Stack> 
    </div>
  )
}

export default SearchBar