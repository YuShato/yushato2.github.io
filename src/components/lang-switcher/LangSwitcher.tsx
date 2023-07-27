import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Locale } from '../../localization';
import UiLang from './ui';

export type ThemeSwitcherProps = {
  className?: string;
};

export const LangSwitcher: FC<ThemeSwitcherProps> = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language as Locale) === Locale.ru ? Locale.en : Locale.ru;

  return (
    <UiLang type="button" onClick={() => i18n.changeLanguage(lang)}>
      {lang}
    </UiLang>
  );
};
