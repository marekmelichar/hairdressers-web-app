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
    h1: {
      marginBottom: theme.typography.pxToRem(50),
      textAlign: 'center',
    },
    accordionDetails: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    form: {
      width: '90%',
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
    modalButtonCancel: {
      marginRight: theme.typography.pxToRem(30),
    },
    modalButtonDelete: {
      position: 'absolute',
      textTransform: 'none',
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      '&.MuiButton-contained:hover': {
        backgroundColor: `${theme.palette.error.dark} !important`,
      },
    },
    dialogRoot: {
      '& .MuiDialog-paperWidthSm': {
        padding: theme.typography.pxToRem(30),
      },
      '& .MuiDialogTitle-root': {
        marginBottom: theme.typography.pxToRem(30),
      },
    },
    dialogSpinnerWrapper: {
      position: 'relative',
      width: theme.typography.pxToRem(110),
    },
    dialogSpinner: {
      position: 'absolute',
      top: theme.typography.pxToRem(6),
      left: '50%',
      transform: 'translateX(-50%)',
      width: theme.typography.pxToRem(32),
      height: theme.typography.pxToRem(32),
    },
    deleteIcon: {
      cursor: 'pointer',
      textAlign: 'center',
      marginTop: theme.typography.pxToRem(80),
      marginBottom: theme.typography.pxToRem(80),
      '& svg': {
        fontSize: theme.typography.pxToRem(32),
        fill: theme.palette.error.main,
      },
    },
  }),
);

export default useStyles;
