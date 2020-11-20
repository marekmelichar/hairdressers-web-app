import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStylesForSpinner = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: 30,
  },
  top: {
    color: 'primary',
    animationDuration: '900ms',
    position: 'absolute',
    left: 0,
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 400 : 700],
    position: 'absolute',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
  },
}));

const CustomCircularProgress: React.FC = () => {
  const classes = useStylesForSpinner();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={30}
        thickness={4}
        value={100}
      />
      <CircularProgress
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={30}
        thickness={4}
      />
    </div>
  );
};

export default CustomCircularProgress;
