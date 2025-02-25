// MUI
import { Box, Container, Typography } from "@mui/material";

// Components
import { NavigateToContactUsButton } from "../features/contact-us";
import { ScrollToBottomButton } from "../components/scroll";
import { Divider } from "../components";
import { AirsoftFAQS, FaqsHero } from "../features/faq";

export default function FaqPage() {
  return (
    <>
      <FaqsHero />
      <Container sx={{ pt: 10, pb: 10, position: 'relative' }}>
        <Typography color="primary" variant="h3" sx={{ mb: 5 }}>
          שאלות נפוצות
        </Typography>
          <AirsoftFAQS />

        <Box mt={5}>
          <Divider />
        </Box>

      <ScrollToBottomButton />
      <NavigateToContactUsButton
        category="Faq"
        title="להוספת שאלות או תשובות - דברו איתנו"
      />
      </Container>
      </>
  );
}
