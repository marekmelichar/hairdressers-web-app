/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import { Snackbar } from '@material-ui/core';
import { useFormatMessage } from 'react-intl-hooks';
import { Color } from '@material-ui/lab';
import { IMessage } from '../../core';
import Alert from '../Alert';

interface IProps {
  message: IMessage;
  severityIndex: number;
  locationName?: string;
}

/**
 * Custom universal Snackbar
 * @param message IMessage object
 * @param severityIndex number, ["error", "success", "warning", "info"]
 * @param locationName string, Name of location where Snackar is imported,
 * for custom data-cy prop, default is "general"
 */
const CustomSnackBar: React.FC<IProps> = (props: IProps) => {
  const t = useFormatMessage();
  const { message, severityIndex, locationName = 'general' } = props;
  const [snackVisible, setSnackVisible] = useState<boolean>(true);
  const [severityOptions] = useState<Color[]>(['error', 'success', 'warning', 'info']);
  const [severity, setSeverity] = useState<Color>('error');
  const { email } = message;

  const handleSnackClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackVisible(false);
  };

  useEffect(() => {
    setSeverity(severityOptions[severityIndex]);
    setSnackVisible(true);
  }, [severityIndex, severityOptions, message]);

  return (
    <div>
      <Snackbar
        data-cy={`${locationName}-snackbar-${severity}`}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={snackVisible}
        autoHideDuration={8000}
        onClose={handleSnackClose}
      >
        <Alert
          data-cy={`${locationName}-snackbar-alert`}
          onClose={handleSnackClose}
          severity={severity}
        >
          {message.messageId &&
            t({ id: message.messageId, defaultMessage: 'Unknown error' }, { email })}
          {message.messageText && message.messageText}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomSnackBar;
