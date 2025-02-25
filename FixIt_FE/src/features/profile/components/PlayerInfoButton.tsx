// MUI
import { Box, Typography, Paper, Stack, Link } from "@mui/material";

// Components
import { IUSER } from "../../../types";

export default function PlayerInfoButton({
  userInfo,
  isOpen,
  setIsOpen,
}: {
  userInfo: IUSER;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <Paper elevation={4} sx={{ mb: "100px", borderRadius: "20px" }}>
      {/* Profile Info */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          borderBottom: "1px solid rgba(0, 0, 0, .1)",
          padding: "10px",
        }}
      >
        <Typography variant="subtitle1">פרופיל שחקן</Typography>
        <Link
          sx={{
            textDecoration: "none",
            color: "primary.dark",
            "&:hover": {
              cursor: "pointer",
              color: "primary.primary",
              textDecoration: "underline",
            },
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Typography variant="body1">ערוך פרופיל שחקן</Typography>
        </Link>
      </Box>

      <Link
        underline="none"
        sx={{
          padding: "10px 15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(0, 0, 0, .1)",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgba(0, 0, 0, .1)",
          },
        }}
      >
        <Stack>
          <Typography variant="body1">מועדון:</Typography>
          <Typography variant="subtitle2">
            {userInfo?.club ? userInfo?.club : "מידע לא הוזן"}
          </Typography>
        </Stack>
      </Link>

      <Link
        underline="none"
        sx={{
          padding: "10px 15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgba(0, 0, 0, .1)",
          },
        }}
      >
        <Stack>
          <Typography variant="body1">קבוצה:</Typography>
          <Typography variant="subtitle2">
            {userInfo?.team ? userInfo?.team : "מידע לא הוזן"}
          </Typography>
        </Stack>
      </Link>
    </Paper>
  );
}
