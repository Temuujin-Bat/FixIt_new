// MUI
import { Box, Container } from '@mui/material';

// Components
import { GuestProfile, ProfileTitle, UserProfile } from './components';

// Hooks
import { useAuth } from '../../hooks/useAuth';

// Third party
import { Outlet, useLocation } from 'react-router-dom';


const Profile = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return (
    <>
      {
        location.pathname === '/profile' ?
          <Container maxWidth="xs">
            <Box sx={{ mt: 5, mb: 3 }}>
              <ProfileTitle text="Профайл" />
            </Box>

            {isLoggedIn() ? <UserProfile />: <GuestProfile />}
          </Container>
          :
          <Outlet />
      }
    </>

  );
};


export { Profile };