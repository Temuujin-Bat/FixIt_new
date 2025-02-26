import { useState } from 'react';

// MUI
import { Clear, Menu, } from '@mui/icons-material';
import { Box, Drawer, Icon, IconButton, MenuItem, Typography, } from '@mui/material';

// Third party
import { useNavigate } from 'react-router-dom';

// Components
import { NAVBAR_MENUS } from '../../../data/constants';

const NavbarMenu = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNavigation = (url: string) => {
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
      setTimeout(() => {
        navigate(url);
      }, 500);
    } else {
      navigate(url);
    }
  };

  return (
    <>
      <IconButton
        onClick={() => {
          setIsDrawerOpen(!isDrawerOpen);
        }}
        sx={{
          color: 'gray.darker',
          border: '1px solid',
          borderColor: 'gray.light'
        }}
      >
        <Menu />
      </IconButton>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{
          sx: { backgroundColor: 'grey.200', width: 350, boxShadow: 3 },
        }}
        closeAfterTransition={false}
      >
        <Icon
          onClick={() => setIsDrawerOpen(false)}
          sx={{ p: 3, '&:hover': { cursor: 'pointer' } }}
        >
          <Clear />
        </Icon>

        <Box sx={{ p: 3 }}>
          {NAVBAR_MENUS.map((page) =>
            <MenuItem
              key={page.name}
              onClick={() => handleNavigation(page.url)}
              sx={{
                py: 2,
                borderBottom: '1px solid',
                borderColor: 'grey.400',
                transition: 'border-color 0.3s ease',
                '&:hover': {
                  borderBottom: '2px solid',
                  borderBottomColor: 'primary.main',
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: 'text.primary',
                  transition: 'color 0.3s ease, border-color 0.3s ease',
                }}
              >
                {page.name}
              </Typography>
            </MenuItem>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default NavbarMenu;



