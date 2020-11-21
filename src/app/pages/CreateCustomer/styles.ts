import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      paddingTop: theme.typography.pxToRem(50),
      paddingBottom: theme.typography.pxToRem(50),
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.typography.pxToRem(15),
        paddingRight: theme.typography.pxToRem(15),
      },
    },
    form: {
      width: '100%',
      '& .MuiInputBase-root': {
        width: '100%',
      },
      '& .MuiInputLabel-root.Mui-focused': {
        color: theme.palette.success.main
      },
      '& .MuiTextField-root': {
        width: '100%',
        marginBottom: theme.typography.pxToRem(30),
      },
      '& .MuiInput-underline:after': {
        borderBottom: `2px solid ${theme.palette.success.main}`,
      },
    },
    checkIcon: {
      position: 'absolute',
      right: 0,
      cursor: 'pointer',
      width: theme.typography.pxToRem(32),
      height: theme.typography.pxToRem(32),
      fill: theme.palette.success.main,
    },
    spinnerWrapper: {
      position: 'relative',
      width: theme.typography.pxToRem(32),
      height: theme.typography.pxToRem(32),
      margin: `${theme.typography.pxToRem(50)} auto`,
    },
    spinner: {
      position: 'absolute',
    },
  }),
);

export default useStyles;
