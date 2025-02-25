// MUI
import { Box, Container } from "@mui/material";

// Components
import { ScrollToBottomButton } from "../components/scroll";
import { Rentals, RentalsTitle } from "../features/rentals";
import { Divider } from "../components";
import { NavigateToContactUsButton } from "../features/contact-us";

export default function RentalsPage() {
  return (
    <Container maxWidth="lg" sx={{ mb: 5 }}>
      <RentalsTitle title="השכרת כלים" />
      <Rentals />

      <Box mt={5}>
        <Divider />
      </Box>

      <ScrollToBottomButton />
      <NavigateToContactUsButton
        category="Rentals"
        title="רוצים לפרסם עצמכם ברשימה של השכרת כלים? דברו איתנו!"
      />
    </Container>
  );
}
