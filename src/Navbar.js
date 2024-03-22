<<<<<<< HEAD
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, useTheme } from '@mui/material';
import InmateSearchPopup from './InmateSearchPopup';
import AttorneysPopup from './AttorneysPopup';
import ContactPopup from './ContactPopup';
import { jails } from './jailsData';

function Navbar() {
  const theme = useTheme();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAttorneysPopupOpen, setIsAttorneysPopupOpen] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [jailMenuAnchorEl, setJailMenuAnchorEl] = useState(null);

  const handleJailMenuClick = (event) => {
    setJailMenuAnchorEl(event.currentTarget);
  };

  const handleJailMenuClose = () => {
    setJailMenuAnchorEl(null);
  };

  const buttonStyle = {
    fontSize: '1.8rem',
    textTransform: 'none',
    marginRight: theme.spacing(1),
    fontFamily: "'Richsten', sans-serif",
    color: 'black',
    textShadow: '0 0 8px #fff',
=======
import React, { useState } from 'react'; // Import useState
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import InmateSearchPopup from './InmateSearchPopup'; // Ensure this path is correct

function Navbar() {
  const theme = useTheme();
  // Add useState for managing the popup's visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const buttonStyle = {
    fontSize: '2rem',
    textTransform: 'none',
    marginRight: theme.spacing(1),
    fontFamily: "'Richardo Flacky', sans-serif",
    color: 'black', // Text color updated for visibility
    textShadow: '0 0 14px #808080', // Gray glow for the text
>>>>>>> 9a2b2eaa0a8e500f6a70afb8a16c5f0cdf9d5871
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <img src="set-free-icon.png" alt="logo" style={{ marginRight: theme.spacing(2), height: '11vh' }} />
<<<<<<< HEAD
        <Typography variant="h1" color="black" component="div" sx={{ flexGrow: 1, textShadow: '0 0 8px #fff' }}>
          Freedom Path Bail Bonds
        </Typography>
        <Button color="inherit" sx={buttonStyle} onClick={() => setIsPopupOpen(true)}>-Inmate Search-</Button>
        <Button color="inherit" sx={buttonStyle} onClick={handleJailMenuClick}>-Jails-</Button>
        <Menu
          anchorEl={jailMenuAnchorEl}
          open={Boolean(jailMenuAnchorEl)}
          onClose={handleJailMenuClose}
        >
          {jails.map((jail, index) => (
            <MenuItem 
              key={index} 
              onClick={handleJailMenuClose}
              sx={{ fontFamily: "'Richsten', sans-serif", fontSize: '1.8rem' }}
            >
              {jail.name}
            </MenuItem>
          ))}
        </Menu>
        <Button color="inherit" sx={buttonStyle} onClick={() => setIsAttorneysPopupOpen(true)}>-Attorneys-</Button>
        <Button color="inherit" sx={buttonStyle} onClick={() => setIsContactPopupOpen(true)}>-Contact-</Button>
=======
        <Typography variant="h1" color="inherit" component="div" sx={{ flexGrow: 1, textShadow: '0 0 8px #808080' }}>
          Freedom Path Bail Bonds
        </Typography>
        {/* Update each Button's onClick to properly manage the popup for the Inmate Search */}
        <Button color="inherit" href="/" sx={buttonStyle}>-Home-</Button>
        {/* Inmate Search button now toggles the popup */}
        <Button color="inherit" sx={buttonStyle} onClick={() => setIsPopupOpen(true)}>-Inmate Search-</Button>
        <Button color="inherit" href="/jails" sx={buttonStyle}>-Jails-</Button>
        <Button color="inherit" href="/attorneys" sx={buttonStyle}>-Attorneys-</Button>
        <Button color="inherit" href="/contact" sx={buttonStyle}>-Contact-</Button>
>>>>>>> 9a2b2eaa0a8e500f6a70afb8a16c5f0cdf9d5871
        <Typography variant="button" sx={{ ...buttonStyle, flexGrow: 0, marginLeft: theme.spacing(2) }}>
          (949) 872-6504
        </Typography>
      </Toolbar>
<<<<<<< HEAD
      <InmateSearchPopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <AttorneysPopup open={isAttorneysPopupOpen} onClose={() => setIsAttorneysPopupOpen(false)} />
      <ContactPopup open={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} /> {/* Add the ContactPopup */}
=======
      {/* Place the InmateSearchPopup outside the Toolbar but inside AppBar */}
      <InmateSearchPopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
>>>>>>> 9a2b2eaa0a8e500f6a70afb8a16c5f0cdf9d5871
    </AppBar>
  );
}

export default Navbar;
