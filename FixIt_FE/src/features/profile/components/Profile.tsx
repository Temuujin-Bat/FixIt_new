// MUI
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/material";

// Components
import {
  ChangePassword,
  PhotoName,
  UserInfo,
  DeleteAccount,
  PlayerInfo,
} from "../index";
import { getUserData } from "../../../store/authenticate/selectors";

export default function Profile() {
  const { userInfo } = getUserData();

  return (
    <Grid container spacing={3} sx={{ mt: "20px" }}>
      <Grid xs={12} sm={12} md={12} lg={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Change Password */}
          <ChangePassword />

          {/* Delete Account */}
          <DeleteAccount userInfo={userInfo} />
        </Box>
      </Grid>

      {/* Photo and Full Name */}
      <Grid xs={12} sm={12} md={12} lg={12}>
        <PhotoName userInfo={userInfo} />
      </Grid>
      {/* Account Info */}
      <Grid xs={12} sm={12} md={12} lg={12}>
        <UserInfo userInfo={userInfo} />
      </Grid>
      {/* Profile Info */}
      <Grid xs={12} sm={12} md={12} lg={12}>
        <PlayerInfo userInfo={userInfo} />
      </Grid>
    </Grid>
  );
}
