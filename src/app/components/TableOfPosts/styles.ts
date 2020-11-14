import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      marginTop: theme.typography.pxToRem(40),
      width: '100%',
      overflowX: 'hidden',
      '& thead': {
        backgroundColor: theme.palette.grey['100'],
      },
      '& .MuiTableCell-root': {
        padding: `${theme.typography.pxToRem(13)} ${theme.typography.pxToRem(16)}`,
      },
      [theme.breakpoints.down('xs')]: {
        overflowX: 'scroll',
        display: 'block',
      },
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
    tableRow: {
      cursor: 'pointer',
      '& .MuiTableCell-root': {
        borderTop: `1px solid ${theme.palette.grey['100']}`,
      },
      '& th': {
        borderLeft: `1px solid ${theme.palette.grey['100']}`,
      },
      '& td:last-child': {
        borderRight: `1px solid ${theme.palette.grey['100']}`,
      },
    },
    spacer: {
      height: theme.typography.pxToRem(10),
    },
  }),
);
