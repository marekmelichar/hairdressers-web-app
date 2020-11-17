import React, { useState } from 'react';
import { Box, Drawer, Grid } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useFormatMessage } from 'react-intl-hooks';
import { Link, NavLink } from 'react-router-dom';
// import { Logo } from '../../components';
import useStyles from './styles';

const routes = {
  AllCustomersPage: process.env.REACT_APP_ROUTE_ALL_CUSTOMERS,
};

const Header: React.FC = () => {
  const classes = useStyles();
  const t = useFormatMessage();

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleToggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const renderNavigation = () => {
    return (
      <Box className={classes.menuWrapper}>
        <NavLink to={`${routes.AllCustomersPage}`} exact>
          {t({ id: 'Header.nav.customers', defaultMessage: 'Zákazníci' })}
        </NavLink>
      </Box>
    );
  };

  const renderMobileNavigation = () => {
    return (
      <Grid container justify="flex-start" direction="column" className={classes.mobileMenuWrapper}>
        <NavLink to={`${routes.AllCustomersPage}`} exact onClick={handleToggleMobileMenu}>
          {t({ id: 'Header.nav.customers', defaultMessage: 'Zákazníci' })}
        </NavLink>
      </Grid>
    );
  };

  return (
    <>
      <Grid
        data-cy="header"
        container
        justify="space-between"
        alignItems="center"
        className={classes.root}
      >
        <Grid item lg={2} />
        <Grid item xs sm md lg className={classes.header}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item md={2}>
              <Grid container justify="flex-start" alignItems="center">
                <Box
                  display={{ xs: 'block', md: 'none' }}
                  className={classes.menuIconWrapper}
                  onClick={handleToggleMobileMenu}
                >
                  <Menu />
                </Box>
                <Box className={classes.appLogoWrapper}>
                  <Link to={`${routes.AllCustomersPage}`}>
                    {/* <Logo /> */}
                    LOGO
                  </Link>
                </Box>
              </Grid>
            </Grid>
            {renderNavigation()}
          </Grid>
        </Grid>
        <Grid item lg={2} />
      </Grid>
      <Drawer
        className={classes.mobileMenuDrawerWrapper}
        anchor="left"
        open={openMobileMenu}
        onClose={handleToggleMobileMenu}
      >
        {renderMobileNavigation()}
      </Drawer>
    </>
  );
};

export default Header;
