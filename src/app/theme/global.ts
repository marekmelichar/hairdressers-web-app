/* eslint-disable import/no-anonymous-default-export */

/**
 * Global CSS overrides
 *
 * Use these to globaly add styles to html, body, etc.
 */

import palette from './palette';

export default {
  MuiCssBaseline: {
    '@global': {
      body: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        backgroundColor: palette.background.default,
        color: palette.text.primary,
      },
    },
  },
};
