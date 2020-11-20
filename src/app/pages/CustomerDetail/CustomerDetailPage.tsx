/* eslint-disable react-hooks/exhaustive-deps */
import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CommunicationManager from '../../libs/communicationManager';
import { Box, Grid, Input, TextField } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { CustomCircularProgress } from '../../components';
import useStyles from './styles';
import { snackbarMessageVar } from '../../cache';
import { IMessage } from '../../core';

const CustomerDetailPage: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();

  const [state, setState] = useState({
    color: '',
    colorCode: '',
    comments: '',
    name: '',
    price: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleMessage = useCallback((mes: IMessage) => {
    snackbarMessageVar({ ...snackbarMessageVar(), ...mes });
  }, []);

  const fetchCustomerById = useCallback(async () => {
    try {
      const response = await CommunicationManager.get(
        `/customers?id=${id}&timestamp=${new Date().getTime()}`,
      );

      if (response) {
        setIsLoading(false);
        setState({
          ...state,
          color: response.color,
          colorCode: response.colorCode,
          comments: response.comments,
          name: response.name,
          price: response.price,
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  useEffect(() => {
    fetchCustomerById();
  }, [fetchCustomerById]);

  const updatePost = async () => {
    const data = {
      id,
      color: state.color,
      colorCode: state.colorCode,
      comments: state.comments,
      name: state.name,
      price: state.price,
    };
    try {
      const response = await CommunicationManager.put('/customers', data);
      if (response) {
        handleMessage({
          error: false,
          success: true,
          messageId: 'update.post.success.message',
          locationName: 'update-post-success',
        });

        setIsLoading(false);
      }
    } catch (error) {
      handleMessage({
        error: true,
        success: false,
        messageId: 'global.error.message',
        locationName: 'update-post-error',
      });

      throw new Error(error);
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    updatePost();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const renderAccordionInput = (heading: string, content: string, name: string) => {
    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${heading}-content`}>
          <Typography className={classes.heading}>{heading}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <form noValidate autoComplete="off" onSubmit={handleFormSubmit} className={classes.form}>
            <Input
              name={name}
              value={content}
              inputProps={{ 'aria-label': 'description' }}
              onChange={handleInputChange}
            />
          </form>

          <Box className={classes.spinnerWrapper}>
            {isLoading && (
              <Box className={classes.spinner}>
                <CustomCircularProgress />
              </Box>
            )}
            {!isLoading && <CheckIcon className={classes.checkIcon} onClick={handleFormSubmit} />}
          </Box>
        </AccordionDetails>
      </Accordion>
    );
  };

  const renderAccordionTextField = (heading: string, content: string, name: string) => {
    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${heading}-content`}>
          <Typography className={classes.heading}>{heading}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <form noValidate autoComplete="off" className={classes.form}>
            <TextField
              multiline
              name={name}
              value={content}
              rows={8}
              inputProps={{ 'aria-label': 'description' }}
              onChange={handleInputChange}
            />
          </form>
          <CheckIcon className={classes.checkIcon} onClick={handleFormSubmit} />
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <Grid container className={classes.page}>
      <Grid item lg={2} />
      <Grid item lg={8} md sm xs>
        {renderAccordionInput('Jméno :', state.name, 'name')}
        {renderAccordionInput('Barva :', state.color, 'color')}
        {renderAccordionInput('Kód barvy :', state.colorCode, 'colorCode')}
        {renderAccordionInput('Cena :', state.price, 'price')}
        {renderAccordionTextField('Poznámky :', state.comments, 'comments')}
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
};

export default CustomerDetailPage;
