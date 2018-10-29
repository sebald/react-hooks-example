import React, { useState } from 'react';
import { Palette } from './components';

export const ThemeContext = React.createContext('blue');

export default function ThemeToggle({ colors, children }) {
  const [theme, setTheme] = useState('blue');

  return (
    <ThemeContext.Provider value={theme}>
      <>
        <Palette colors={colors} onChange={setTheme} />
        {children}
      </>
    </ThemeContext.Provider>
  );
}
