import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Link from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://finelinelasercutting.com/">
        Fine Line Laser Cutting
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
