// MUI
import { Box, Container } from '@mui/material';

// Third party
import { Outlet, useLocation } from 'react-router-dom';

// Components
import { OpenArenas, ArenasTitle } from '../features/arenas';
import { ScrollToBottomButton } from '../components/scroll';
import { NavigateToContactUsButton } from '../features/contact-us';
import { Divider } from '../components';

export default function ArenasPage() {
  const location = useLocation();

  return (
    <Box mb={5}>
      {location.pathname === '/arenas' && (
        <Container maxWidth="lg">
          <ArenasTitle text="זירות פתוחות" />
          <OpenArenas />

          <Box mt={5}>
            <Divider />
          </Box>

          {/* <ArenasTitle text="זירות מוסדרות" />
            <OfficialArenas />

            <ArenasDivider />

            <ArenasTitle text="זירות קבוצתיות" />
            <TeamArenas />

            <ArenasDivider /> */}

          <ScrollToBottomButton />
          <NavigateToContactUsButton
            category="Arenas"
            title="הוסיפו את הזירה שלכם ואפשרו לקבוצות אחרות לתאם מולכם משחקים(אין צורך לחשוף את מיקום הזירה)"
          />
        </Container>
      )}

      <Outlet />
    </Box>
  );
}
