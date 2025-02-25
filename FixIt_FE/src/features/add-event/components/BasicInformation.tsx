import React from "react";

// MUI
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Stack, TextField, Typography } from "@mui/material";

// Third party
import "dayjs/locale/he";

// Components
import { DBEventModel } from "../type";
import { CustomTextFieldLabel } from "../../../components/form";
import {
  BasicInformationPublic,
  BasicInformationPublished,
  BasicInformationRegister,
  EventFeatures,
} from "..";

export default function BasicInformation({
  formData,
  setFormData,
}: {
  formData: DBEventModel;
  setFormData: React.Dispatch<React.SetStateAction<DBEventModel>>;
}) {
  const { event_title, event_subtitle, event_facebookLink } = formData;

  return (
    <Grid container spacing={1}>
      <Grid xs={12}>
        <Stack spacing={1}>
          <Box>
            <CustomTextFieldLabel title="שם \ כותרת" />

            <TextField
              fullWidth
              placeholder="הקלד כותרת לאירוע"
              value={event_title}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  event_title: e.target.value,
                }))
              }
            />
          </Box>

          <Box>
            <CustomTextFieldLabel title="תיאור האירוע" />

            <TextField
              multiline
              rows={3}
              fullWidth
              placeholder="הקלד תיאור קצר שיופיע מתחת לכותרת האירוע"
              value={event_subtitle}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  event_subtitle: e.target.value,
                }))
              }
            />
          </Box>
        </Stack>
      </Grid>

      <Grid xs={12}>
        <EventFeatures formData={formData} setFormData={setFormData} />
      </Grid>

      <Grid xs={12} md={6} sx={{ mt: 2 }}>
        <Typography variant="subtitle2" ml={"10px"}>
          קישור לפייסבוק
        </Typography>
        <TextField
          type="text"
          fullWidth
          placeholder="הקלד קישור לפייסבוק"
          value={event_facebookLink}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              event_facebookLink: e.target.value,
            }))
          }
        />
      </Grid>

      <Grid xs={12}>
        <BasicInformationPublic formData={formData} setFormData={setFormData} />
      </Grid>

      <Grid xs={12}>
        <BasicInformationRegister
          formData={formData}
          setFormData={setFormData}
        />
      </Grid>

      <Grid xs={12}>
        <BasicInformationPublished
          formData={formData}
          setFormData={setFormData}
        />
      </Grid>
    </Grid>
  );
}
