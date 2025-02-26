// MUI
import { Container } from '@mui/material';

// Components
import { GuestProfile, ProfileTitle } from './profile';


const Profile = () => {
  return (
    <Container maxWidth="xs">
      <ProfileTitle />

      <GuestProfile />
    </Container>
  );
};


export { Profile };