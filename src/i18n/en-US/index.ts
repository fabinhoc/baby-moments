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
    },
  },
};
