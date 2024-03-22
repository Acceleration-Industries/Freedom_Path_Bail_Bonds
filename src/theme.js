import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
      paper: '#333',
    },
    text: {
      primary: '#fff',
    },
  },
  typography: {
    fontFamily: 'Richsten, sans-serif',
    allVariants: {
      color: "white"
    },
  },
});
export default theme;