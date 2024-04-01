import React from 'react'
import { Box, Avatar, Divider, IconButton, Typography } from "@mui/material";
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import AddButtonComponent from './AddButtonComponent';
import { makeStyles } from '@mui/styles';

const IconComponent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box sx={{ marginTop: '30px' }}>
        <IconButton>
          <AlignVerticalCenterIcon sx={{ color: '#027bc4' }} />
        </IconButton>

        <Box sx={{ marginTop: '25px' }}>
          <IconButton>
            <CameraOutdoorIcon sx={{ color: '#027bc4' }} />
          </IconButton>
          <IconButton sx={{ background: 'white' }}>
            <MailOutlineIcon sx={{ color: '#027bc4' }} />
          </IconButton>
        </Box>
        <Divider className={classes.dividerClass} />
        <Box>
          <IconButton>
            <AddAlertIcon sx={{ color: '#027bc4' }} />
          </IconButton>
          <IconButton>
            <AddButtonComponent />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{
        position: "absolute",
        bottom: 30
      }}>
        <Avatar sx={{ width: 30, height: 30 }} alt="A" src="#" />
        <Box sx={{ background: 'white', marginTop: 1, padding: "2px" }}>
          <Typography sx={{ fontSize: 10, color: '#ab2828' }}>Logout</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default IconComponent

const useStyles = makeStyles({
  root: {
    width: "70px", 
    backgroundColor: '#ebf6ff', 
    paddingLeft: '15px', 
    paddingRight: '15px'
  },
  dividerClass: {
    marginTop: "20px !important", 
    marginBottom: '20px !important', 
    backgroundColor: '#288fcd'
  }
});