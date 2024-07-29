import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import MuiLink from '@mui/material/Link';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Tooltip } from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import FlareIcon from '@mui/icons-material/FlareSharp';


import Contact from './pages/Contact';
import About from './pages/About';
import Album from './Album';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';

import  logoImg from './assets/finelinelogo.svg';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};
// import { ReactComponent as AppIcon } from './assets/finelinelogo.svg';

export default function AppHeaderBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <AppBar         
    position="fixed"
    sx={{
      boxShadow: 0,
      bgcolor: 'transparent',
      backgroundImage: 'none',
      mt: 2,
    }} 
    >
    <Toolbar disableGutters>
      <Tooltip title="Fine Line Laser Cutting" className='App-header-logo'>
      {/* <IconButton
        href="/"
        size="large"
        edge="start"
        color="white"
        aria-label="Fine Line Laser Cutting"
        sx={{ mr: 2 }}
      >
        <FlareIcon style={{ color: "white" }}/>
      </IconButton> */}

        <img src={logoImg} alt="FineLineLaser Logo" sx={{ maxHeight: 100, maxWidth: 100 }}/>

      </Tooltip>

      <Button color="inherit" href='/contact'>Contact Us</Button>
      <Button color="inherit" href='/about' target='_self'>About</Button>
      <Button color="inherit">Portfolio</Button>
    </Toolbar>
  </AppBar>
  );
}
AppHeaderBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};
