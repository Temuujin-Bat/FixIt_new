// MUI
import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box';

// Components
import Navbar from './Navbar';

const ApplicationBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        height: '64px',
        borderBottom: '1px solid',
        borderColor: 'secondary.lighter'
      }}
    >
      <Toolbar
        sx={{
          position: 'static',
        }}
        disableGutters
      >
        <Navbar />
      </Toolbar>
    </Box>
  );
};

export { ApplicationBar };
