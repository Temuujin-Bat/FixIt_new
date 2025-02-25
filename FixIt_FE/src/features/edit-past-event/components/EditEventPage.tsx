// MUI
import { Container } from "@mui/material";

// Components
import { EditEvent } from "..";
import { ScrollToTop } from "../../../components/scroll";
import { TEvent } from "../type";

export default function EditEventPage({ event }: { event?: TEvent }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <ScrollToTop />

      {event && <EditEvent event={event} />}
    </Container>
  );
}
