import * as React from 'react';
import {
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchInputComponent = (props) => {
  return (
    <TextField
      size="small"
      variant="outlined"
      placeholder="Search in history…"
      inputProps={{ style: { height: '16px' } }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchInputComponent