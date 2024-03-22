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
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <img src="set-free-icon.png" alt="logo" style={{ marginRight: theme.spacing(2), height: '11vh' }} />
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
        <Typography variant="button" sx={{ ...buttonStyle, flexGrow: 0, marginLeft: theme.spacing(2) }}>
          (949) 872-6504
        </Typography>
      </Toolbar>
      <InmateSearchPopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <AttorneysPopup open={isAttorneysPopupOpen} onClose={() => setIsAttorneysPopupOpen(false)} />
      <ContactPopup open={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
    </AppBar>
  );
}
export default Navbar;