// MUI
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { TextField, Stack, Box, Typography, Checkbox } from "@mui/material";
import { CheckCircle, PanoramaFishEye } from "@mui/icons-material";

// Components
import { DBEventModel } from "../type";
import { CustomTextFieldLabel } from "../../../components/form";

export default function EventFeatures({
  formData,
  setFormData,
}: {
  formData: DBEventModel;
  setFormData: React.Dispatch<React.SetStateAction<DBEventModel>>;
}) {
  const {
    event_description,
    event_rentalsInPlace,
    event_sellersInPlace,
    event_bathroomInPlace,
    event_marshalsInPlace,
    event_waterInPlace,
  } = formData;

  return (
    <Stack spacing={1}>
      <Box>
        <CustomTextFieldLabel title="פרטים נוספים" />

        <TextField
          multiline
          rows={4}
          fullWidth
          placeholder=" הקלד פרטים נוספים על הזירה, על המשחק וכו"
          value={event_description}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              event_description: e.target.value,
            }))
          }
          name="פרטים נוספים על המשחק"
        />
      </Box>

      <Typography
        variant="h5"
        color={"primary.darker"}
        sx={{ textDecoration: "underline" }}
      >
        שרותים זמינים באירוע:
      </Typography>

      <Grid container spacing={1}>
        {[
          {
            label: "ציוד להשכרה",
            checked: event_rentalsInPlace,
            key: "event_rentalsInPlace",
          },
          {
            label: "דוכן מכירות",
            checked: event_sellersInPlace,
            key: "event_sellersInPlace",
          },
          {
            label: "שירותים",
            checked: event_bathroomInPlace,
            key: "event_bathroomInPlace",
          },
          {
            label: "מארשל / שופט בזירה",
            checked: event_marshalsInPlace,
            key: "event_marshalsInPlace",
          },
          {
            label: "מי שתייה במקום",
            checked: event_waterInPlace,
            key: "event_waterInPlace",
          },
        ].map((item) => (
          <Grid xs={6} sm={4} key={item.label}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                borderRadius: "30px",
                backgroundColor: item.checked
                  ? "primary.lighter"
                  : "transparent",
                "&:hover": {
                  borderColor: "primary.main",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  [item.key]: !item.checked,
                }))
              }
            >
              <Checkbox
                icon={<PanoramaFishEye />}
                checkedIcon={<CheckCircle sx={{ color: "primary.main" }} />}
                checked={item.checked}
                onChange={() =>
                  setFormData((prev) => ({
                    ...prev,
                    [item.key]: !item.checked,
                  }))
                }
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 20,
                  },
                }}
              />
              <Typography
                variant={item.checked ? "subtitle1" : "body1"}
                color="primary.darker"
              >
                {item.checked ? `יש ${item.label}` : `יש ${item.label}?`}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
