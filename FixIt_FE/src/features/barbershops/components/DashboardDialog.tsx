// MUI
import { AppBar, Box, Dialog, IconButton, Toolbar, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

// Components
import { TModal } from '../type';

const DashboardDialog = ({ open, onClose }: TModal) => {
  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClose}>
            <Close />
          </IconButton>
          <Typography variant="h6">Full Screen Dialog</Typography>
        </Toolbar>
      </AppBar>
      <Box p={3}>Your content here</Box>
    </Dialog>
  );
};

export { DashboardDialog };
