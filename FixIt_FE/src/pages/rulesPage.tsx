// MUI
import { Box, Container } from "@mui/material";

// Components
import { Rules, RulesTitle } from "../features/rules";
import { NavigateToContactUsButton } from "../features/contact-us";
import { ScrollToBottomButton } from "../components/scroll";
import { Divider } from "../components";

export default function RulesPage() {
  return (
    <Container maxWidth={"lg"} sx={{ mb: 5 }}>
      <RulesTitle title="חוקי משחק" />
      <Rules />

      <Box mt={5}>
        <Divider />
      </Box>

      <ScrollToBottomButton />
      <NavigateToContactUsButton
        category="Rules"
        title="רוצים להוסיף חוקי משחקים? יש לכם תיקון או הערה? דברו איתנו!"
      />
    </Container>
  );
}
