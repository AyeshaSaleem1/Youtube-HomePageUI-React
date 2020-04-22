import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import YouTubeIcon from '@material-ui/icons/YouTube';
import 'typeface-roboto'
import SearchBar from './SearchBar';

import WebFont from "webfontloader";
import Drawer from './Drawer'


import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';

WebFont.load({google: {families: ["Roboto:400"]}});
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  title: {
    display: 'none',
    fontWeight:800,
    fontSize:'20px',
    letterSpacing:'-0.150em',
    fontStretch:'absolute',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
  search: {
    border:'3px dotted red',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),    //this
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),   //this
    },
    // marginRight: theme.spacing(2),
    // marginLeft: '20px',
     width: '100%',
    [theme.breakpoints.up('sm')]: {
     // marginLeft: theme.spacing(20),
    //  width: 'auto',
  //  width: '50ch',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    // color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0.5),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(0.2)}px)`,
  // transition: theme.transitions.create('width'),
    width: '50%',
   
    [theme.breakpoints.up('md')]: {
   //   width: '40ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
     display: 'none',
    },
    YouTubeI:
    {
      color: '#FF0000'
    },
    icon:
  {
    color:'443f3f',
   
  }
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{backgroundColor:'White',color:"Black"}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
           <YouTubeIcon className={classes.YouTubeI}  color="secondary" fontSize="large" style={{ fontSize: 39 }}/>
          <Typography className={classes.title} variant="h5" noWrap >
       

          Yo uTu b e<sup style={{fontSize:12, fontWeight:300, letterSpacing:'0em'}}> PK</sup>
        
          </Typography >
          <div className={classes.grow} />

          <div className={classes.search,classes.inputInput}>
          <SearchBar classes={{
             
              }}/>
          </div>
          

          {/* <div>
           
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
             <button style={{backgroundColor:'red'}}>  <SearchIcon /></button>
             */}
             {/* <div className={classes.searchIcon}>
            </div> */}
          {/* </div> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <IconButton aria-label="show 4 new mails" style={{paddingRight:'30px'}}>
               <VideoCallIcon   style={{fontSize:'30px',color:'606060'}}/>
               </IconButton>
            <IconButton aria-label="show 4 new mails" style={{paddingRight:'30px',}}>
             <AppsIcon style={{fontSize:'30px', color:'606060'}}/>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" style={{paddingRight:'30px'}} >
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon  style={{fontSize:'30px',color:'606060'}}/>
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              
              style={{paddingRight:'30px'}}
            >
              <AccountCircle   style={{fontSize:'35px',color:'606060'}} />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
  
    </div>
  );
}
