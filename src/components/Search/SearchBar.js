import { React, useState} from "react";
import {
  Stack,
  TextField,
  InputAdornment,
  Button
} from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import FilterMain from "./FilterMain";
import { useNavigate } from "react-router-dom";
import style from "./search.module.css";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate()

  let inputHandler = (e) => {
/*     var lowerCase = e.target.value.toLowerCase();
    props.onSearchTextUpdate(lowerCase); */
    setSearchText(e.target.value)
  };

  function handleSubmit(e) {
    e.preventDefault();  
    props.onSearchTextUpdate(searchText)
  }

  const handleClearFilters = () => {
    props.onClearFilter();
  }

  return (
    <div>
        <Stack direction="row" spacing={0.5}>
          <form onSubmit={handleSubmit} >
            <TextField id="" onChange={inputHandler}
              label="Procurar oportunidades" variant="outlined" size="small" className={style.searchBar}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AiOutlineSearch />
                  </InputAdornment>
                ),
              }}/>
          </form>
          <FilterMain filters={props.filters} onFilterUpdate={props.onFilterUpdate}/>
          <Button
          onClick={handleClearFilters}
          variant="contained" 
          size="large"
          className={style.button}
          sx={{'&:hover': { opacity: [0.9, 0.8, 0.7]} }}
          >Limpar filtros</Button>
        </Stack> 
    </div>
  )
}

export default SearchBar
