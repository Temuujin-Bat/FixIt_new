// MUI
import { Container } from '@mui/material';

// Components
import Logo from './Logo';
import NavbarMenu from './NavbarMenu';

export default function Navbar() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Logo />

      <NavbarMenu />
    </Container>
  );
}
