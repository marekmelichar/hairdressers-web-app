import { InMemoryCache, makeVar } from '@apollo/client';

export const snackbarMessageVar = makeVar({
  error: false,
  success: false,
  messageId: '',
  messageText: '',
  locationName: 'default',
  email: '',
});

export const cache = new InMemoryCache({
  typePolicies: {
    QuerySnackbarMessage: {
      fields: {
        snackbarMessage: {
          read() {
            return snackbarMessageVar();
          },
        },
      },
    },
  },
});
