import validatorIsEmail from 'validator/lib/isEmail';

/**
 * This module will check value (string) for validity. If value passes it will return null,
 * otherwise will return an error string. These methods should be called within validate()
 * to be returned to redux-form for handling.
 *
 * redux-form expects the validate function to return only 1 error (string) per form field.
 */
const validation = {
  exists(value) {
    return (value && typeof value === 'string' && value.trim().length !== 0 ? null : 'form.error.requiredFieldError');
  },

  number(value) {
    const existsError = this.exists(value);
    if (existsError) {
      return existsError;
    }
    return (!isNaN(value) ? null : 'common.numberError');
  },

  email(value) {
    const existsError = this.exists(value);

    if (existsError) {
      return existsError;
    }
    if (!validatorIsEmail(value.trim())) {
      return 'common.invalidEmailError';
    }

    return null;
  },

  matchConfirm(value1, value2, field) {
    const existsError = this.exists(value2);

    if (existsError) {
      return existsError;
    }
    if (value1 !== value2) {
      return { id: 'common.matchingError', values: { fieldId: field } };
    }

    return null;
  }
};

export default validation;
