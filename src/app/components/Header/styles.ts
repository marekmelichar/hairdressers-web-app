import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      position: 'relative',
      zIndex: 999,
      backgroundColor: theme.palette.primary.contrastText,
    },
    header: {
      borderBottom: '1px solid',
      borderBottomColor: theme.palette.grey[100],
      paddingTop: theme.typography.pxToRem(10),
      paddingBottom: theme.typography.pxToRem(10),
    },
    menuIconWrapper: {
      paddingTop: theme.typography.pxToRem(4),
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.typography.pxToRem(15),
      },
    },
    appLogoWrapper: {
      paddingTop: theme.typography.pxToRem(4),
      paddingLeft: theme.typography.pxToRem(15),
      margin: 'auto 0',
      '& img': {
        height: theme.typography.pxToRem(60),
        paddingTop: theme.typography.pxToRem(8),
        paddingBottom: theme.typography.pxToRem(4),
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: 0,
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
      },
    },
    menuWrapper: {
      paddingTop: theme.typography.pxToRem(2),
      paddingLeft: theme.typography.pxToRem(25),
      '& a': {
        fontSize: theme.typography.pxToRem(16),
        color: theme.palette.grey[500],
        fontWeight: 500,
        marginRight: theme.typography.pxToRem(15),
      },
      '& .active': {
        color: theme.palette.primary.main,
      },
    },
    mobileMenuDrawerWrapper: {
      '& .MuiDrawer-paper': {
        backgroundColor: theme.palette.primary.main,
      },
    },
    mobileMenuWrapper: {
      width: theme.typography.pxToRem(280),
      paddingTop: theme.typography.pxToRem(15),
      paddingLeft: theme.typography.pxToRem(45),
      backgroundColor: theme.palette.primary.main,
      '& a': {
        fontSize: theme.typography.pxToRem(16),
        color: theme.palette.primary.contrastText,
        marginRight: theme.typography.pxToRem(25),
        fontWeight: 700,
        marginTop: theme.typography.pxToRem(24),
      },
      '& .active': {
        color: theme.palette.primary.contrastText,
      },
    },
  }),
);

export default useStyles;
