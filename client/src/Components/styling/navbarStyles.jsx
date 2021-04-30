import {  makeStyles } from '@material-ui/core/styles';


export const navbarStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  logo: {
    height: '50px'
  },
  appBar: {
    backgroundColor: 'white',
    '.MuiAppBar-colorPrimary': {

    },
    '.MuiSvgIcon-root': {
    
    },
  },
  customerMenu: {
    
    'a:link': {
      textDecoration: 'none'
    }
  },
  iconStyling: {
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'flex',
    textDecoration: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  signupButton: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
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
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: ' rgb(224, 224, 224)',
    marginLeft: '4%',
    marginRight:' 4%',
    width: '100%',
    '&:hover': {
      boder: '1px solid blue',
    },
    [theme.breakpoints.up('sm')]: {
      // marginLeft: theme.spacing(1),
      width: '100%',
      // marginLeft: '8px',
      background: ' rgb(224, 224, 224)',
      display: 'flex',
      // marginLeft: '15%',
      marginLeft: '10%',
      marginRight:' 10%',
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'gray',
  },
  inputRoot: {
    color: 'inherit',
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color:'gray',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

}));

