import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import  logoImg from '../assets/finelinelogo.svg';

const logoStyle = {
  width: '140px',
  height: 'auto',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="https://finelinelasercutting.com/">Fine Line Laser Cutting&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row'},
          justifyContent: {xs: 'center', md: 'space-between'},
          alignItems: {xs: 'center', md: 'flex-start'},
          pt: { xs: 2, sm: 4 },
          width: '100%',
        }}
      >
        <Box sx={{ ml: '-15px' }}>
          <img
            src={logoImg}
            style={logoStyle}
            alt="logo of Fine Line Laser Cutting"
          />
        </Box>
        <Box sx={{ textAlign: { xs: 'center', md: 'left' }, alignSelf: 'center' }}>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            5706 W Missouri Ave, Suite 1100 <br />

            Glendale, AZ 85301
          </Typography>
          <Copyright />
        </Box>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
            mt: { xs: 2, md: 2 },
          }}
        >
          <IconButton
            color="inherit"
            href="https://www.facebook.com/people/Fine-Line-Laser-Cutting-Inc/100057304846181/"
            aria-label="FaceBook"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
