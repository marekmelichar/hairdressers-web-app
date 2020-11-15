import React, { useEffect, useState } from 'react';
// import React, { useCallback, useEffect, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
// import { snackbarMessageVar } from '../cache';
// import { IMessage } from '../core';
import { TableOfPosts } from '../components';
// import classes from '*.module.css';
import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core';

// const routes = {
//   AllCustomersPage: process.env.REACT_APP_ROUTE_ALL_CUSTOMERS,
//   CreateCustomerPage: process.env.REACT_APP_ROUTE_CREATE_CUSTOMER,
//   EditCustomerPage: process.env.REACT_APP_ROUTE_EDIT_CUSTOMER,
// };

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.typography.pxToRem(15),
        paddingRight: theme.typography.pxToRem(15),
      },
    },
  })
);

const AllCustomersPage: React.FC = () => {
  const classes = useStyles();
  // const history = useHistory();

  const [data, setData] = useState<any[]>([]);

  // const handleMessage = useCallback((mes: IMessage) => {
  //   snackbarMessageVar({ ...snackbarMessageVar(), ...mes });
  // }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_ROOT_URL}/customers`
      );
      // handle success
      setData(response.data.customers);
    } catch (error) {
      // handle error
      console.log('fetchCustomers', error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // const handleDetailClick = (id: number) => {
  //   return history.push(`${routes.AllCustomersPage}/${id}`);
  // };

  // const handleEditClick = (id: number) => {
  //   return history.push(`${routes.EditCustomerPage}/${id}`);
  // };

  // const handleDeleteClick = (name: string, id: number) => {
  //   // if (window.confirm(`Opravdu vymazat ${name}?`)) {
  //   //   // They clicked Yes
  //   //   axios
  //   //     .delete(
  //   //       'https://janamelicharova.cz/wp-json/hairdressers/v1/customers',
  //   //       { data: { id } }
  //   //     )
  //   //     .then((responseDelete) => {
  //   //       if (responseDelete.data.row_deleted) {
  //   //         return fetchCustomers();
  //   //       }
  //   //     });
  //   // } else {
  //   //   console.log('They clicked no');
  //   // }

  //   handleMessage({
  //     error: false,
  //     success: true,
  //     messageId: 'change.password.success.message',
  //     locationName: 'change-password-success',
  //   });
  // };

  return (
    <Grid container={true} className={classes.page}>
      <Grid item={true} lg={2} />
      <Grid item={true} lg={8} md={true} sm={true} xs={true}>
        <TableOfPosts data={data} />
      </Grid>
      <Grid item={true} lg={2} />
    </Grid>
  );
};

export default AllCustomersPage;