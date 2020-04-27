import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import {makeStyles} from "@material-ui/core/styles";
import DropDown from './DropDown'


const useStyles = makeStyles(theme => ({
    typo:
    {
        fontSize: 16,
        [theme.breakpoints.down(1086)]: {
            fontSize: 12,
        },
    },
    title:
    {
        paddingRight: 0,
        fontSize: 17,
        fontWeight: 500,
        margin: 0,
        [theme.breakpoints.down(1086)]: {
            fontSize: 14,
        },
    },
    box:
    {
        [theme.breakpoints.up(1086)]:
        {
            width: '25%', height: '60%'
        },
        lineHeight: '0', margin: '0',
        [theme.breakpoints.down(500)]: {
            width: '100%',
            paddingBottom: 0
        },
        [theme.breakpoints.between(500, 769)]: {
            width: '50%',
            paddingBottom: 0
        },
        [theme.breakpoints.between(769, 1086)]: {
            width: '33.3%',
            paddingBottom: 0
        },
    },

    caption:
    {
        fontSize: 13,
        [theme.breakpoints.down(1086)]: {
            fontSize: 9,
        },
    },
}));



const data = [
    {
        src:
            'https://i.ytimg.com/vi/SB-qEYVdvXA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDu0kbeoH-vKDnETmCYJpL7kJdwdQ',
        title: 'So many cute kittens videos compilation 2018',
        channel: 'Chris Stuckmann',
        views: '2.2 M views',
        createdAt: '10 months ago',
        logo: 'https://yt3.ggpht.com/a-/AOh14GgSPRJEmOcKT7D1Au6tyJiOY-1Ijoz7Z5g4Kg=s68-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        src:
            'https://i.ytimg.com/vi/9pthvhH2-eg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD1euPqtW9Qm-eUVXP4nBp7pWlurw',
        title: 'Pet Story',
        channel: 'Cartoon Channel',
        views: '2.2M views',
        createdAt: '11 months ago',
        logo: 'https://yt3.ggpht.com/a-/AOh14GgSPRJEmOcKT7D1Au6tyJiOY-1Ijoz7Z5g4Kg=s68-c-k-c0x00ffffff-no-rj-mo'

    },
    {
        src:
            'https://i.ytimg.com/vi/HDnXpxb5S9M/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYp8GNll9nPpXIx069WerBhWiU2A',
        title: 'Frozen Full Movie HD',
        channel: 'Frozen Channel',
        views: '2.2 M views',
        createdAt: '1 Year ago',
        logo: 'https://yt3.ggpht.com/a-/AOh14GgSPRJEmOcKT7D1Au6tyJiOY-1Ijoz7Z5g4Kg=s68-c-k-c0x00ffffff-no-rj-mo'

    },
    {
        src:
            'https://i.ytimg.com/vi/DwtPm2WHXnQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCDhb1wN9qyTFhHnduQdUuvslDIDw',
        title: 'Frozen 2 Full(Trailor))',
        channel: 'Frozen Channel',
        views: '2.2 M views',
        createdAt: '1 months ago',
        logo: 'https://yt3.ggpht.com/a-/AOh14Gio43tCzQoSVBEnMe9fk3KrSp2qQ_XF-dpEaQ=s68-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        src:
            'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
        title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
        channel: 'Don Diablo',
        views: '396 k views',
        createdAt: 'a week ago',
        logo: 'https://yt3.ggpht.com/a-/AOh14Gio43tCzQoSVBEnMe9fk3KrSp2qQ_XF-dpEaQ=s68-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        src:
            'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
        title: 'Queen - Greatest Hits',
        channel: 'Queen Official',
        views: '40 M views',
        createdAt: '3 years ago',
        logo: 'https://yt3.ggpht.com/a-/AOh14Gio43tCzQoSVBEnMe9fk3KrSp2qQ_XF-dpEaQ=s68-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        src:
            'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        channel: 'Calvin Harris',
        views: '130 M views',
        createdAt: '10 months ago',
        logo: 'https://yt3.ggpht.com/a-/AOh14Gio43tCzQoSVBEnMe9fk3KrSp2qQ_XF-dpEaQ=s68-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        src:
            'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
        title: 'Queen - Greatest Hits',
        channel: 'Queen Official',
        views: '40 M views',
        createdAt: '3 years ago',
        logo: 'https://yt3.ggpht.com/a-/AOh14Gio43tCzQoSVBEnMe9fk3KrSp2qQ_XF-dpEaQ=s68-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        src:
            'https://i.ytimg.com/vi/Epal9RArKHQ/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBHbxmvhhwDZTIJz_sGsqYFnz3fQA',
        title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        channel: 'Calvin Harris',
        views: '130 M views',
        createdAt: '10 months ago',
        logo: 'https://yt3.ggpht.com/a-/AOh14Gio43tCzQoSVBEnMe9fk3KrSp2qQ_XF-dpEaQ=s68-c-k-c0x00ffffff-no-rj-mo'
    },

];

function Media(props) {
    const { loading = false } = props;
    const classes = useStyles();

    return (
        <Grid container wrap="wrap" lineHeight='0' height='0' fontSize='0'>

            {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
                <Box key={index} marginRight={0.5} paddingBottom='20px' my={2} className={classes.box} >
                    {item ? (
                        <img style={{ height: '60%', width: '95%' }} alt={item.title} src={item.src} />
                    ) : (
                            <Skeleton variant="circle" width={210} height={0} />
                        )}

                    {item ? (
                        <Box pr={1} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'inline-flex' }}>
                                <div>
                                    <img src={item.logo} style={{ width: '46px', height: '46px', marginTop: 9, borderRadius: '50%', alignSelf: 'flex-start' }} />
                                </div>
                                <div style={{ marginLeft: 10 }}>

                                    <Typography gutterBottom variant="body1" style={{ overflow: 'hidden', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', display: '-webkit-box' }} className={classes.title}>
                                        {item.title}

                                    </Typography>
                                    <Typography display="block" variant="caption" color="textSecondary" className={classes.typo}>
                                        {item.channel}
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary" className={classes.caption}>
                                        {`${item.views} • ${item.createdAt}`}
                                    </Typography>
                                </div>
                            </div>

                            <DropDown />
                        </Box>
                    ) : (
                            <Box pt={0.5}>
                                <Skeleton />
                                <Skeleton width="100%" />
                            </Box>
                        )}
                </Box>
            ))}
        </Grid>
    );
}

Media.propTypes = {
    loading: PropTypes.bool,
};

export default function YouTube() {
    return (
        <Box overflow="hidden" >
            <h4>Recommended
            </h4>
            <Media loading />
            <Media />
        </Box>
    );
}
