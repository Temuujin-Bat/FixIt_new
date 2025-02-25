// MUI
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Avatar, Typography, Link, Box, Stack } from "@mui/material";

// Components
import { IUSER } from "../../../types";
import { PROFILE_PHOTOS_URL } from "../../../data/constants";

export default function EditPhotoButton({
  userInfo,
  isOpen,
  setIsOpen,
}: {
  userInfo: IUSER;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <Grid container>
      {/* Avatar */}
      <Grid xs={4} sm={4} md={4} lg={4} padding={"15px"}>
        <Box sx={{ height: "100%", width: "100%" }}>
          {userInfo?.avatarFile ? (
            <Avatar
              src={`${PROFILE_PHOTOS_URL}${userInfo?.avatarFile}`}
              sx={{
                height: {
                  xs: "100px",
                },
                width: {
                  xs: "100px",
                },
                backgroundColor: "primary.darker",
              }}
            />
          ) : (
            <Avatar
              sx={{
                height: {
                  xs: "120px",
                },
                width: {
                  xs: "120px",
                },
                backgroundColor: "primary.darker",
              }}
            />
          )}
        </Box>
      </Grid>

      {/* Information */}
      <Grid xs={8} sm={8} md={8} lg={8} padding={"15px"}>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography variant="body2">
            התמונה פרופיל שלך תופיע בחשבונך ב-IsraelAirsoft. כך תוכל להתאים את
            החשבון שלך בצורה אישית יותר.
          </Typography>

          <Link underline="none" onClick={() => setIsOpen(!isOpen)}>
            <Typography
              variant="subtitle2"
              sx={{
                border: "2px solid",
                borderColor: "primary.main",
                display: "inline-block",
                padding: "5px 10px",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  backgroundColor: "primary.light",
                  color: "white",
                  cursor: "pointer",
                },
              }}
            >
              הוספת תמונה
            </Typography>
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
}
