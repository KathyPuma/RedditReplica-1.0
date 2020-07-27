import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import { Button, Dialog, IconButton, Typography } from '@material-ui/core';
import LoginPage from '../Account/LoginPage'
import SignupPage from '../Account/SignupPage'



const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),

    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],

    },

});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    console.log("props", props)
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>

            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),

    },
}))(MuiDialogActions);




const modalStyles = () => ({
    paper: { minWidth: "77700px" }
    // paperWidthSm: {
    //     height: '50%',
    //     width: '50%'
    // },
});


const modalStyle = modalStyles();
export default function CustomizedDialogs({ buttonName, user }) {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {buttonName}

            </Button>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                disableBackdropClick
                classes={{paperWidthSm : modalStyle.paperWidthSm}}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}
                >

                </DialogTitle>
                {user === 'login' ? (
                    <div>
                        <LoginPage />
                    </div>
                ) : (
                        <div> <SignupPage /></div>
                    )}
              
            </Dialog>
        </div>
    );
}