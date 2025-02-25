// MUI
import { Box, Typography, Paper, Stack, Link } from "@mui/material";

// Components
import { IUSER } from "../../../types";

export default function UserInfoButton({
  userInfo,
  isOpen,
  setIsOpen,
}: {
  userInfo: IUSER;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <Paper elevation={4} sx={{ borderRadius: "20px" }}>
      {/* Account Info */}
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
        <Typography variant="subtitle1">פרטים אישיים</Typography>
        <Link
          sx={{
            textDecoration: "none",
            color: "primary.dark",
            "&:hover": {
              cursor: "pointer",
              color: "primary.main",
              textDecoration: "underline",
            },
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Typography variant="body1">ערוך פרטים אישיים</Typography>
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
          <Typography variant="body1">כתובת:</Typography>
          <Typography variant="subtitle2">
            {userInfo?.address ? userInfo?.address : "מידע לא הוזן"}
          </Typography>
        </Stack>
      </Link>

      <Link
        underline="none"
        sx={{
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgba(0, 0, 0, .1)",
          },
          borderBottom: "1px solid rgba(0, 0, 0, .1)",
        }}
      >
        <Stack>
          <Typography variant="body1">מספר טלפון:</Typography>
          <Typography variant="subtitle2">
            {userInfo?.phone ? userInfo?.phone : "מידע לא הוזן"}
          </Typography>
        </Stack>
      </Link>

      <Link
        underline="none"
        sx={{
          padding: "15px",
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
          <Typography variant="body1">מייל:</Typography>
          <Typography variant="subtitle2">{userInfo?.email}</Typography>
        </Stack>
      </Link>
    </Paper>
  );
}
