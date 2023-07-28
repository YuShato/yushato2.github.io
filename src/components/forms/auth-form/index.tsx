import React, { memo } from 'react';
import { AuthFormProps } from './types';
import PasswordField from './password-field';
import EmailField from './email-field';

export const AuthForm = memo<AuthFormProps>(({ className, formManager, formElement, autoFocusElement, disabled }) => {
  const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange, submitForm } = formManager;

  return (
    <form ref={formElement} onSubmit={handleSubmit}>
      <EmailField
        onPressEnter={submitForm}
        autoFocusElement={autoFocusElement}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        errors={errors.email}
        submitCount={submitCount}
        touched={touched.email}
        disabled={disabled}
      />
      <PasswordField
        onPressEnter={submitForm}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        errors={errors.password}
        submitCount={submitCount}
        touched={touched.password}
        disabled={disabled}
      />
    </form>
  );
});

AuthForm.displayName = 'AuthForm';
