// MUI
import { Box, Container } from "@mui/material";

// Components
import { ScrollToBottomButton } from "../components/scroll";

export default function HomePage() {
  return (
    <Box mb={5}>
      <Container maxWidth={"lg"}>
        <ScrollToBottomButton />
      </Container>
    </Box>
  );
}
