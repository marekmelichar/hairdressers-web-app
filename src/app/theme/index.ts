/**
 * MUI custom light theme
 *
 * See https://material-ui.com/
 */

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

import global from './global';
import palette from './palette';
import typography from './typography';

// Create custom theme
const theme = createMuiTheme({
  palette,
  typography,
  overrides: {
    ...global,
  },
});

// Generate responsive typography based on visual breakpoints
const extendedTheme = responsiveFontSizes(theme, {});

export default extendedTheme;
