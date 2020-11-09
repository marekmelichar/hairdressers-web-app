import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import AllCustomersPage from './AllCustomersPage';
import CreateCustomerPage from './CreateCustomerPage';
import EditCustomerPage from './EditCustomerPage';
import CustomerDetailPage from './CustomerDetailPage';
import NotFoundPage from './NotFoundPage';

const routes = {
  AllCustomersPage: process.env.REACT_APP_ROUTE_ALL_CUSTOMERS,
  CreateCustomerPage: process.env.REACT_APP_ROUTE_CREATE_CUSTOMER,
  EditCustomerPage: process.env.REACT_APP_ROUTE_EDIT_CUSTOMER,
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={routes.AllCustomersPage}
          component={AllCustomersPage}
        />
        <Route
          exact
          path={routes.CreateCustomerPage}
          component={CreateCustomerPage}
        />
        <Route
          exact
          path={`${routes.EditCustomerPage}/:id`}
          component={EditCustomerPage}
        />
        <Route
          exact
          path={`${routes.AllCustomersPage}/:id`}
          component={CustomerDetailPage}
        />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
