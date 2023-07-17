// Toggle.js
import React from 'react';
import MoonSvg from './assets/icons/moon.svg';
import SunSvg from './assets/icons/sun.svg';

import UiToggle from './ui';

interface ToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <UiToggle onClick={toggleTheme} lightTheme={isLight}>
      <img width={25} height={25} src={SunSvg} alt="toggle to light theme" />

      <img width={25} height={25} src={MoonSvg} alt="toggle to dark theme" />
    </UiToggle>
  );
};

export default Toggle;
