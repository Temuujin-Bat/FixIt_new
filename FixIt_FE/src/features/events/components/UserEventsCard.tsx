import { useState } from "react";

// MUI
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Paper } from "@mui/material";

// Components
import {
  UserEventsCardInfo,
  UserEventsCardActions,
  UserEventsRegisteredPlayers,
  UserEventsCardRegisteredPlayers,
} from "../index";
import { TEvent } from "../type";

export default function UserEventsCard({ event }: { event?: TEvent }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Box sx={{ mb: 4 }}>
      <Grid
        elevation={5}
        component={Paper}
        container
        borderRadius={isOpen ? "20px 20px 0px 0px" : "20px"}
      >
        <UserEventsCardInfo event={event} />

        <UserEventsCardActions event={event} />

        <UserEventsCardRegisteredPlayers
          isOpen={isOpen}
          event={event}
          setIsOpen={setIsOpen}
        />
      </Grid>

      <UserEventsRegisteredPlayers isOpen={isOpen} event={event} />
    </Box>
  );
}
