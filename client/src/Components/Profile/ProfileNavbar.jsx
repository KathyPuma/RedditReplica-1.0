import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { HashRouter, Route, Link, useLocation, Redirect } from "react-router-dom";
import Overview from "./Overview";
import Posts from "./Posts";
import Upvoted from "./Upvoted";
import Downvoted from "./Downvoted";
import Comments from "./Comments";
import "./ProfileNavbar.css"


function TabPanel(props) {
    const { children, value, active, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== active}
            id={`tabs-router-${index}`}
            aria-labelledby={`tabs-router-${index}`}
            {...other}
        >
            {value === active && (
                <Box p={5}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `tabs-router-${index}`,
        "aria-controls": `tabs-router-${index}`
    };
}


function MyTabs({ username }) {
    const location = useLocation();
    let currentTab = location.pathname;

    return (
        <div>
            <AppBar position="static">
                <Tabs value={currentTab}
                    variant="fullWidth"
                    TabIndicatorProps={{ style: { background: "#0079d3", color: "pink" } }}
                    style={{
                        "backgroundColor": "white",
                        "color": "black",
                    }}

                >

                    <Tab
                        label="OVERVIEW"
                        value="/overview"
                        to="/overview"
                        style = {{"display": "flex"}}
                        disableFocusRipple="true"
                        disableRipple="true"
                        component={Link}
                        {...a11yProps(0)}
                    />
                    <Tab
                        label="POSTS"
                        value="/posts"
                        to="/posts"
                        disableFocusRipple="true"
                        disableRipple="true"

                        component={Link}
                        {...a11yProps(1)}
                    />
                    <Tab
                        label="COMMENTS"
                        value="/comments"
                        to="/comments"
                        disableFocusRipple="true"
                        disableRipple="true"
                        component={Link}
                        {...a11yProps(2)}
                    />
                    <Tab
                        label="UPVOTED"
                        value="/upvoted"
                        to="/upvoted"
                        disableFocusRipple="true"
                        disableRipple="true"
                        component={Link}
                        {...a11yProps(3)}
                    />
                    <Tab

                        label="DOWNVOTED"
                        value="/downvoted"
                        to="/downvoted"
                        disableFocusRipple="true"
                        disableRipple="true"
                        component={Link}
                        {...a11yProps(4)}
                    />
                </Tabs>

            </AppBar>
            <TabPanel value={currentTab} active="/overview" index={0}>
                <Overview
                    username={username}
                />
            </TabPanel>
            <TabPanel value={currentTab} active="/posts" index={1}>
                <Posts
                    username={username}
                />
            </TabPanel>
            <TabPanel value={currentTab} active="/comments" index={2}>
                <Comments
                    username={username}
                />
            </TabPanel>
            <TabPanel value={currentTab} active="/upvoted" index={3}>
                <Upvoted
                    username={username}
                />
            </TabPanel>
            <TabPanel value={currentTab} active="/downvoted" index={4}>
                <Downvoted username={username}
                />
            </TabPanel>

        </div>
    );
}

export default function TabsRouter() {
    return (
        <div>
            <HashRouter>
                <Route exact path="/">
                    <Redirect to="/overview" />
                </Route>
                <MyTabs />
            </HashRouter>
        </div>
    );
}
