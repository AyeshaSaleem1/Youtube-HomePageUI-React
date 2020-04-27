import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import FlagIcon from '@material-ui/icons/Flag';


import { makeStyles } from "@material-ui/core/styles";

const options = [
  {
    icon: <PlaylistPlayIcon />,
    text: 'Add to queue',
  },
  {
    icon: <WatchLaterIcon />,
    text: 'Watch Later',
  },
  {
    icon: <NotInterestedIcon />,
    text: 'Not Intersted',
  },
  {
    icon: <RemoveCircleOutlineIcon />,
    text: 'Not Recommended',
  },

  {
    icon: <FlagIcon />,
    text: 'Report',
  },

];

const ITEM_HEIGHT = 48;
const useStyles = makeStyles(theme => ({

  list: {
    fontSize: 18,
    [theme.breakpoints.down(1086)]: {
      fontSize: 15
    },
  }
}));

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ marginRight: '3px', paddingLeft: 0 }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            marginTop: '44px',
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '40ch',
            color: 'grey'
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose} className={classes.list} >
            {option.icon}
            <span style={{ marginLeft: '30px', color: 'black' }}>
              {option.text}
            </span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
