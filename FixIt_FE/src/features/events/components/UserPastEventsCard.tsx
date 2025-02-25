import { useState } from "react";

// MUI
import Grid from "@mui/material/Unstable_Grid2";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowDown } from "@mui/icons-material";

// Components
import {
  UserEventsCardInfo,
  UserEventsRegisteredPlayers,
  UserPastEventsCardActions,
} from "../index";
import { TEvent } from "../type";

export default function UserPastEventsCard({ event }: { event: TEvent }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{ mb: 4 }}>
      <Grid container borderRadius={isOpen ? "20px 20px 0px 0px" : "20px"}>
        <UserEventsCardInfo event={event} />

        <UserPastEventsCardActions event={event} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <IconButton
            sx={{ padding: "20px", mt: { xs: "-20px", md: "0px" } }}
            onClick={() => setIsOpen(!isOpen)}
            disableRipple
          >
            <Typography
              variant="subtitle1"
              color={isOpen ? "primary.main" : "inherit"}
            >
              שחקנים רשומים
            </Typography>

            {!isOpen ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowDown sx={{ color: "primary.main" }} />
            )}
          </IconButton>

          <Box sx={{ padding: "20px", mt: { xs: "-20px", md: "0px" } }}>
            {event?.isPublic && (
              <Tooltip title="האירוע ציבורי וזמין לכל המשתמשים">
                <Box
                  sx={{
                    backgroundColor: "grey.400",
                    borderRadius: { xs: "120px", sm: "20px" },
                    padding: { xs: "5px", sm: "5px 20px" },
                    "&:hover": {
                      backgroundColor: "primary.dark",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Typography color={"common.white"} variant="subtitle2">
                    ציבורי
                  </Typography>
                </Box>
              </Tooltip>
            )}
          </Box>
        </Box>
      </Grid>

      <UserEventsRegisteredPlayers isOpen={isOpen} event={event} />
    </Box>
  );
}
