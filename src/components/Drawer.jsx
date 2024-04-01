import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Avatar,
  AvatarGroup,
  Collapse,
  List,
  Typography,
  Box,
  Drawer,
  Divider,
  IconButton,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AddButtonComponent from './AddButtonComponent';
import SearchInputComponent from './SearchInputComponent';
import CardComponent from './CardComponent';

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AvatarsGroup = () => {
  return (
    <AvatarGroup sx={{
      '& .MuiAvatar-root': { width: 20, height: 20, fontSize: 10 },
    }}>
      <Avatar alt="A" src="#" />
      <Avatar alt="B" src="#" />
    </AvatarGroup>
  );
}


export default function DrawerComponent() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [menuOpen, setMenuOpen] = React.useState(true);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <Box sx={{ display: 'flex', width: "100%" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginLeft: '75px',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Divider />

        <Box sx={{ marginTop: '30px' }}>
          <Box sx={{ backgroundColor: '#d2e8fb', alignItems: 'center', display: 'flex', borderRadius: '10px', padding: '10px' }}>
            <AddButtonComponent />
            <Typography color="#027bc4">New Chat</Typography>
          </Box>
        </Box>

        <Box sx={{ marginTop: '30px', paddingLeft: "14px" }}>
          <Typography>History</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchInputComponent />
            <IconButton>
              <FilterListIcon />
            </IconButton>

          </Box>
        </Box>

        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemText disableTypography sx={{ color: '#999ea3', fontSize: '12px' }} primary="TODAY" />
            {menuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={menuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText disableTypography sx={{ fontSize: '12px' }} primary="How can artificial intellig..." />
                <AvatarsGroup />
                <Brightness5Icon fontSize='6px' />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText disableTypography sx={{ fontSize: '12px' }} primary="What are the key chall..." />
                <VisibilityOffIcon fontSize='10' />
                <Brightness5Icon fontSize='6px' />
              </ListItemButton>


              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText disableTypography sx={{ fontSize: '12px' }} primary="In what ways can AI-driv..." />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText disableTypography sx={{ fontSize: '12px' }} primary="Can AI-driven automa..." />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Drawer>
      <Main open={open} sx={{ backgroundColor: "#5cbcf4" }}>
        <Box>
          <IconButton sx={{
            position: "absolute",
            left: "348px",
            top: '100px',
            zIndex: "100000",
            background: "white",
            borderRadius: "14px"
          }}
            onClick={() => console.log("HIII")}
          >
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>
        {[1, 2, 3]?.map((item, index) => {
          return (
            <CardComponent index={index} />
          )
        })}
      </Main>
    </Box>
  );
}