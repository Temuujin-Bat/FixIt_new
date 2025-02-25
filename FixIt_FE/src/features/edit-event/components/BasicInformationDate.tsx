import { useState } from "react";

// MUI
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Box,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AccessTime, CalendarMonth } from "@mui/icons-material";
import { MobileDatePicker, PickersLocaleText } from "@mui/x-date-pickers";

// Third party
import moment from "moment-timezone";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/he";

// Components
import { CustomTextFieldLabel } from "../../../components/form";
import { DBEventModel } from "../type";

export default function BasicInformationDate({
  formData,
  setFormData,
}: {
  formData: DBEventModel;
  setFormData: React.Dispatch<React.SetStateAction<DBEventModel>>;
}) {
  const { event_start, event_end } = formData;

  const initialStartDate = event_start
    ? moment(event_start).tz("Asia/Jerusalem").toDate()
    : null;
  const initialEndDate = event_end
    ? moment(event_end).tz("Asia/Jerusalem").toDate()
    : null;

  const initialStartTime = event_start
    ? moment(event_start).tz("Asia/Jerusalem").format("HH:mm")
    : "";
  const initialEndTime = event_end
    ? moment(event_end).tz("Asia/Jerusalem").format("HH:mm")
    : "";

  const [selectedStartDate, setSelectedStartDate] = useState<Dayjs | null>(
    initialStartDate ? dayjs(initialStartDate) : null
  );

  const [selectedEndDate, setSelectedEndDate] = useState<Dayjs | null>(
    initialEndDate ? dayjs(initialEndDate) : null
  );

  const [selectedStartTime, setSelectedStartTime] =
    useState<string>(initialStartTime);
  const [selectedEndTime, setSelectedEndTime] =
    useState<string>(initialEndTime);

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedStartDate(date);

    setSelectedEndDate((prev) =>
      prev && date && date.isAfter(prev) ? prev : date
    );

    if (date && selectedStartTime) {
      const [hour, minute] = selectedStartTime.split(":");
      const eventDateTime = moment(date.toDate())
        .set("hour", parseInt(hour))
        .set("minute", parseInt(minute))
        .tz("Asia/Jerusalem")
        .format("YYYY-MM-DDTHH:mm:ssZ");

      setFormData((prev) => ({
        ...prev,
        event_start: eventDateTime,
      }));
    }

    if (date && selectedEndTime) {
      const [hour, minute] = selectedEndTime.split(":");
      const eventDateTime = moment(date.toDate())
        .set("hour", parseInt(hour))
        .set("minute", parseInt(minute))
        .tz("Asia/Jerusalem")
        .format("YYYY-MM-DDTHH:mm:ssZ");

      setFormData((prev) => ({
        ...prev,
        event_end: eventDateTime,
      }));
    }
  };

  const handleStartTimeChange = (event: SelectChangeEvent<string>) => {
    const newTime = event.target.value;
    setSelectedStartTime(newTime);

    setSelectedEndTime("");
    setFormData((prev) => ({
      ...prev,
      event_end: "",
    }));

    if (selectedStartDate && newTime) {
      const [hour, minute] = newTime.split(":");
      const eventDateTime = moment(selectedStartDate.toDate())
        .set("hour", parseInt(hour))
        .set("minute", parseInt(minute))
        .tz("Asia/Jerusalem")
        .format("YYYY-MM-DDTHH:mm:ssZ");

      setFormData((prev) => ({
        ...prev,
        event_start: eventDateTime,
      }));
    }
  };

  const handleEndTimeChange = (event: SelectChangeEvent<string>) => {
    const newTime = event.target.value;
    setSelectedEndTime(newTime);

    if (selectedEndDate && newTime) {
      const [hour, minute] = newTime.split(":");
      const eventDateTime = moment(selectedEndDate.toDate())
        .set("hour", parseInt(hour))
        .set("minute", parseInt(minute))
        .tz("Asia/Jerusalem")
        .format("YYYY-MM-DDTHH:mm:ssZ");

      setFormData((prev) => ({
        ...prev,
        event_end: eventDateTime,
      }));
    }
  };

  const timeOptions = Array.from({ length: 34 }, (_, i) => {
    const hour = (7 + Math.floor(i / 2)).toString().padStart(2, "0");
    const minute = i % 2 === 0 ? "00" : "30";
    return `${hour}:${minute}`;
  });

  return (
    <>
      <Grid xs={12}>
        <CustomTextFieldLabel title="תאריך אירוע" />

        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="he"
          localeText={customPtBRLocaleText}
        >
          <MobileDatePicker
            value={selectedStartDate}
            onChange={handleDateChange}
            minDate={dayjs()}
            maxDate={dayjs().add(2, "month")}
            slotProps={{
              textField: {
                sx: {
                  width: "100%",
                },
                InputProps: {
                  disabled: false,
                  endAdornment: (
                    <InputAdornment
                      sx={{
                        cursor: "pointer",
                        "&:hover": { color: "primary.main" },
                      }}
                      position="end"
                    >
                      <CalendarMonth />
                    </InputAdornment>
                  ),
                },
              },
              dialog: {
                disablePortal: true,
              },
            }}
          />
        </LocalizationProvider>
      </Grid>

      <Grid xs={6} sm={6}>
        <Box>
          <CustomTextFieldLabel title="שעת התחלה" />

          <FormControl fullWidth>
            <Select
              value={selectedStartTime}
              onChange={handleStartTimeChange}
              displayEmpty
              startAdornment={
                <InputAdornment position="start">
                  <AccessTime />
                </InputAdornment>
              }
            >
              <MenuItem value="" disabled>
                בחר שעה ודקות
              </MenuItem>
              {timeOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>

      <Grid xs={6} sm={6}>
        <Box>
          <CustomTextFieldLabel title="שעת סיום" />

          <FormControl fullWidth>
            <Select
              value={selectedEndTime}
              onChange={handleEndTimeChange}
              displayEmpty
              startAdornment={
                <InputAdornment position="start">
                  <AccessTime />
                </InputAdornment>
              }
            >
              <MenuItem value="" disabled>
                בחר שעה ודקות
              </MenuItem>
              {timeOptions
                .filter((option) => {
                  if (!selectedStartTime) return true;
                  return moment(option, "HH:mm").isAfter(
                    moment(selectedStartTime, "HH:mm")
                  );
                })
                .map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
    </>
  );
}

const customPtBRLocaleText: Partial<PickersLocaleText<any>> = {
  okButtonLabel: "אישור",
  cancelButtonLabel: "ביטול",
};
