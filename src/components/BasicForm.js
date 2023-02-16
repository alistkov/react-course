import React from 'react';
import useInput from '../hooks/use-input';

const validator = {
  text: (value) => value.trim().length >= 3,
  email: (value) => value.trim().includes('@'),
};

const BasicForm = () => {
  const {
    value: nameValue,
    hasError: nameInputHasError,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
    valueChangeHandler: nameInputChangeHandler,
    isValid: nameInputIsValid,
  } = useInput(validator.text);

  const {
    value: lastNameValue,
    hasError: lastNameInputHasError,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: lastNameInputReset,
    valueChangeHandler: lastNameInputChangeHandler,
    isValid: lastNameInputIsValid,
  } = useInput(validator.text);

  const {
    value: emailValue,
    hasError: emailInputHasError,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
    valueChangeHandler: emailInputChangeHandler,
    isValid: emailInputIsValid,
  } = useInput(validator.email);

  let formIsValid = false;

  if (nameInputIsValid && lastNameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }
  const submitForm = (event) => {
    event.preventDefault();
    const data = {
      name: nameValue,
      lastName: lastNameValue,
      email: emailValue,
    };
    console.log(data);
    nameInputReset();
    lastNameInputReset();
    emailInputReset();
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastNameInputClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitForm}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={nameValue}
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be empty</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={lastNameValue}
          />
          {lastNameInputHasError && (
            <p className="error-text">Lastname must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={emailValue}
        />
        {emailInputHasError && <p className="error-text">Email is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
