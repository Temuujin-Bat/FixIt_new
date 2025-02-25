// MUI
import { Container } from "@mui/material";

// Components
import { AddEvent } from "..";
import { ScrollToTop } from "../../../components/scroll";

export default function AddEventPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <AddEvent />

      <ScrollToTop />
    </Container>
  );
}
