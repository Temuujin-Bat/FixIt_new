// MUI
import { Container } from "@mui/material";

// Components
import { DetailsInformation } from "../index";
import { TEvent } from "../type";

export default function DetailsPage({ event }: { event: TEvent }) {
  return (
    <Container maxWidth="md">
      <DetailsInformation event={event} />
    </Container>
  );
}
