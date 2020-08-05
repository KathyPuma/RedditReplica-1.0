import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'gray',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#EFEFED',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#EFEFED',
        width: '100%',
      },
      '&:hover fieldset': {
        borderColor: '#EFEFED',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#EFEFED',
      },
    },
  },
})(TextField);





export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));



