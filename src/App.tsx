import React, { createContext, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { useDarkMode } from './hooks/useDarkMode';
import { Locale } from './localization';
import { LocalizationInitiator } from './localization/LocalizationInitiator';
import { useTranslation } from 'react-i18next';

import { Page } from './components/pages/Page';
import generateRandomData from './components/product-list/utils/helpers/item';

export const ProductsContext = createContext(null);

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const { i18n } = useTranslation();
  const lang = (i18n.language as Locale) === Locale.ru ? Locale.en : Locale.ru;

  const mockListData = useMemo(() => {
    return generateRandomData(100, lang);
  }, [lang]);

  const currentTheme = useMemo(() => {
    return theme === 'light' ? lightTheme : darkTheme;
  }, [theme]);
  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <LocalizationInitiator />

      <ProductsContext.Provider value={{ mockListData }}>
        <Page toggleTheme={toggleTheme} />
      </ProductsContext.Provider>
    </ThemeProvider>
  );
}

export default App;
