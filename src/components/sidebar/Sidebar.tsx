import * as React from 'react';
import { styled, useTheme, Theme, CSSObject, makeStyles } from '@mui/material/styles';
import { Link, useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Icon } from "@iconify/react";
import { images } from "../../constants";
import classes from "./Sidebar.module.scss";

import {sidebarNavAbove, sidebarNavBelow} from "../../config/sidebarNav";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Dashboard = {
  id: 0,
  link: "/",
  section: "dashboard",
  icon: "lucide:layout-dashboard", //width:"20"
  text: "Dashboard",
}
export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [activeIndex, setActiveIndex] = React.useState(1);
  const location = useLocation();

  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  React.useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const sideBarNav = [...sidebarNavAbove, ...sidebarNavBelow]
    const activeItem = sideBarNav.findIndex((item) => item.section === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);
  return (
    <Box sx={{ 
      display: 'flex'
    }}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#009FE3",
          color: "white",
        },
        style: {
          width: open? '260px': '70px',
        },
      }}
      variant="permanent" open={open}>
        <Box
        sx={{
          display: 'flex',
          justifyContent: open ? 'space-between' : 'center',
          alignItems: "center"

        }}
      >
            {open && <div className={classes.sidebar__logo}>
                <img src={images.logo} alt="digikala" />
            </div>}
            <DrawerHeader>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
            >
                {open ? <ChevronLeftIcon 
                onClick={handleDrawerClose}/> : 
                <MenuIcon
                onClick={handleDrawerOpen}/>}
            </IconButton>
            </DrawerHeader>
      </Box>
        <List>
          {sidebarNavAbove.map((nav, index) => (
            <Link
            to={nav.link}
            key={`nav-${index}`}
            className={`${classes.sidebar__menu__item} ${
              activeIndex === nav.id && classes.active
            }`}
          >
            <ListItem key={nav.text} disablePadding sx={{ 
              display: 'block',
              marginTop: '15px',
              marginBottom: '15px',
        }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  "&:hover": {backgroundColor: "transparent", color: "inherit"}
                }}
                >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                  >
            <div className={classes.sidebar__menu__item__icon}>
                  <Icon color={activeIndex === nav.id? "black": "white"} icon={nav.icon} />
            </div>
                </ListItemIcon>
                <ListItemText  primary={nav.text} sx={{ opacity: open ? 1 : 0}} 
                />
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>
        <Divider sx={{
          marginTop: '30px',
          marginBottom: '30px',
          borderBottom: '2px solid white',
          width: '90%',
          alignSelf: 'center',
        }}/>
        <List>
          {sidebarNavBelow.map((nav, index) => (
            <Link
            to={nav.link}
            key={`nav-${index}`}
            className={`${classes.sidebar__menu__item} ${
              activeIndex === nav.id && classes.active
            }`}>

            <ListItem key={nav.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  "&:hover": {backgroundColor: "transparent", color: "inherit"}
                }}
                >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                  >
                  <div className={classes.sidebar__menu__item__icon}>
                  <Icon color={activeIndex === nav.id? "black": "white"} icon={nav.icon} />
            </div>
                </ListItemIcon>
                <ListItemText primary={nav.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}