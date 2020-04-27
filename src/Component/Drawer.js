import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Skeleton from './Skeleton'

import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';   //liked videos
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag'; // report history
import FeedbackIcon from '@material-ui/icons/Feedback';
import HelpIcon from '@material-ui/icons/Help';
import LiveTvSharpIcon from '@material-ui/icons/LiveTvSharp'; //live

import RSC from "react-scrollbars-custom";

const drawerWidth = 290;

const useStyles = makeStyles((theme) => ({

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    [theme.breakpoints.down('sm')]: {
      width: 200
    },
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),

    overflowX: "hidden",
    width: theme.spacing(9) + 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(11) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  icons: {
    '&:hover': {
      color: 'red'
    },
    color: '#606060',
  },
  iconSize:
  {
    fontSize: '32px',
  },
  listCss:
  {
    marginTop: '45px',
    fontSize: '12px'
  },

  item:
  {
    color: '#5f5e5e',
    '&:hover': {
      backgroundColor: '#ededed',
      color: 'black'
    },
    cursor: 'pointer',
    padding: '8px 24px'
  },
  drawerIcon:
  {
    color: 'red'
  },
  active:
  {
    backgroundColor: '#e0dede',
    '&:hover': {
      backgroundColor: '#e0dede',

    },
  }
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const [activeIcon, SetActiveIcon] = React.useState('Home')
const  [scrollOn,setScrollOn] = React.useState(false)
  function saveName(param) {
    SetActiveIcon(param)
  }
function onOut()
{
  setScrollOn(false)
}
function onOver()
{
setScrollOn(true)
}
  return (
    <>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, classes.disableScroll, {
          [classes.drawerOpen]: props.open,
          [classes.drawerClose]: !props.open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open
          })
        }}
        onMouseOut={() => onOut()}
        onMouseOver={() => onOver()}
      >
        <RSC id="RSC-Example" maximalThumbYSize={300} noScrollX={'false'}
          style={{ height: "100%" }}>
          <Divider />
          {
            !props.open ?
              <List className={classes.listCss} >
                {[{
                  name: "Home",
                  icon: <HomeIcon className={classes.iconSize} />
                },
                {
                  name: "Trending",
                  icon: <WhatshotIcon className={classes.iconSize} />
                },

                {
                  name: "Subscription",
                  icon: <SubscriptionsIcon className={classes.iconSize} />
                }, {
                  name: "Library",
                  icon: <VideoLibraryIcon className={classes.iconSize} />
                }]
                  .map((text, index) => (
                    <ListItem style={{
                      display: 'block',
                      padding: 0,
                      paddingTop: '40%'
                    }}
                      onClick={() => saveName(text.name)}
                      className={(activeIcon === text.name) ? `${classes.drawerIcon} ${classes.icons}` : classes.icons}>

                      <center>
                        {text.icon}
                        <br />
                        {!props.open && text.name}
                      </center>
                    </ListItem>
                  ))}
              </List>
              :
              <>
                <List style={{ marginTop: '70px' }}  >
                  {[{
                    name: "Home",
                    icon: <HomeIcon className={classes.iconSize} />
                  },
                  {
                    name: "Trending",
                    icon: <WhatshotIcon className={classes.iconSize} />
                  },
                  {
                    name: "Subscription",
                    icon: <SubscriptionsIcon className={classes.iconSize} />
                  }]
                    .map((text, index) => (
                      <ListItem
                        className={activeIcon === text.name ? ` ${classes.item} ${classes.active}` : classes.item}
                      >
                        <span style={{ marginRight: '30px' }} className={(activeIcon === text.name) && classes.drawerIcon}>
                          {text.icon}
                        </span>

                        <ListItemText
                          primary={text.name} primaryTypographyProps={(activeIcon === text.name) && { style: { fontWeight: 'bolder' } }} />
                      </ListItem>
                    ))}
                </List>
                <Divider />
                <List   >
                  {[{
                    name: "Library",
                    icon: <VideoLibraryIcon className={classes.iconSize} />
                  },
                  {
                    name: "History",
                    icon: <HistoryIcon className={classes.iconSize} />
                  },
                  {
                    name: "Watch Later",
                    icon: <WatchLaterIcon className={classes.iconSize} />
                  },

                  {
                    name: "Liked Video",
                    icon: <PlaylistPlayIcon className={classes.iconSize} />
                  }]
                    .map((text, index) => (
                      <ListItem
                        className={classes.item}

                      >
                        <span style={{ marginRight: '30px' }}>

                          {text.icon}
                        </span>

                        <ListItemText primary={text.name} />
                      </ListItem>
                    ))}
                </List >
                <Divider />
                <Divider />
                <List  >
                  <h6 style={{
                    padding: '10px 24px',
                  }} >
                    SUBSCRIPTIONS</h6>
                  {[{
                    name: "Popular on YouTube",
                    icon: 'https://yt3.ggpht.com/CCjlf26oBSkdjS8gwA47_pRfesZq1IHb6Wh6SFF6N6UspaanzqCN6MMdGvAziZRBcFbXxcx7Hg=s88-c-k-c0xffffffff-no-nd-rj'
                  },
                  {
                    name: "Music",
                    icon: "https://yt3.ggpht.com/zYQhquP150XaBl5f-C5PPNa9qd4ux-b4zoJnUtlESSXVI4g0CCfAAWGEsYLqyP8mjDbHcHjm0g=s88-c-k-c0xffffffff-no-nd-rj"

                  },
                  {
                    name: "Sports",
                    icon: 'https://yt3.ggpht.com/0suiXm6iuhFWYcAy3Yp_PCvskNY2Ri_MOqWVSL27T5iHXJCebB1_GOpYIBeObW6ypmKY4-wAwas=s88-c-k-c0xffffffff-no-nd-rj'
                  },

                  {
                    name: "Gaming",
                    icon: 'https://yt3.ggpht.com/sluLnK63e9EAUwN5LedlJ3FpgDjhWd_9Rp_9oPMhcLPitred-_c4HS9mhq95FKJKU3RWhnVEqQ=s88-c-k-c0xffffffff-no-nd-rj'
                  }]
                    .map((text, index) => (
                      <ListItem
                        className={classes.item}
                      >
                        <span style={{ marginRight: '30px' }}>

                          <img src={text.icon} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                        </span>

                        <ListItemText primary={text.name} />
                      </ListItem>
                    ))}
                </List>
                <Divider />
                <List    >
                  <h6 style={{
                    padding: '10px 24px',
                  }}>MORE ON YOUTUBE</h6>
                  {[{
                    name: "Live",
                    icon: <LiveTvSharpIcon className={classes.iconSize} />
                  }
                  ]
                    .map((text, index) => (
                      <ListItem
                        className={classes.item}
                      >
                        <span style={{ marginRight: '30px' }}>

                          {text.icon}
                        </span>

                        <ListItemText primary={text.name} />
                      </ListItem>
                    ))}
                </List>

                <Divider />
                <Divider />
                <List>
                  {[{
                    name: "Setting",
                    icon: <SettingsIcon className={classes.iconSize} />
                  },
                  {
                    name: "Report history",
                    icon: <FlagIcon className={classes.iconSize} />
                  },
                  {
                    name: "Help",
                    icon: <HelpIcon className={classes.iconSize} />
                  },
                  {
                    name: "Send feedback",
                    icon: <FeedbackIcon className={classes.iconSize} />
                  },
                  ]
                    .map((text, index) => (
                      <ListItem
                        className={classes.item}
                      >
                        <span style={{ marginRight: '30px' }}>

                          {text.icon}
                        </span>

                        <ListItemText primary={text.name} />
                      </ListItem>
                    ))}
                </List>

              </>
          }

        </RSC>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Skeleton />
      </main>
    </>
  );
}
