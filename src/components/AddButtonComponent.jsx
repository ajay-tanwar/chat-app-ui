import * as React from 'react';
import {
  Box
} from "@mui/material";
import { makeStyles } from '@mui/styles';

import AddIcon from '@mui/icons-material/Add';

const AddButtonComponent = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AddIcon sx={{ color: '#FFFFFFFF' }} />
    </Box>
  )
}

export default AddButtonComponent;


const useStyles = makeStyles({
  root: {
    backgroundColor: '#027bc4', 
    width: '30px', 
    height: '30px', 
    borderRadius: '10px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: "10px"
  },
});