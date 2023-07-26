/* eslint-disable import/named */
import { Button } from './../../../components/buttons/button/Button';
import { HeaderProps } from './types';
import Logo from '../logo/Logo';
import NavList from './NavList';
import React from 'react';
import UiHeader from './ui';
import Toggle from './../../../components/toggle/Toggle';
import { WithTranslation, withTranslation } from 'react-i18next';
import { LangSwitcher } from './../../../components/lang-switcher';
import { useTheme } from 'styled-components';

export const HeaderComponent = ({ toggleTheme, user, onLogin, onLogout }: HeaderProps & WithTranslation) => {
  const theme = useTheme();

  return (
    <UiHeader>
      <UiHeader.Logo href="/">
        <UiHeader.DesktopLogo>
          <Logo viewtype="default" />
        </UiHeader.DesktopLogo>

        <UiHeader.MobileLogo>
          <Logo viewtype="mobile" />
        </UiHeader.MobileLogo>
      </UiHeader.Logo>

      <NavList />

      <UiHeader.Toggle>
        <LangSwitcher />

        <Toggle theme={theme?.name} toggleTheme={toggleTheme} />
      </UiHeader.Toggle>

      {user ? (
        <>
          <Button label="Logout" viewtype="logout" size="small" onClick={onLogout} />
        </>
      ) : (
        <Button label="Login" viewtype="login" size="small" onClick={onLogin} />
      )}
    </UiHeader>
  );
};

export const Header = withTranslation()(HeaderComponent);
