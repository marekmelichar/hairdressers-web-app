import React, { FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import { useFormatMessage } from 'react-intl-hooks';
import { Box, Grid, TextField } from '@material-ui/core';
import CommunicationManager from '../../libs/communicationManager';
import { snackbarMessageVar } from '../../cache';
import { IMessage } from '../../core';
import CheckIcon from '@material-ui/icons/Check';
import { CustomCircularProgress } from '../../components';

const routes = {
  AllCustomersPage: process.env.REACT_APP_ROUTE_ALL_CUSTOMERS,
};

const CreateCustomerPage: React.FC = () => {
  const classes = useStyles();
  const t = useFormatMessage();
  const history = useHistory();

  const [state, setState] = useState({
    color: '',
    colorCode: '',
    comments: '',
    name: '',
    price: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isNameValid, setIsNameValid] = useState<boolean>(true);

  const handleMessage = useCallback((mes: IMessage) => {
    snackbarMessageVar({ ...snackbarMessageVar(), ...mes });
  }, []);

  const savePost = async () => {
    const data = {
      color: state.color,
      colorCode: state.colorCode,
      comments: state.comments,
      name: state.name,
      price: state.price,
    };
    try {
      const response = await CommunicationManager.post('/customers', data);
      if (response) {
        handleMessage({
          error: false,
          success: true,
          messageId: 'create.post.success.message',
          locationName: 'create-post-success',
        });

        setIsLoading(false);

        history.push(`${routes.AllCustomersPage}`);
      }
    } catch (error) {
      handleMessage({
        error: true,
        success: false,
        messageId: 'global.error.message',
        locationName: 'create-post-error',
      });

      throw new Error(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'name') {
      setIsNameValid(true);
    }

    const value = e.target.value;

    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const validate = () => {
    let isValid = true;

    if (!state.name) {
      setIsNameValid(false);
      isValid = false;
    }

    return isValid;
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleSave = () => {
    if (validate()) {
      setIsLoading(true);
      savePost();
    }
  };

  return (
    <Grid container className={classes.page}>
      <Grid item lg={2} />
      <Grid item lg={8} md sm xs>
        <form noValidate autoComplete="off" onSubmit={handleFormSubmit} className={classes.form}>
          <TextField
            name="name"
            label={t({ id: 'Input.name', defaultMessage: 'Jméno' })}
            value={state.name}
            inputProps={{ 'aria-label': 'name' }}
            onChange={handleInputChange}
            error={!isNameValid}
            helperText={
              !isNameValid &&
              t({
                id: 'Input.name.error',
                defaultMessage: 'Prosím vyplňte jméno',
              })
            }
          />
          <TextField
            name="color"
            label={t({ id: 'Input.color', defaultMessage: 'Barva' })}
            value={state.color}
            inputProps={{ 'aria-label': 'color' }}
            onChange={handleInputChange}
          />
          <TextField
            name="colorCode"
            label={t({ id: 'Input.colorCode', defaultMessage: 'Kód barvy' })}
            value={state.colorCode}
            inputProps={{ 'aria-label': 'colorCode' }}
            onChange={handleInputChange}
          />
          <TextField
            name="price"
            label={t({ id: 'Input.price', defaultMessage: 'Cena' })}
            value={state.price}
            inputProps={{ 'aria-label': 'price' }}
            onChange={handleInputChange}
          />
          <TextField
            multiline
            name="comments"
            label={t({ id: 'Input.comments', defaultMessage: 'Poznámky' })}
            value={state.comments}
            rows={8}
            inputProps={{ 'aria-label': 'comments' }}
            onChange={handleInputChange}
          />
        </form>
        <Box className={classes.spinnerWrapper}>
          {isLoading && (
            <Box className={classes.spinner}>
              <CustomCircularProgress />
            </Box>
          )}
          {!isLoading && <CheckIcon className={classes.checkIcon} onClick={handleSave} />}
        </Box>
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
};

export default CreateCustomerPage;
