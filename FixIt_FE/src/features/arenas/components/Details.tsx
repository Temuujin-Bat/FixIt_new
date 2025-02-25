// MUI
import { Container } from "@mui/material";

// Hooks
import { useGetSingleOpenArenaAPI } from "../../../hooks/useOpenArenas";

// Third party
import { useParams } from "react-router-dom";

// Components
import { DetailsHeader, DetailsInformation, DetailsMap } from "..";

export default function Details() {
  const { name } = useParams();
  useGetSingleOpenArenaAPI(name ? name : "");

  return (
    <Container maxWidth="lg">
      <DetailsHeader />

      <DetailsMap />

      <DetailsInformation />
    </Container>
  );
}
