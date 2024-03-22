import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
<<<<<<< HEAD
import Typography from '@mui/material/Typography';
import theme from './theme';
=======
import Typography from '@mui/material/Typography'; // Import Typography
import theme from './theme'; // Import the theme
>>>>>>> 9a2b2eaa0a8e500f6a70afb8a16c5f0cdf9d5871
import Navbar from './Navbar';
import './App.css';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
<<<<<<< HEAD
        <header className="App-header" style={{ paddingTop: '20px' }}> 
          <Typography sx={{
            color: 'black',
            textShadow: '0 0 8px #fff',
            fontSize: '3.4rem',
          }}>
            Serving Southern California Since 1997
=======
        {/* Added inline styling for padding below the Navbar */}
        <header className="App-header" style={{ paddingTop: '20px' }}> 
          <Typography sx={{
            color: 'black', // Black text color
            textShadow: '0 0 8px #fff', // White glow
            fontSize: '5rem', // Larger font size
          }}>
            Welcome to Freedom Path Bail Bonds
>>>>>>> 9a2b2eaa0a8e500f6a70afb8a16c5f0cdf9d5871
          </Typography>
        </header>
      </div>
    </ThemeProvider>
  );
}
export default App;
