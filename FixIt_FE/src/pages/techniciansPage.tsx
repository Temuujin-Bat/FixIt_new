// MUI
import { Box, Container } from "@mui/material";

// Components
import { NavigateToContactUsButton } from "../features/contact-us";
import { ScrollToBottomButton } from "../components/scroll";
import { Technicians, TechniciansTitle } from "../features/technicians";
import { Divider } from "../components";

export default function TechniciansPage() {
  return (
    <Container maxWidth="lg" sx={{ mb: 5 }}>
      <TechniciansTitle title="טכנאים" />
      <Technicians />

      <Box mt={5}>
        <Divider />
      </Box>

      <ScrollToBottomButton />
      <NavigateToContactUsButton
        category="Tech"
        title="רוצים לפרסם את עצמכם ברשימה? מכירים טכנאי מדהים?"
      />
    </Container>
  );
}
