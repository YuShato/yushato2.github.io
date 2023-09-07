import React, { createContext, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { useDarkMode } from './hooks/useDarkMode';
import { Locale } from './localization';
import { LocalizationInitiator } from './localization/LocalizationInitiator';
import { useTranslation } from 'react-i18next';
import generateRandomData from './components/product-list/utils/helpers/item';
import AppRoutes from './routing';

export const ProductsContext = createContext(null);

export const LangContext = createContext(null);

export const ToggleThemeContext = createContext(null);

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const { i18n } = useTranslation();
  const lang = (i18n.language as Locale) === Locale.ru ? Locale.ru : Locale.en;

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
      <LangContext.Provider value={lang}>
        <ToggleThemeContext.Provider value={toggleTheme}>
          <ProductsContext.Provider value={mockListData}>
            <GlobalStyles />

            <LocalizationInitiator />

            <AppRoutes />
          </ProductsContext.Provider>
        </ToggleThemeContext.Provider>
      </LangContext.Provider>
    </ThemeProvider>
  );
}

export default App;
