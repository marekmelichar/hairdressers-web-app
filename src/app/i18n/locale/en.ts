export default {
  locale: 'en',

  'App.name': 'DPD Onboarding Admin',

  'Error.default': 'Error',

  'Header.nav.editor': 'Editor',
  'Header.nav.administration': 'Administration',

  'Button.cancel': 'Cancel',
  'Button.delete': 'Delete',

  'Page.error.response.400': 'User not found',
  'Page.error.response.403': 'Forbidden access!',
  'Page.error.response.404': 'User not found',
  'Page.error.response.405': 'Method not allowed',
  'Page.error.response.422': 'Unprocessable entity',
  'Page.error.response.500': 'Internal server error!',
  'Page.error.verifyAccount': 'Please verify your account first',

  /**
   * Login page
   */
  'login.header': 'DPD Onboarder Admin',
  'login.info': 'Enter your e-mail and password',
  'login.email.title': 'E-mail',
  'login.email.empty': 'Enter your e-mail address',
  'login.email.invalidAddr': 'Invalid e-mail address',
  'login.password.title': 'Password',
  'login.password.empty': 'Enter your password',
  'login.password.invalidFormat': 'Invalid password format',
  'login.remember': 'Remember me',
  'login.button': 'Login',
  'login.forgotten': 'Forgot password?',
  'login.noAccountYet': "Don't have an account?",
  'login.createAccount': 'Create one now',
  'login.awaitingResponse': 'Logging in...',
  'login.error.response.400': 'User {email} not found',
  'login.error.response.403': 'Forbidden access!',
  'login.error.response.404': 'User {email} not found',
  'login.error.response.405': 'Method not allowed',
  'login.error.response.422': 'Unprocessable entity',
  'login.error.response.500': 'Internal server error!',
  'login.error.verifyAccount': 'Please verify your account first',

  /**
   * Forgot Password
   */

  'forgot.password.header': 'Reset password',
  'forgot.password.content':
    'Enter your email address associated with the DPD Onboarder account, to which we will send a password reset request.',
  'forgot.password.email.title': 'Email address',
  'forgot.password.email.empty': 'Enter your email address',
  'forgot.password.email.invalidAddr': 'Invalid E-mail address',
  'forgot.password.submit.send.button': 'Send',
  'forgot.password.success.title': 'Check your email',
  'forgot.password.success.subTitle':
    'We have just sent you a request to set a new password to your email.' +
    ' Check your email, including your spam basket.',
  'forgot.password.success.button.send.again': 'Resend',
  'forgot.password.succes.button.succes': 'OK',
  'forgot.password.success.message': 'will send you the instructions on { email }',
  'forgot.password.error.response.400': 'Email {email} not found',
  'forgot.password.error.response.403': 'Restricted access!',
  'forgot.password.error.response.404': 'Email {Email} not found',
  'forgot.password.error.response.405': 'The method is disabled',
  'forgot.password.error.response.422': 'Unprocessable entity',
  'forgot.password.error.response.500': 'Internal server error!',

  /**
   * Reset
   */

  'reset.password.header': 'Reset password',
  'reset.password.content':
    'Enter your email address associated with the DPD Onboarder account, ' +
    'to which we will send a password reset request.',
  'reset.password.email.title': 'Email address',
  'reset.password.email.empty': 'Enter your email address',
  'reset.password.email.invalidAddr': 'Invalid E-mail address',
  'reset.password.submit.send.button': 'Send',
  'reset.password.success.title': 'Check your email',
  'reset.password.success.subTitle':
    'We have just sent you a request to set a new password to your email.' +
    ' Check your email, including your spam basket.',
  'reset.password.success.button.send.again': 'Resend',
  'reset.password.success.button.success': 'OK',

  'change.password.header': 'Change password',
  'change.password.oldPassword.title': 'Current password',
  'change.password.oldPassword.empty': 'Enter your current password',
  'change.password.invalidFormat':
    'Invalid password format - should contain Capital letter, Number and Special character',
  'change.password.newPassword.title': 'New password',
  'change.password.newPassword.empty': 'Enter your new password',
  'change.password.newPasswordAgain.title': 'Confirm new password',
  'change.password.newPasswordAgain.empty': 'Enter your new password again',
  'change.password.newPasswordAgain.notEqual': 'Passwords are not the same',
  'change.password.success.message': 'Password has been changed.',
  'change.password.error.response.0': 'Can not contact the server...',
  'change.password.error.response.400': '',
  'change.password.error.response.401': 'User is not authorized.',
  'change.password.error.response.403': '',
  'change.password.error.response.404': 'Requested resource not found.',
  'change.password.error.response.409': 'New password cannot be same as the old one.',
  'change.password.error.response.422': '',
  'change.password.error.response.500': 'Internal server error!',

  /**
   * Editor page
   */
  'editor.heading': 'Editor',
  'editor.button': 'New Post',

  'editor.newPost.heading': 'New Post',
  'editor.newPost.title': 'Title',
  'editor.newPost.title.empty': 'Title can not be empty',
  'editor.newPost.title.invalid': 'Title must be in text format',
  'editor.newPost.button.preview': 'Preview',
  'editor.newPost.button.save': 'Save',
  'editor.newPost.author': 'Author',
  'editor.newPost.category': 'Category',
  'editor.newPost.shipper': 'Shipper',
  'editor.newPost.shipmentApi': 'Shipment API',
  'editor.newPost.selfPrinting': 'Selfprinter',
  'editor.newPost.postLanguage': 'Language',
  'editor.newPost.languageSK': 'Slovak',
  'editor.newPost.languageEN': 'English',
  'editor.newPost.postState': 'State',
  'editor.newPost.conceptState': 'Concept',
  'editor.newPost.publishedState': 'Published',
  'editor.newPost.textEditorContent.empty': 'Editor content can not be empty',
  'editor.newPost.success.message': 'Post successfully created',
  'editor.newPost.error.response.400': 'Post not found',
  'editor.newPost.error.response.403': 'Forbidden access!',
  'editor.newPost.error.response.404': 'Post not found',
  'editor.newPost.error.response.405': 'Method not allowed',
  'editor.newPost.error.response.422': 'Unprocessable entity',
  'editor.newPost.error.response.500': 'Internal server error!',

  /**
   * Table of posts
   */
  'tableOfPosts.header': 'Header',
  'tableOfPosts.category': 'Category',
  'tableOfPosts.language': 'Language',
  'tableOfPosts.status': 'Status',
  'tableOfPosts.date': 'Date',
  'tableOfPosts.language.sk': 'Slovak',
  'tableOfPosts.language.en': 'English',
  'tableOfPosts.language.cs': 'Czech',
  'tableOfPosts.category.shipper': 'Shipper',
  'tableOfPosts.category.shipmentApi': 'Shipment API',
  'tableOfPosts.category.selfPrinting': 'Self printing',
  'tableOfPosts.status.concept': 'Concept',
  'tableOfPosts.status.published': 'Published',

  /**
   * Edit a post - page
   */
  'editor.editPost.heading': 'Edit Post',
  'editor.editPost.title': 'Title',
  'editor.editPost.title.empty': 'Title can not be empty',
  'editor.editPost.title.invalid': 'Title must be in text format',
  'editor.editPost.button.preview': 'Preview',
  'editor.editPost.button.save': 'Save',
  'editor.editPost.author': 'Author',
  'editor.editPost.category': 'Category',
  'editor.editPost.shipper': 'Shipper',
  'editor.editPost.shipmentApi': 'Shipment API',
  'editor.editPost.selfPrinting': 'Selfprinter',
  'editor.editPost.postLanguage': 'Language',
  'editor.editPost.languageSK': 'Slovak',
  'editor.editPost.languageEN': 'English',
  'editor.editPost.postState': 'State',
  'editor.editPost.conceptState': 'Concept',
  'editor.editPost.publishedState': 'Published',
  'editor.editPost.textEditorContent.empty': 'Editor content can not be empty',
  'editor.editPost.success.message': 'Post successfully edited',
  'editor.editPost.error.response.400': 'Post not found',
  'editor.editPost.error.response.403': 'Forbidden access!',
  'editor.editPost.error.response.404': 'Post not found',
  'editor.editPost.error.response.405': 'Method not allowed',
  'editor.editPost.error.response.422': 'Unprocessable entity',
  'editor.editPost.error.response.500': 'Internal server error!',

  'editor.deletePost.button': 'Delete post',
  'editor.deletePost.success.message': 'Post successfully deleted',
  'editor.deleteModalTitle': 'Confirm delete please'
};
