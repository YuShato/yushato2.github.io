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
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>Its a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>

        <h1>Its a {i18n.language}!</h1>
        <LangSwitcher />
        <footer></footer>
      </>
    </ThemeProvider>
  );
}

export default App;
