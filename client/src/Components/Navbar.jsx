import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { faReddit, faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import { AppBar, InputBase, Divider, Menu, MenuItem, Typography, IconButton, Toolbar } from '@material-ui/core';
import SignUpButton from './MaterialUiComponents/Button'
import InputOutlinedIcon from '@material-ui/icons/InputOutlined';
import SearchIcon from '@material-ui/icons/Search';
import customTheme from './styling/customTheme.jsx';
import { navbarStyles } from './styling/navbarStyles.jsx';
import { logoutUser } from '../redux/actions/userActions';
import store from '../redux/store/store'
import '../Components/Navbar.css'


function Navbar() {
    const state = store.getState();
    const classes = navbarStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const history = useHistory();
    //   const logo = require('./carry1.png')


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




    const menuId = "primary-search-account-menu";


    const logUserOut = async () => {
        await axios.get('/auth/logout')
        localStorage.setItem('store', JSON.stringify({
            user: {
                loggedIn: false, user: [], message: ""
            }
        }))
        // setTimeout(() => {
        //     history.push('/')
        // }, 10)
    }


    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            className={classes.iconStyling}
            style={{ zIndex: 9001, top: '35px' }}
        >
            {!state.user.loggedIn ? (
                <div>
                    <MenuItem onClick={handleMenuClose} className={classes.customerMenu}>
                        {/* <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: customTheme.palette.secondary.dark,
              }}
            >
              Login
            </Link> */}
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose} className={classes.customerMenu}>
                        <Link
                            to={`/user/ana`}
                            style={{
                                textDecoration: "none",
                                color: customTheme.palette.secondary.dark,
                            }}
                        >
                            Hello
            </Link>
                    </MenuItem>
                    <Divider light />
                    <MenuItem>
                        <InputOutlinedIcon className='inputOutlinedIcon' />

                        <SignUpButton buttonName={'Log In / Sign Up'}
                            user="login"
                            className='login-signup-button'
                        />
                    </MenuItem>

                </div>
            ) : (
                    <div>

                        <MenuItem onClick={handleMenuClose} className={classes.customerMenu}>
                            <Link
                                to={`/user/${state.user.user.username}`}
                                style={{
                                    textDecoration: "none",
                                    color: "Black",
                                    display: "flex",
                                    columnGap: '6%'

                                }}
                            >
                                <FontAwesomeIcon
                                    className='dropDown-userIcon'
                                    icon={faUser}
                                    style={{
                                        backgroundColor: "#808080c2",
                                        color: "white",


                                        padding: " 3px",


                                        height: '.74em'
                                    }} />
                                My Profile

                                </Link>
                        </MenuItem>
                        <Divider light />

                        <MenuItem onClick={handleMenuClose} className={classes.customerMenu}>
                            <Link
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    color: customTheme.palette.secondary.dark,
                                }}
                                onClick={logUserOut}

                            >
                                Logout
              </Link>
                        </MenuItem>
                    </div>
                )}
        </Menu>
    );


    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 9003,
                width: "100%",
            }}
        >



            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>



            <Divider light />
            <MenuItem>

                <SignUpButton buttonName={'Log In / Sign Up'}
                    user="login"
                    className={'login-button'}

                />





            </MenuItem>






        </Menu>
    );

    return (
        <div
            className={classes.grow}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 1200,
                width: "100%",
            }}
        >
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: customTheme.palette.secondary.dark,
                        }}
                    >
                        <Typography className={classes.title} variant="h6" noWrap>
                            <Link className="reddit-link" to="/">
                                <div className="reddit-home">
                                    <FontAwesomeIcon
                                        className='reddit-logo'
                                        icon={faReddit} />

                                </div>
                                <p className="reddit-name">reddit</p>
                            </Link>
                        </Typography>
                    </Link>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>

                        {!state.user.loggedIn ? (
                            <div className='navbarButtons'>
                                <SignUpButton
                                    buttonName={'LOG IN'}
                                    user="login"
                                    className={'login-button'}

                                />


                                <SignUpButton
                                    buttonName={'SIGN UP'}
                                    user='signup'
                                    className={'signup-button'}

                                />
                            </div>


                        ) : (<div> </div>)}

                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            style={{ zIndex: '2' }}
                        >
                            <div className="dropDown-menu">
                                <FontAwesomeIcon
                                    className='dropDown-userIcon'
                                    icon={faUser} />
                                <FontAwesomeIcon
                                    className='dropDown-arrowIcon'
                                    icon={faSortDown} />

                            </div>
                        </IconButton>

                    </div>

                    <div className={classes.sectionMobile}>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            style={{ zIndex: '2' }}
                        >
                            <div className="dropDown-menu">
                                <FontAwesomeIcon
                                    className='dropDown-userIcon'
                                    icon={faUser} />
                                <FontAwesomeIcon
                                    className='dropDown-arrowIcon'
                                    icon={faSortDown} />

                            </div>
                        </IconButton>

                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div >
    );
}

export default Navbar;

