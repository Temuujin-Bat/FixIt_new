// MUI
import { Container } from "@mui/material";

// Components
import { PastEventDetailsInformation } from "../index";
import { TEvent } from "../type";

export default function PastEventDetailsPage({ event }: { event: TEvent }) {
  return (
    <Container maxWidth="md">
      <PastEventDetailsInformation event={event} />
    </Container>
  );
}
