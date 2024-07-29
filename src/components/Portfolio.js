import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ImageCarousel from './ImageCarousel';

// import { useTheme } from '@mui/system';



export default function Portfolio() {
  // const theme = useTheme();


  return (
    <Container
    id="portfolio"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pt: { xs: 10, sm: 12 },
      pb: { xs: 8, sm: 12 },
    }}
    >
    <Typography
        component="h2"
        variant="h2"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Portfolio
      </Typography>
      <Grid container spacing={2}
              sx={{
                width: { sm: '100%', md: '80%' },
                textAlign: { sm: 'left', md: 'center' },
                // mt: { xs: 8, sm: 10 },
                alignSelf: 'center',
              }}>
          <ImageCarousel />
      </Grid>
    </Container>
  );
}
