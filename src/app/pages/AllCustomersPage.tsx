import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core';
import { TableOfPosts } from '../components';
import CommunicationManager from '../libs/communicationManager';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.typography.pxToRem(15),
        paddingRight: theme.typography.pxToRem(15),
      },
    },
  }),
);

const AllCustomersPage: React.FC = () => {
  const classes = useStyles();

  const [data, setData] = useState<any[]>([]);

  const fetchCustomers = async () => {
    try {
      const response = await CommunicationManager.get('/customers');
      setData(response.customers);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <Grid container className={classes.page}>
      <Grid item lg={2} />
      <Grid item lg={8} md sm xs>
        <TableOfPosts data={data} />
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
};

export default AllCustomersPage;
