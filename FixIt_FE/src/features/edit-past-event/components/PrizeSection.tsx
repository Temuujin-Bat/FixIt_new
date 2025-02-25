// MUI
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { TextField, Box, Typography, Switch } from "@mui/material";

// Components
import { DBEventModel } from "../type";

export default function PrizeSection({
  formData,
  setFormData,
}: {
  formData: DBEventModel;
  setFormData: React.Dispatch<React.SetStateAction<DBEventModel>>;
}) {
  const { event_isPrizedEvent, event_prize_title, event_prize_subtitle } =
    formData;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover": {
            borderColor: "primary.main",
            cursor: "pointer",
          },
        }}
        onClick={() =>
          setFormData((prev) => ({
            ...formData,
            event_isPrizedEvent: !prev.event_isPrizedEvent,
          }))
        }
      >
        <Typography
          variant={event_isPrizedEvent ? "subtitle1" : "subtitle1"}
          color={event_isPrizedEvent ? "primary.main" : "text.secondary"}
        >
          {event_isPrizedEvent ? "יש פרס" : "האם יש פרס?"}
        </Typography>
        <Switch checked={event_isPrizedEvent} color="primary" />
      </Box>

      {event_isPrizedEvent && (
        <Grid container spacing={1}>
          <Grid xs={12}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle2" ml={"10px"}>
                פרס למקום הראשון
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
              type="text"
              fullWidth
              placeholder="הקלד פרס"
              value={event_prize_title}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  event_prize_title: e.target.value,
                }))
              }
            />
          </Grid>

          <Grid xs={12}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle2" ml={"10px"}>
                פרטים על הפרס
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
              multiline
              rows={4}
              fullWidth
              placeholder="הקלד פרטים על הפרס"
              value={event_prize_subtitle}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  event_prize_subtitle: e.target.value,
                }))
              }
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
