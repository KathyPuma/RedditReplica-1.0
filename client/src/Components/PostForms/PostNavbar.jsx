import React from 'react';
import PropTypes from 'prop-types';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faPollH, faImage } from '@fortawesome/free-solid-svg-icons'
import { homeStyle } from "../styling/homeStyle";
import { Hidden, Paper, Tabs, Tab, AppBar } from "@material-ui/core/";
import { tabStyles, navBarStyles, a11yProps, TabPanel } from '../styling/PostNavbarStyle'
import PostForm from './PostForm'
import './PostNavbar.css'



TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


export default function PostNavbar(props, { subredditId, setSubredditId }) {
    const navBarStylesTheme = navBarStyles();
    const tabStylesTheme = tabStyles()
    const homeStyleTheme = homeStyle();
    const [currentPostTab, setCurrentPostTab] = React.useState(0);

    const linkIcon = <FontAwesomeIcon icon={faLink} />
    const pollIcon = <FontAwesomeIcon icon={faPollH} />
    const videoIcon = <FontAwesomeIcon icon={faImage} />


    const handleChange = (event, newValue) => {
        setCurrentPostTab(newValue);
    };


    return (
        <Hidden >
            <Paper className={homeStyleTheme.paper}
                style={{
                    background: "#DAE0E6", boxShadow: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "50%"
                }}>

                <div className="postnavbar-header">
                    <div className="postnavbar-header-title" >
                        Create a post

                        </div>
                </div>


                <div className={navBarStylesTheme.root}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={currentPostTab}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="on"
                            indicatorColor="primary"
                            textColor="primary"
                            aria-label="scrollable force tabs example"
                        >

                            <Tab
                                disableRipple={true}

                                classes={{
                                    wrapper: tabStylesTheme.wrapper,
                                }}
                                label="Post" icon={<PostAddIcon />} {...a11yProps(0)} />
                            <Tab
                                disableRipple={true}
                                classes={{
                                    wrapper: tabStylesTheme.wrapper
                                }}
                                label="Video" icon={videoIcon} {...a11yProps(1)} />
                            <Tab
                                disableRipple={true}
                                classes={{
                                    wrapper: tabStylesTheme.wrapper
                                }}
                                label="Link" icon={linkIcon} {...a11yProps(2)} />
                            <Tab
                                disableRipple={true}
                                classes={{
                                    wrapper: tabStylesTheme.wrapper
                                }}
                                label="Poll" icon={pollIcon} {...a11yProps(3)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={currentPostTab} index={0}>
                        <PostForm
                            subredditId={subredditId}
                        />
                    </TabPanel>
                    <TabPanel value={currentPostTab} index={1}>
                        Coming soon..


      </TabPanel>
                    <TabPanel value={currentPostTab} index={2}>
                        Coming soon..
      </TabPanel>
                    <TabPanel value={currentPostTab} index={3}>
                        Coming soon..

      </TabPanel>

                </div>

            </Paper>
        </Hidden>


    );
}

