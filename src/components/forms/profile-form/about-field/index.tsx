import React, { memo } from 'react';
import { getValidates } from '../../../../utils/helpers/validation';
import { FormItem } from '../../form-item';
import Input from 'antd/lib/input';
import { FormikHandlers } from 'formik/dist/types';
import { useTranslation } from 'react-i18next';
import { ProfileFormProps } from '../types';

export type AboutFieldProps = Pick<ProfileFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const AboutField = memo<AboutFieldProps>(
  ({ onChange, onBlur, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem title={t(`forms.ProfileForm.about.title`)} validateStatus={validateStatus} help={help}>
        <Input.TextArea
          disabled={disabled}
          name="about"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(`forms.ProfileForm.about.placeholder`)}
        />
      </FormItem>
    );
  }
);

AboutField.displayName = 'AboutField';
