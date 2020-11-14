/* eslint-disable import/no-anonymous-default-export */

/**
 * Color palette
 */

// Extend type definitions with custom color names
declare module '@material-ui/core/styles/createPalette' {
  interface IPalette {
    dark: Palette['primary'];
    medium: Palette['primary'];
    light: Palette['primary'];
  }
  interface IPaletteOptions {
    dark: PaletteOptions['primary'];
    medium: PaletteOptions['primary'];
    light: PaletteOptions['primary'];
  }
}

export default {
  /**
   * MUI standard colors
   */
  background: {
    default: '#fff',
    paper: '#fff',
  },
  text: {
    primary: '#414042',
  },
  primary: {
    main: '#DC0032',
    light: '#FF0640',
    dark: '#BC002C',
    contrastText: '#fff',
  },
  secondary: {
    main: '#808285',
    light: '#929396',
    dark: '#6D6F72',
    contrastText: '#fff',
  },
  // Danger color in XD
  error: {
    main: '#DC0032',
    light: '#FF0640',
    dark: '#BC002C',
    contrastText: '#fff',
  },
  // Alert color in XD
  warning: {
    main: '#f6b436',
    light: '#f7bc4a',
    dark: '#d89e30',
    contrastText: '#262829',
  },
  // Tertiary color in XD
  info: {
    main: '#98d2dd',
    light: '#a2d7e0',
    dark: '#86b9c2',
    contrastText: '#262829',
  },
  success: {
    main: '#00a300',
    light: '#1aac1a',
    dark: '#008f00',
    contrastText: '#fff',
  },
  // It must be grey not gray!
  // Usege example: theme.palette.grey['700']
  grey: {
    0: '#fff',
    100: '#E6E7E8',
    200: '#e2e3e4',
    300: '#c9cacc',
    400: '#b8babc',
    500: '#97999c',
    600: '#797a7c',
    700: '#54585a',
  },
  /**
   * Custom colors
   *
   * Following colors can be used only directly by using
   * either // useTheme() or makeStyles()
   * /!\  USE THESE ONLY WHEN NECESSARY  /!\
   */
  dark: {
    main: '#54585a',
    light: '#65696b',
    dark: '#4a4d4f',
    contrastText: '#fff',
  },
  medium: {
    main: '#97999c',
    light: '#a1a3a6',
    dark: '#cfcfd0',
    contrastText: '#fff',
  },
  light: {
    main: '#E6E7E8',
    light: '#ededee',
    dark: '#cfcfd0',
    contrastText: '#262829',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
};
