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

export const Header = ({ user, onLogin, onLogout }: HeaderProps) => {
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
