// MUI
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Stack, TextField, Typography } from "@mui/material";

// Components
import { DBEventModel } from "../type";

export default function CreatorInfo({
  formData,
  setFormData,
}: {
  formData: DBEventModel;
  setFormData: React.Dispatch<React.SetStateAction<DBEventModel>>;
}) {
  const { contact_name, contact_email, contact_phoneNumber } = formData;

  return (
    <Grid container spacing={1}>
      <Grid xs={12} sm={12} md={12} lg={12}>
        <Stack spacing={1}>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle2" ml={"10px"}>
                שם המארגן
              </Typography>
              <Typography
                variant="subtitle2"
                color={"error"}
                marginLeft={"1px"}
              >
                *
              </Typography>
            </Box>

            <TextField
              fullWidth
              placeholder="הקלד שם המארגן"
              value={contact_name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  contact_name: e.target.value,
                }))
              }
            />
          </Box>

          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle2" ml={"10px"}>
                מייל
              </Typography>
              <Typography
                variant="subtitle2"
                color={"error"}
                marginLeft={"1px"}
              >
                *
              </Typography>
            </Box>

            <TextField
              fullWidth
              placeholder="הקלד מייל"
              value={contact_email}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  contact_email: e.target.value,
                }))
              }
            />
          </Box>

          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle2" ml={"10px"}>
                טלפון ליצירת קשר
              </Typography>
              <Typography
                variant="subtitle2"
                color={"error"}
                marginLeft={"1px"}
              >
                *
              </Typography>
            </Box>

            <TextField
              fullWidth
              placeholder="05X-XXXXXXX"
              value={contact_phoneNumber}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setFormData((prev) => ({
                    ...prev,
                    contact_phoneNumber: e.target.value,
                  }));
                }
              }}
              name="מספר טלפון"
              inputProps={{
                maxLength: 10,
              }}
            />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
