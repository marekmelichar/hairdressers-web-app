import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { IntlProvider } from 'react-intl-hooks';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import HomePage from './pages/Home/HomePage';
import AllCustomersPage from './pages/AllCustomers/AllCustomersPage';
import CreateCustomerPage from './pages/CreateCustomer/CreateCustomerPage';
import EditCustomerPage from './pages/EditCustomer/EditCustomerPage';
import CustomerDetailPage from './pages/CustomerDetail/CustomerDetailPage';
import NotFoundPage from './pages/404/NotFoundPage';
import { Header, CustomSnackBar } from './components';
import { locales, TLocale } from './i18n';
import './App.css';
import theme from './theme';
import { snackbarMessageVar } from './cache';

const routes = {
  HomePage: process.env.REACT_APP_ROUTE_HOME,
  AllCustomersPage: process.env.REACT_APP_ROUTE_ALL_CUSTOMERS,
  CreateCustomerPage: process.env.REACT_APP_ROUTE_CREATE_CUSTOMER,
  EditCustomerPage: process.env.REACT_APP_ROUTE_EDIT_CUSTOMER,
};

const App: React.FC = () => {
  const snackbarMessage = useReactiveVar(snackbarMessageVar);
  const currentLocale: TLocale = 'cs';

  return (
    <BrowserRouter>
      <IntlProvider locale={currentLocale} messages={locales[currentLocale]} defaultLocale="cs">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Switch>
            <Route exact path={routes.HomePage} component={HomePage} />
            <Route exact path={routes.AllCustomersPage} component={AllCustomersPage} />
            <Route exact path={routes.CreateCustomerPage} component={CreateCustomerPage} />
            <Route exact path={`${routes.EditCustomerPage}/:id`} component={EditCustomerPage} />
            <Route exact path={`${routes.AllCustomersPage}/:id`} component={CustomerDetailPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
          {snackbarMessage.error && (
            <CustomSnackBar
              message={snackbarMessage}
              severityIndex={0}
              locationName={snackbarMessage.locationName}
            />
          )}
          {snackbarMessage.success && (
            <CustomSnackBar
              message={snackbarMessage}
              severityIndex={1}
              locationName={snackbarMessage.locationName}
            />
          )}
        </ThemeProvider>
      </IntlProvider>
    </BrowserRouter>
  );
};

export default App;
