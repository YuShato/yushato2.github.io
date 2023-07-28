import React, { memo, useMemo } from 'react';
import { useMutation } from '@apollo/client';
import { AuthForm, AuthFormErrors, AuthFormValues } from 'src/components/Forms';
import { FormikConfig, useFormik } from 'formik';
import { Button, message } from 'antd';
import { isLongEnough, isNotDefinedString } from '../../../utils/helpers/validation';
import { useDispatch } from 'react-redux';
import { tokenActions } from 'src/store/token';
import { createErrorHandlers } from 'src/utils/createErrorHandlers';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavigationState } from 'src/navigation/types';
import { useTranslation } from 'react-i18next';
import { SIGN_IN, SignInResponse, SignInVars, extractSignIn } from '../connections';

export type SingInBlockProps = {
  className?: string;
};

const initialValues: AuthFormValues = {
  email: undefined,
  password: undefined,
};

export const SingInBlock = memo<SingInBlockProps>(() => {
  const { t } = useTranslation();
  const [signIn, { loading }] = useMutation<SignInResponse, SignInVars>(SIGN_IN, { fetchPolicy: 'no-cache' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { onSubmit, validate } = useMemo<Pick<FormikConfig<AuthFormValues>, 'onSubmit' | 'validate'>>(() => {
    const { catcher } = createErrorHandlers((code, _, error) => {
      if (code === null) {
        message.error(t(`errors.${error.message}`));
      } else {
        message.error(t(`errors.${code}`));
      }
    });
    return {
      onSubmit: (values, { resetForm }) => {
        signIn({ variables: { email: values.email, password: values.password } })
          .then((res) => {
            dispatch(tokenActions.set(extractSignIn(res.data)));
            resetForm();
            navigate((location.state as NavigationState)?.from || '/');
          })
          .catch(catcher);
      },
      validate: (values) => {
        const errors = {} as AuthFormErrors;
        if (isNotDefinedString(values.email)) {
          errors.email = t(`errors.is_required`);
        }
        if (isNotDefinedString(values.password)) {
          errors.password = t(`errors.is_required`);
        } else if (!isLongEnough(values.password)) {
          errors.password = t(`errors.too_short_password`);
        }
        return errors;
      },
    };
  }, [dispatch, location.state, navigate, signIn, t]);

  const formik = useFormik<AuthFormValues>({
    onSubmit,
    initialValues,
    validate,
  });

  const { submitForm } = formik;
  return (
    <div>
      <AuthForm formManager={formik} />
      <div>
        <Button loading={loading} type="primary" onClick={submitForm}>
          {t(`screens.auth.signIn.submit`)}
        </Button>
      </div>
    </div>
  );
});

SingInBlock.displayName = 'SingInBlock';
