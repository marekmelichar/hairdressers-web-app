import React, { useState } from 'react';
import { Box, Drawer, Grid } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useFormatMessage } from 'react-intl-hooks';
import { Link, NavLink } from 'react-router-dom';
// import { Logo } from '../../components';
import { useStyles } from './styles';

declare global {
  // tslint:disable-next-line
  interface Window {
    ROUTE_EDITOR: string;
    ROUTE_ADMINISTRATION: string;
  }
}

const routes = {
  editor: window.ROUTE_EDITOR,
  administration: window.ROUTE_ADMINISTRATION,
};

const Header: React.FC = () => {
  const classes = useStyles();
  const t = useFormatMessage();
  // const userAuth = userAuthentication();

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleToggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  // const renderNavigation = () => {
  //   return (
  //     <Grid
  //       container={true}
  //       justify='flex-start'
  //       className={classes.menuWrapper}
  //     >
  //       <NavLink to={`${routes.editor}`} exact={true}>
  //         {t({ id: 'Header.nav.editor', defaultMessage: 'Editor' })}
  //       </NavLink>
  //       <NavLink to={`${routes.administration}`} exact={true}>
  //         {t({
  //           id: 'Header.nav.administration',
  //           defaultMessage: 'Administrace',
  //         })}
  //       </NavLink>
  //     </Grid>
  //   );
  // };

  const renderMobileNavigation = () => {
    return (
      <Grid
        container={true}
        justify='flex-start'
        direction='column'
        className={classes.mobileMenuWrapper}
      >
        <NavLink
          to={`${routes.editor}`}
          exact={true}
          onClick={handleToggleMobileMenu}
        >
          {t({ id: 'Header.nav.editor', defaultMessage: 'Editor' })}
        </NavLink>
      </Grid>
    );
  };

  return (
    <>
      <Grid
        container={true}
        justify='space-between'
        alignItems='center'
        className={classes.root}
      >
        <Grid item={true} lg={2} />
        <Grid
          item={true}
          xs={true}
          sm={true}
          md={true}
          lg={true}
          className={classes.header}
        >
          <Grid container={true} justify='space-between' alignItems='center'>
            <Grid item={true} md={2}>
              <Grid container={true} justify='flex-start' alignItems='center'>
                <Box
                  display={{ xs: 'block', md: 'none' }}
                  className={classes.menuIconWrapper}
                  onClick={handleToggleMobileMenu}
                >
                  <Menu />
                </Box>
                <Box className={classes.appLogoWrapper}>
                  <Link to={`${routes.editor}`}>
                    {/* <Logo /> */}
                    LOGO
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item={true} lg={2} />
      </Grid>
      <Drawer
        className={classes.mobileMenuDrawerWrapper}
        anchor='left'
        open={openMobileMenu}
        onClose={handleToggleMobileMenu}
      >
        {renderMobileNavigation()}
      </Drawer>
    </>
  );
};

export default Header;
