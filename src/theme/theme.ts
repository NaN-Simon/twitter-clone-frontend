import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';

const theme = createTheme({
  palette: palette,
  typography: typography,
  breakpoints: breakpoints,
});

export default theme;
