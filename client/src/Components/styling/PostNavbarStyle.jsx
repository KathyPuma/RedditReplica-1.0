import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

export const tabStyles = makeStyles({
    root: {
        '&.Mui-disabled': {
            width: "0%",
            opacity: "0.5",

        },
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
    },
});

export const navBarStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        width: 'max-content',
        '&.Mui-disabled': {
            width: "0%",
            opacity: "0.5",

        },

    },
    
    

}));


export function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
};


export function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
};