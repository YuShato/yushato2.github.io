import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import Toggle from './components/toggle/Toggle';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>Its a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
        <footer></footer>
      </>
    </ThemeProvider>
  );
}

export default App;
