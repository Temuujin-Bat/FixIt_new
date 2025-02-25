// MUI
import { Box, Container } from '@mui/material';

// Third party
import { Outlet, useLocation } from 'react-router-dom';

// Components
import { ArenaStores, Stores, StoresTitle } from '../features/stores';
import { ScrollToBottomButton } from '../components/scroll';
import { NavigateToContactUsButton } from '../features/contact-us';
import { Divider } from '../components';

export default function StoresPage() {
  const location = useLocation();

  return (
    <Box mb={5}>
      {location.pathname === '/stores' && (
        <Container maxWidth="lg">
          <StoresTitle title="חנויות שטח" />
          <ArenaStores />

          <Box mt={5}>
            <Divider />
          </Box>

          <StoresTitle title="חנויות" />
          <Stores />

          <Box mt={5}>
            <Divider />
          </Box>

          <ScrollToBottomButton />
          <NavigateToContactUsButton
            category="Stores"
            title="רוצים להוסיף את החנות שלכם לאתר? דברו איתנו!"
          />
        </Container>
      )}

      <Outlet />
    </Box>
  );
}
