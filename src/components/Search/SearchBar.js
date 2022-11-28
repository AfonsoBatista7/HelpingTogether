import { React, useState } from "react";
import {
  Stack,
  TextField,
  InputAdornment,
  Button
} from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import FilterMain from "./FilterMain";
import { useNavigate, useSearchParams } from "react-router-dom";
import style from "./search.module.css";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");
  const [searchFilter, setSearchFilter] = useSearchParams()

  let inputHandler = (e) => {
    /*     var lowerCase = e.target.value.toLowerCase();
        props.onSearchTextUpdate(lowerCase); */
    setSearchText(e.target.value)
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearchTextUpdate(searchText)
  }

  const handleClearFilters = (filter) => {
    props.onClearFilter(filter);
  }

  return (
    <div>
      <Stack direction="column" spacing={1.5}>
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
              }} />
          </form>
          <FilterMain filters={props.filters} onFilterUpdate={props.onFilterUpdate} />
  {/*         <Button
            onClick={handleClearFilters}
            variant="contained"
            size="large"
            style={{
              textTransform: "none",
              borderRadius: "20px",
              color: "white",
              background: "#497174"
            }}
            sx={{ '&:hover': { opacity: [0.9, 0.8, 0.7] } }}
          >Limpar filtros</Button> */}
        </Stack>
        <Stack direction="row" spacing={2}>
          {Array.from(searchFilter.keys()).map((filter) => (
            searchFilter.get(filter) &&
              <Button key={filter}
              onClick={() => handleClearFilters(filter)}
              variant="contained"
              size="small"
              style={{
                textTransform: "none",
                borderRadius: "15px",
                color: "white",
                background: "#BABABA"
              }}
              sx={{ '&:hover': { opacity: [0.9, 0.8, 0.7] } }}
          >{filter + ": " + searchFilter.get(filter)}</Button>
          ))}
        </Stack>
      </Stack>
    </div>
  )
}

export default SearchBar
