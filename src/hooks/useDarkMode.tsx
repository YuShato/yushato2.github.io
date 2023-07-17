import { useEffect, useState } from 'react';
//   const [theme, setTheme] = useState('light');
//   const [componentMounted, setComponentMounted] = useState(false);
//   const setMode = (mode) => {
//     window.localStorage.setItem('theme', mode);
//     setTheme(mode);
//   };

//   const toggleTheme = () => {
//     if (theme === 'light') {
//       setMode('dark');
//     } else {
//       setMode('light');
//     }
//   };

//   useEffect(() => {
//     const localTheme = window.localStorage.getItem('theme');

//     const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

//     if (prefersDarkMode && !localTheme) {
//       setMode('dark');
//     } else if (localTheme) {
//       setTheme(localTheme);
//     } else {
//       setMode('light');
//     }

//     setComponentMounted(true);
//   }, []);

//   return [theme, toggleTheme, componentMounted];
// };

export const useDarkMode = (): [string, () => void, boolean] => {
  const [theme, setTheme] = useState<string>('light');
  const [componentMounted, setComponentMounted] = useState<boolean>(false);

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

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
  }, []);

  return [theme, toggleTheme, componentMounted];
};
