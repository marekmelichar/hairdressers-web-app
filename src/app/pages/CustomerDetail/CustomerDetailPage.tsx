/* eslint-disable react-hooks/exhaustive-deps */
import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CommunicationManager from '../../libs/communicationManager';
import { Box, Grid, Input, TextField, Dialog, Button, DialogTitle } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { CustomCircularProgress } from '../../components';
import useStyles from './styles';
import { snackbarMessageVar } from '../../cache';
import { IMessage } from '../../core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useFormatMessage } from 'react-intl-hooks';
import { useHistory } from 'react-router-dom';

const routes = {
  AllCustomersPage: process.env.REACT_APP_ROUTE_ALL_CUSTOMERS,
};

const CustomerDetailPage: React.FC = () => {
  const classes = useStyles();
  const t = useFormatMessage();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const [state, setState] = useState({
    color: '',
    colorCode: '',
    comments: '',
    name: '',
    price: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = React.useState(false);

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

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleDelete = async () => {
    setOpenDialog(true);
  };

  const handleCancelButtonClick = () => {
    setOpenDialog(false);
  };

  const handleDeletePost = async () => {
    setIsDeleteLoading(true);

    const data = {
      data: { id },
    };
    try {
      const response = await CommunicationManager.delete('/customers', data);
      if (response) {
        handleMessage({
          error: false,
          success: true,
          messageId: 'delete.post.success.message',
          locationName: 'delete-post-success',
        });

        setIsDeleteLoading(false);

        history.push(`${routes.AllCustomersPage}`);
      }
    } catch (error) {
      handleMessage({
        error: true,
        success: false,
        messageId: 'global.error.message',
        locationName: 'delete-post-error',
      });

      throw new Error(error);
    }
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
              inputProps={{ 'aria-label': heading }}
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
              inputProps={{ 'aria-label': heading }}
              onChange={handleInputChange}
            />
          </form>
          <CheckIcon className={classes.checkIcon} onClick={handleFormSubmit} />
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <>
      <Grid container className={classes.page}>
        <Grid item lg={2} />
        <Grid item lg={8} md sm xs>
          {renderAccordionInput('Jméno :', state.name, 'name')}
          {renderAccordionInput('Barva :', state.color, 'color')}
          {renderAccordionInput('Kód barvy :', state.colorCode, 'colorCode')}
          {renderAccordionInput('Cena :', state.price, 'price')}
          {renderAccordionTextField('Poznámky :', state.comments, 'comments')}
          <Box onClick={handleDelete} className={classes.deleteIcon}>
            <DeleteForeverIcon />
          </Box>
        </Grid>
        <Grid item lg={2} />
      </Grid>

      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={openDialog}
        className={classes.dialogRoot}
      >
        <DialogTitle id="simple-dialog-title">
          {t({ id: 'delete.deleteModalTitle', defaultMessage: 'Opravdu smazat' })} {state.name} ?
        </DialogTitle>
        <Box display="flex" justifyContent="flex-end">
          <Button className={classes.modalButtonCancel} onClick={handleCancelButtonClick}>
            {t({ id: 'Button.cancel', defaultMessage: 'Zpět' })}
          </Button>
          <Box className={classes.dialogSpinnerWrapper}>
            {!isDeleteLoading && (
              <Button
                data-cy="editor-editPost-modal-button-delete"
                className={classes.modalButtonDelete}
                onClick={handleDeletePost}
                variant="contained"
                type="submit"
                size="large"
              >
                {t({ id: 'Button.delete', defaultMessage: 'Odstranit' })}
              </Button>
            )}
            {isDeleteLoading && (
              <Box className={classes.dialogSpinner}>
                <CustomCircularProgress />
              </Box>
            )}
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default CustomerDetailPage;
