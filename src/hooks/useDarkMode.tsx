import { useCallback, useEffect, useState } from 'react';

export const useDarkMode = (): [string, () => void, boolean] => {
  const [theme, setTheme] = useState<string>('light');
  const [componentMounted, setComponentMounted] = useState<boolean>(false);

  const setMode = useCallback(
    (mode: string) => {
      window.localStorage.setItem('theme', mode);
      setTheme(mode);
    },
    [setTheme]
  );

  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, [setMode, theme]);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkMode && !localTheme) {
      setMode('dark');
    } else if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('light');
    }

    setComponentMounted(true);
  }, [setMode]);

  return [theme, toggleTheme, componentMounted];
};
