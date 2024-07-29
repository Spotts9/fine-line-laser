import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import MuiLink from '@mui/material/Link';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Tooltip } from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import FlareIcon from '@mui/icons-material/FlareSharp';
import Box from '@mui/material/Box';

import FacebookIcon from '@mui/icons-material/Facebook';


import Contact from './pages/Contact';
import About from './pages/About';
import Album from './Album';
import Copyright from './Copyright';

export default function AppFooter() {

  return (
    <Box sx={{ bgcolor: 'background.paper', p: 4 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Fine Line Laser Cutting<> <br/></>
        <IconButton
          href="https://www.facebook.com/people/Fine-Line-Laser-Cutting-Inc/100057304846181/"
          size="large"
          edge="start"
          color="primary"
          aria-label="Fine Line Laser Cutting Facebook"
          sx={{ mr: 2 }}
        >
          <FacebookIcon/>
        </IconButton>
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        5706 W Missouri Ave, Suite 1100 <br/>

        Glendale, AZ 85301
      </Typography>
      <Copyright />
    </Box>
  );
}
