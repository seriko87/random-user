import './darkModeToggle.css';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';

const setDark = () => {
  localStorage.setItem('theme', 'dark');
  document.documentElement.setAttribute('data-theme', 'dark');
};

const setLight = () => {
  localStorage.setItem('theme', 'light');
  document.documentElement.setAttribute('data-theme', 'light');
};

const storedTheme = localStorage.getItem('theme');

const prefersDark =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultDark =
  storedTheme === 'dark' || (storedTheme === null && prefersDark);
if (defaultDark) {
  setDark();
}

const DarkModeToggle = () => {
  const [mode, setMode] = useState(defaultDark);

  const toggleTheme = () => {
    if (mode) {
      setLight();
      setMode(false);
    } else {
      setDark();
      setMode(true);
    }
  };
  return (
    <button onClick={toggleTheme} className="dark-mode-btn">
      {mode ? (
        <LightModeIcon className="svg-icon" sx={{ fontSize: 28 }} />
      ) : (
        <DarkModeIcon className="svg-icon" sx={{ fontSize: 28 }} />
      )}
    </button>
  );
};

export default DarkModeToggle;
