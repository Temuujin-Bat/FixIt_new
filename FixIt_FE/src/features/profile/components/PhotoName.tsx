// MUI
import { Box, Paper } from "@mui/material";

// Components
import { EditPhoto, EditName } from "../index";
import { IUSER } from "../../../types";

export default function PhotoName({ userInfo }: { userInfo: IUSER }) {
  return (
    <Paper elevation={4} sx={{ borderRadius: "20px" }}>
      {/* Photo */}
      <Box sx={{ borderBottom: "1px solid rgba(0, 0, 0, .1)" }}>
        <EditPhoto userInfo={userInfo} />
      </Box>

      {/* Full Name */}
      <EditName userInfo={userInfo} />
    </Paper>
  );
}
