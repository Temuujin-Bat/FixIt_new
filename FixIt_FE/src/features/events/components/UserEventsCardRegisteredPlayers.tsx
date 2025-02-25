// MUI
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowDown } from "@mui/icons-material";

// Components
import { TEvent } from "../type";

type UserEventsRegisteredPlayersProps = {
  isOpen: boolean;
  event?: TEvent;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UserEventsRegisteredPlayers({
  isOpen,
  event,
  setIsOpen,
}: UserEventsRegisteredPlayersProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <IconButton
        sx={{ padding: "20px", mt: { xs: "-20px", md: "0px" } }}
        onClick={() => setIsOpen && setIsOpen(!isOpen)}
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
  );
}
