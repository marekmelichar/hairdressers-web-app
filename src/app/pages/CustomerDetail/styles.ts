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
    heading: {
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightRegular,
    },
    accordionDetails: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      '& .MuiInputBase-root': {
        width: '100%',
      },
      '& .MuiInput-underline:before': {
        display: 'none',
      },
      '& .MuiTextField-root': {
        width: '100%',
      },
      '& .MuiInput-underline:after': {
        borderBottom: `1px solid ${theme.palette.success.main}`,
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
    },
    spinner: {
      position: 'absolute',
    },
  }),
);

export default useStyles;
