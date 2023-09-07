import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import Layout from '../../common/layout/Layout';
import UiForm from './ui';
import { Button } from '../../buttons/button/Button';

type InputProps = {
  label: string;
  name: string;
  id?: string;
  [key: string]: string | number | undefined;
};

const MyTextInput: React.FC<InputProps> = ({ label, ...props }) => {
  const { name, id } = props;

  const [field, meta] = useField(props);

  return (
    <UiForm.Row>
      <UiForm.Label htmlFor={id || name}>{label}</UiForm.Label>

      <input className="text-input" {...field} {...props} />

      {meta.touched && meta.error ? <UiForm.Error>{meta.error}</UiForm.Error> : null}
    </UiForm.Row>
  );
};

const SignupForm = () => {
  return (
    <UiForm>
      <h1>Sign In</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
          lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
          email: Yup.string().email('Invalid email addresss`').required('Required'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput label="First Name" name="firstName" type="text" placeholder="Jane" />

          <MyTextInput label="Last Name" name="lastName" type="text" placeholder="Doe" />

          <MyTextInput label="Email Address" name="email" type="email" placeholder="jane@formik.com" />

          <Button type="submit" label="Submit" />
        </Form>
      </Formik>
    </UiForm>
  );
};

export default SignupForm;
