import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';
const images = require.context('../assets/images/portfolio', false, /\.jpg$/);
const imageFiles = images.keys().map(key => images(key));


function ImageCarousel() {
  return (
    <Box sx={{ maxWidth: { xs: '100%', sm: 800 }, flexGrow: 1, ml: 1, mt: 2 }}>
      <Carousel animation='slide'>
        {imageFiles.map((image, i) => (
          <Paper key={i} elevation={10}>
            <Box
              component="img"
              sx={{
                width: '100%',
                height: '500px',
                objectFit: 'cover'
              }}
              src={image}
              alt={`Slide ${i}`}
            />
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}

export default ImageCarousel;