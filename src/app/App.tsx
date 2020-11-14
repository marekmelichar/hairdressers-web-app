import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { IntlProvider } from 'react-intl-hooks';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllCustomersPage from './pages/AllCustomersPage';
import CreateCustomerPage from './pages/CreateCustomerPage';
import EditCustomerPage from './pages/EditCustomerPage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import { Header } from './components';
import { locales, TLocale } from './i18n';
import './App.css';
import theme from './theme';

const routes = {
  HomePage: process.env.REACT_APP_ROUTE_HOME,
  AllCustomersPage: process.env.REACT_APP_ROUTE_ALL_CUSTOMERS,
  CreateCustomerPage: process.env.REACT_APP_ROUTE_CREATE_CUSTOMER,
  EditCustomerPage: process.env.REACT_APP_ROUTE_EDIT_CUSTOMER,
};

const App = () => {
  const currentLocale: TLocale = 'cs';

  return (
    <BrowserRouter>
      <IntlProvider
        locale={currentLocale}
        messages={locales[currentLocale]}
        defaultLocale='cs'
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Switch>
            <Route exact path={routes.HomePage} component={HomePage} />
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
        </ThemeProvider>
      </IntlProvider>
    </BrowserRouter>
  );
};

export default App;
