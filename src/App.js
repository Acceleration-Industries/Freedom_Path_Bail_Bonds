import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import theme from './theme';
import Navbar from './Navbar';
import './App.css';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <header className="App-header" style={{ paddingTop: '20px' }}> 
          <Typography sx={{
            color: 'black',
            textShadow: '0 0 8px #fff',
            fontSize: '3.4rem',
          }}>
            Serving Southern California Since 1997
          </Typography>
        </header>
      </div>
    </ThemeProvider>
  );
}
export default App;
