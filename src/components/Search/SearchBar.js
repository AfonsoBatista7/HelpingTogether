import React from "react";
import {
  Stack,
  TextField,
  InputAdornment,
  Button
} from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import FilterMain from "./FilterMain";
import style from "./search.module.css";

const SearchBar = (props) => {
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    //console.log("INPUT")
    props.onSearchTextUpdate(lowerCase);
  };

  const handleClearFilters = () => {
    props.onClearFilter();
  }

  return (
    <div>
        <Stack direction="row" spacing={0.5}>
          <TextField id="" onChange={inputHandler} label="Procurar oportunidades" variant="outlined" size="small" className={style.searchBar}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AiOutlineSearch />
                </InputAdornment>
              ),
            }}/>
          <FilterMain filters={props.filters} onFilterUpdate={props.onFilterUpdate}/>
          <Button
          onClick={handleClearFilters}
          variant="contained" 
          size="large"
          sx={{textTransform: 'none', borderRadius: '20px', color:'white'}}
          >Limpar filtros</Button>
        </Stack> 
    </div>
  )
}

export default SearchBar
