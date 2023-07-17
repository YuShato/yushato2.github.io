/* eslint-disable import/named */
import { Button } from './../../../components/buttons/button/Button';
import { HeaderProps } from './types';
import Logo from '../logo/Logo';
import NavList from './NavList';
import React from 'react';
import UiHeader from './ui';
import { useDarkMode } from '../../../hooks/useDarkMode';
import Toggle from './../../../components/toggle/Toggle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './../../../styles/theme';
import { WithTranslation, withTranslation } from 'react-i18next';
import { LangSwitcher } from './../../../components/lang-switcher';

export const HeaderComponent = ({ user, onLogin, onLogout }: HeaderProps & WithTranslation) => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
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

        <LangSwitcher />

        <Toggle theme={theme} toggleTheme={toggleTheme} />

        {user ? (
          <>
            <Button label="Logout" viewtype="logout" size="small" onClick={onLogout} />
          </>
        ) : (
          <Button label="Login" viewtype="login" size="small" onClick={onLogin} />
        )}
      </UiHeader>
    </ThemeProvider>
  );
};

export const Header = withTranslation()(HeaderComponent);
