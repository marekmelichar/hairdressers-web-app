/**
 * Alert box with icon, text and close button
 * Use itside of <Snackbar> component
 *
 * severity can have following values:
 *  - info
 *  - success
 *  - warning
 *  - error
 */

import React from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

const Alert: React.FC<AlertProps> = ({ children, severity, onClose }: AlertProps) => (
  <MuiAlert elevation={6} variant="filled" severity={severity} onClose={onClose}>
    {children}
  </MuiAlert>
);

export default Alert;
