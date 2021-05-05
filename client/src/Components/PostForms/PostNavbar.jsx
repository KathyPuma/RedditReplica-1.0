import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faPollH, faImage } from '@fortawesome/free-solid-svg-icons'
import PostForm from './PostForm'
import { tabStyles, navBarStyles, a11yProps, TabPanel } from '../styling/PostNavbarStyle'


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


export default function PostNavbar(props) {
    const navBarStylesTheme = navBarStyles();
    const tabStylesTheme = tabStyles()
    const [value, setValue] = React.useState(0);
    const [subredditId, setSubredditId] = useState(null)


    const linkIcon = <FontAwesomeIcon icon={faLink} />
    const pollIcon = <FontAwesomeIcon icon={faPollH} />
    const videoIcon = <FontAwesomeIcon icon={faImage} />

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const getSubredditId = async () => {
            try {
                const allSubreddits = await axios.get(`/api/subreddit/subredditName/${props.location.pathname.split('/')[2]}`)
                let subredditId = allSubreddits.data.payload.subreddit_id
                setSubredditId(subredditId)
            } catch (err) {
                console.log("ERROR", err)

            }

        }
        getSubredditId()
    }, [])


    return (
        <div className={navBarStylesTheme.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab
                        disableRipple='true'
                        classes={{
                            wrapper: tabStylesTheme.wrapper
                        }}
                        label="Post" icon={<PostAddIcon />} {...a11yProps(0)} />
                    <Tab
                        disableRipple='true'
                        classes={{
                            wrapper: tabStylesTheme.wrapper
                        }}
                        label="Video" icon={videoIcon} {...a11yProps(1)} />
                    <Tab
                        disableRipple='true'
                        classes={{
                            wrapper: tabStylesTheme.wrapper
                        }}
                        label="Link" icon={linkIcon} {...a11yProps(2)} />
                    <Tab
                        disableRipple='true'
                        classes={{
                            wrapper: tabStylesTheme.wrapper
                        }}
                        label="Poll" icon={pollIcon} {...a11yProps(3)} />

                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <PostForm
                    subredditId={subredditId}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
             Coming soon.. 


      </TabPanel>
            <TabPanel value={value} index={2}>
            Coming soon.. 
      </TabPanel>
            <TabPanel value={value} index={3}>
            Coming soon.. 

      </TabPanel>

        </div>
    );
}
