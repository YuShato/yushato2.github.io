import { Header } from '../header/Header';
import { LayoutProps } from './types';
import React from 'react';
import UiLayout from './ui';
import '../../../localization';

const Layout: React.FC<LayoutProps> = ({ toggleTheme, children }) => {
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
