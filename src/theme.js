import { createTheme } from '@mui/material/styles';
<<<<<<< HEAD
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
=======

const theme = createTheme({
  palette: {
    mode: 'dark', // Automatically configures dark mode
    background: {
      default: '#000', // Black background
      paper: '#333', // Slightly lighter for elements considered "paper"
    },
    text: {
      primary: '#fff', // White text
    },
  },
  typography: {
    fontFamily: 'Richsten, sans-serif', // Specify the 'Richsten' font along with a fallback
    allVariants: {
      color: "white" // Ensures all text is white by default
    },
  },
  // You can also define custom shadows or effects here
});

>>>>>>> 9a2b2eaa0a8e500f6a70afb8a16c5f0cdf9d5871
export default theme;
