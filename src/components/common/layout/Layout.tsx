import { Header } from '../header/Header';
import { LayoutProps } from './types';
import React, { useContext } from 'react';
import UiLayout from './ui';
import '../../../localization';
import { ToggleThemeContext } from '../../../App';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const toggleTheme = useContext(ToggleThemeContext);
  const onLogin = () => {
    console.log('Login');
  };

  const onLogout = () => {
    console.log('Logout');
  };

  const onCreateAccount = () => {
    console.log('Create account');
  };

  return (
    <UiLayout>
      <UiLayout.Container>
        <Header onCreateAccount={onCreateAccount} onLogin={onLogin} onLogout={onLogout} toggleTheme={toggleTheme} />

        <div>{children}</div>
      </UiLayout.Container>
    </UiLayout>
  );
};

export default Layout;
