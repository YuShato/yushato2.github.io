import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import Toggle from './components/toggle/Toggle';
import { useDarkMode } from './hooks/useDarkMode';
import './localization';
import { LocalizationInitiator } from './localization/LocalizationInitiator';
import { LangSwitcher } from './components/lang-switcher';
import { useTranslation } from 'react-i18next';
import ProductList from './components/product-list/ProductList';
import { mockListData } from './components/product-list/mockData';
import { ShortItemProps } from './components/item/short/types';
import { Page } from './components/pages/Page';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const { i18n } = useTranslation();

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <LocalizationInitiator />
      <>
        <GlobalStyles />

        <Page />
      </>
    </ThemeProvider>
  );
}

export default App;
