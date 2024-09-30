// This is just an example,
// so you can safely delete all default props below

export default {
  failed: 'Action failed',
  success: 'Action was successful',
  validations: {
    required: 'This field is required',
    string: 'This field must not be a numeric value',
    number: 'This field must be numeric',
    email: 'This field must be a valid e-mail',
    minLength: {
      number: 'This field must be greater than {minLength}',
      string: 'This field must have at least {minLength} characters',
    },
    passwordConfirmation: 'Password and Password Confirmation does not match',
    date: 'Invalid date',
  },
  app: {
    components: {
      timelineForm: {
        title: 'Title',
        description: 'Description',
        save: 'Save',
        cancel: 'Cancel',
      },
      btnConfig: {
        labelSlider: 'Available space',
        doUpgrade: 'Upgrade!',
      },
      btnUser: {
        edit: 'Edit',
        signature: 'My signature',
        logout: 'Logout',
      },
      momentForm: {
        title: 'Title',
        description: 'Description',
        avatar: 'Image',
        save: 'Save',
        cancel: 'Cancel',
        theme: 'Theme',
        postion: 'Position',
        positionHint:
          'Add order of position in which the moment will be displayed on the timeline. Eg: 1,2,3,4...',
      },
      tableMoments: {
        title: 'Title',
        avatar: 'Avatar',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        description: 'Description',
        theme: 'Theme',
        actions: 'Actions',
        photo: 'Photo | Photos',
        video: 'Video | Videos',
        edit: 'Edit',
        remove: 'Remove',
      },
      formLogin: {
        email: 'Email',
        password: 'Password',
        login: 'Login',
      },
      formForgotPassword: {
        email: 'Email',
        reset: 'Reset',
      },
      formResetPassword: {
        password: 'Password',
        passwordConfirmation: 'Confirm Password',
        save: 'Save',
      },
    },
    pages: {
      timeline: {
        edit: {
          title: 'Edit Timeline',
          goBack: 'Go back',
          moment: 'Moment | Moments',
        },
        new: {
          title: 'New Timeline',
          goBack: 'Go back',
        },
        list: {
          title: 'My timelines',
          remove: 'Remove',
          add: 'Add new',
          edit: 'Edit',
          addMoment: 'Add moments',
        },
        view: {},
      },
      moment: {
        edit: {
          title: 'Edit Moment',
          goBack: 'Go back',
        },
        new: {
          title: 'Add Moment',
          goBack: 'Go back',
        },
      },
      index: {},
      album: {
        save: {
          goBack: 'Go back',
          title: 'Photos/videos album',
        },
      },
      login: {
        forgotPassword: 'Forgot your password?',
        createAccount: 'Create an account',
      },
      emailVerification: {
        title: 'Verify your email',
        message: 'We have sent you verification email {email}',
        checkIt: 'Please check it',
        notReceivedYet: "Didn't receive an email?",
        resend: 'Resend',
        gotoLogin: 'Go to login page',
      },
      verify: {
        backToLogin: 'Back to login page',
        responseOk:
          'Email verified successfully! Please visit the login page again.',
      },
      errorNotFound: {
        message: 'Oops. Nothing here...',
        goHome: 'Go home',
      },
      forgotPassword: {
        title: 'Reset Password',
        message: 'Please, type your e-mail.',
        remember: 'Remember It?',
        signin: 'Sign in',
      },
      resetPasswordConfirmation: {
        title: 'Recouver your password',
        message: 'We have sent you a password recouver email. Please check it.',
        emailNotSent: "Didn't receive an email?",
        resend: 'Resend',
        backToLogin: 'Back to login',
      },
      resetPassword: {
        title: 'Create new password',
        message: 'Please, type your new password.',
        save: 'Save',
        remember: 'Remember It?',
        signin: 'Sign in',
        messageSuccess:
          'Password updated with success. You are been redirecting for login page in: ',
        seconds: '{seconds} second(s)',
      },
    },
  },
};
