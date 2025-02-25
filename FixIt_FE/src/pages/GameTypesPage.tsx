// MUI
import { Box, Container, Typography } from "@mui/material";

// Components
import { NavigateToContactUsButton } from "../features/contact-us";
import { ScrollToBottomButton } from "../components/scroll";
import { Divider } from "../components";
import {AirsoftGameTypes, GameTypesHero} from "../features/game-types";

export default function FaqPage() {
  return (
    <>
      <GameTypesHero />
      <Container sx={{ pt: 10, pb: 10, position: 'relative' }}>
        <Typography color="primary" variant="h3" sx={{ mb: 5 }}>
          תרחישי משחק נפוצים
        </Typography>
          <AirsoftGameTypes />

        <Box mt={5}>
          <Divider />
        </Box>

      <ScrollToBottomButton />
      <NavigateToContactUsButton
        category="Rules"
        title="להוספת סוגי משחקים - דברו איתנו"
      />
      </Container>
      </>
  );
}
