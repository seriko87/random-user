import './darkModeToggle.css';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useSelector, useDispatch } from 'react-redux';
import {
  darkLightMode,
  setDarkLight,
} from '../../redux/features/darkModeSlice';

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
  const mode = useSelector(darkLightMode);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (mode) {
      setLight();
      dispatch(setDarkLight(false));
    } else {
      setDark();
      dispatch(setDarkLight(true));
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
