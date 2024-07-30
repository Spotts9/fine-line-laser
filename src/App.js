import * as React from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom';
import { Routes,  Route } from 'react-router-dom';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';


import Landing from './Landing';
import ContactUs from './components/Contact';
import AboutUs from './components/AboutUs';
import HeaderBar from './components/HeaderBar';

import getLPTheme from './lpTheme';
import './App.css';



// const defaultTheme = getLPTheme;

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}>Material Design 2</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};
function App() {
  const [mode, setMode] = React.useState('light');
  // const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  // const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // const toggleCustomTheme = () => {
  //   setShowCustomTheme((prev) => !prev);
  // };
  return (
    <BrowserRouter>
    <ThemeProvider theme={LPtheme}>

    <CssBaseline />
    <HeaderBar  mode={mode} toggleColorMode={toggleColorMode} />
    {/* <Hero /> */}
    <Box sx={{ bgcolor: 'background.default' }}>

    </Box>
    <Routes>
      <Route path="/" element ={<Landing />} />
      <Route path="/contact" element={<ContactUs />}/>
      <Route path="/about" element={<AboutUs />}/>
    </Routes>
      {/* <Error type="404" default /> */}
      {/* <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      /> */}
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
