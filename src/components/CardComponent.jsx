import * as React from 'react';
import {
  Typography,
  Box,
  Button
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from '@mui/styles';
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";


const CardComponent = (props) => {
  const classes = useStyles();
  const { index } = props;
  return (
    <Box key={index} className={classes.root}>
      <Box sx={{ width: "700px", height: "125px", backgroundColor: '#FFFFFFFF', borderRadius: "15px", padding: "15px" }}>
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccountCircleIcon sx={{ marginRight: '2px' }} />
            <Typography variant='caption'>{`YOU-${index}`}</Typography>
          </Box>
          <Checkbox
            sx={{
              [`&, &.${checkboxClasses.checked}`]: {
                color: '#e0e0e0',
              },
            }}
          />
        </Box>
        <Typography variant='caption' sx={{ fontWeight: 'bold' }}>How is salary benchmarking used today?</Typography>

        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Typography color="#1976d2" variant="caption">2 similar questions</Typography>
          <Box sx={{ display: 'flex', alignItems: "center" }}>
            <Typography variant="caption" color="#1976d2" sx={{ marginRight: '10px' }}>
              Files in focus 1.234
            </Typography>
            <Button variant="outlined" sx={{ fontSize: "9px" }}>
              Change focus
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CardComponent;

const useStyles = makeStyles({
  root: {
    display: 'flex', 
    justifyContent: 'center', 
    marginBottom: '10px'
  },
});