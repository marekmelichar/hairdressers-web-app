import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles, Grid, Box } from '@material-ui/core';
import { TableOfPosts } from '../../components';
import CommunicationManager from '../../libs/communicationManager';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

const routes = {
  CreateCustomerPage: process.env.REACT_APP_ROUTE_CREATE_CUSTOMER,
};

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
    addPost: {
      '& a': {
        borderRadius: '50%',
        border: `1px solid ${theme.palette.success.main}`,
        width: theme.typography.pxToRem(48),
        height: theme.typography.pxToRem(48),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        float: 'right',
        color: theme.palette.success.main,
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
        <Box data-cy="addPostIcon" className={classes.addPost}>
          <Link to={`${routes.CreateCustomerPage}`}>
            <AddIcon />
          </Link>
        </Box>
        <TableOfPosts data={data} />
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
};

export default AllCustomersPage;
