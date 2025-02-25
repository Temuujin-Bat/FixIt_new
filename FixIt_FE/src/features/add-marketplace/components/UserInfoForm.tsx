// MUI
import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  Container,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// Components
import { AirsoftReplicasTitle } from "../index";
import { TAirsoftReplicas } from "../type";

export default function UserInfoForm({
  formData,
  setFormData,
}: {
  formData: TAirsoftReplicas;
  setFormData: React.Dispatch<React.SetStateAction<TAirsoftReplicas>>;
}) {
  const { name, email, address, phone } = formData;

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const Wrapper: React.ElementType = isXsScreen ? Box : Paper;

  return (
    <Container maxWidth={"md"} sx={{ mt: { xs: 10, sm: 12 } }}>
      <Wrapper
        elevation={isXsScreen ? 0 : 10}
        sx={{
          borderRadius: isXsScreen ? "none" : "20px",
          padding: isXsScreen ? 0 : 4,
          boxShadow: isXsScreen ? "none" : undefined,
        }}
      >
        <AirsoftReplicasTitle title="פרטים ליצירת קשר" />

        <Grid container spacing={2}>
          <Grid xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle2" mr={"10px"}>
                שם מלא
              </Typography>
              <Typography
                variant="subtitle2"
                color={"error"}
                marginRight={"1px"}
              >
                *
              </Typography>
            </Box>

            <TextField
              required
              placeholder="הקלד שם מלא"
              fullWidth
              value={name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#c4c4c4",
                  },
                },
              }}
            />
          </Grid>

          <Grid xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle2" mr={"10px"}>
                מייל
              </Typography>
              <Typography
                variant="subtitle2"
                color={"error"}
                marginRight={"1px"}
              >
                *
              </Typography>
            </Box>

            <TextField
              fullWidth
              placeholder="הקלד מייל"
              value={email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#c4c4c4",
                  },
                },
              }}
            />
          </Grid>

          <Grid xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle2" mr={"10px"}>
                שם העיר לאיסוף
              </Typography>
              <Typography
                variant="subtitle2"
                color={"error"}
                marginRight={"1px"}
              >
                *
              </Typography>
            </Box>

            <TextField
              fullWidth
              placeholder="הקלד אך ורק שם העיר"
              value={address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#c4c4c4",
                  },
                },
              }}
            />
          </Grid>

          <Grid xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle2" mr={"10px"}>
                מספר טלפון
              </Typography>
              <Typography
                variant="subtitle2"
                color={"error"}
                marginRight={"1px"}
              >
                *
              </Typography>
            </Box>
            <TextField
              required
              variant="outlined"
              placeholder="05X-XXXXXXX"
              value={phone}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setFormData((prevData) => ({ ...prevData, phone: value }));
                }
              }}
              inputProps={{
                maxLength: 10,
              }}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#c4c4c4",
                  },
                },
              }}
            />
          </Grid>
        </Grid>
      </Wrapper>
    </Container>
  );
}
