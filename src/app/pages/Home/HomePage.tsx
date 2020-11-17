import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      textAlign: 'center',
      paddingTop: theme.typography.pxToRem(50),
      paddingBottom: theme.typography.pxToRem(50),
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.typography.pxToRem(15),
        paddingRight: theme.typography.pxToRem(15),
      },
    },
  }),
);

const routes = {
  AllCustomersPage: process.env.REACT_APP_ROUTE_ALL_CUSTOMERS,
};

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.page}>
    <Grid item lg={2} />
    <Grid item lg={8} md sm xs>
      <Link to={`${routes.AllCustomersPage}`}>Vstoupit</Link>
    </Grid>
    <Grid item lg={2} />
  </Grid>
  );
};

export default HomePage;
