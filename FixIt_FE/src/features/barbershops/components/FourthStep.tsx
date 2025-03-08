import { useMemo } from "react";

// MUI
import { Box, Grid2, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

// Third party
import { useFormContext } from "react-hook-form";
import dayjs from "dayjs";

const FourthStep = () => {
  const { watch, setValue } = useFormContext();
  const selectedWorker = watch("worker");
  const selectedDate = watch("date");
  const selectedService = watch("service");
  const selectedTime = watch("time");

  const availableTimeSlots = useMemo(() => {
    if (!selectedWorker || !selectedDate || !selectedService) return [];

    const startTime = dayjs(`${selectedDate} ${selectedWorker.startTime}`);
    const endTime = dayjs(`${selectedDate} ${selectedWorker.endTime}`);
    const duration = selectedService.duration;

    const slots: string[] = [];

    for (
      let time = startTime;
      time.isBefore(endTime);
      time = time.add(duration, "minute")
    ) {
      slots.push(time.format("HH:mm"));
    }

    // Filter unavailable slots
    const unavailableTimes = selectedWorker.unavailable
      .filter(({ date }: { date: string }) => date === selectedDate)
      .flatMap(({ start, end }: { start: string; end: string }) => {
        const startT = dayjs(`${selectedDate} ${start}`);
        const endT = dayjs(`${selectedDate} ${end}`);
        const times = [];
        for (let t = startT; t.isBefore(endT); t = t.add(duration, "minute")) {
          times.push(t.format("HH:mm"));
        }
        return times;
      });

    // Filter booked appointments
    const bookedTimes = selectedWorker.appointments
      .filter(({ date }: { date: string }) => date === selectedDate)
      .map(({ startTime }: { startTime: string }) => startTime);

    return slots.filter(
      (slot) => !unavailableTimes.includes(slot) && !bookedTimes.includes(slot),
    );
  }, [selectedWorker, selectedDate, selectedService]);

  return (
    <Box>
      <Grid2 container spacing={2}>
        {availableTimeSlots.length > 0 ? (
          availableTimeSlots.map((time) => (
            <Grid2 size={{ xs: 3 }} key={time}>
              <Box
                onClick={() => setValue("time", time)}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid",
                  borderColor: "secondary.light",
                  borderRadius: 3,
                  padding: 1,
                  backgroundColor:
                    selectedTime === time ? "secondary.lighter" : "transparent",
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "secondary.lighter",
                  },
                }}
              >
                <AccessTime fontSize={"small"} />
                <Typography ml={1} variant="h6" fontWeight={"normal"}>
                  {time}
                </Typography>
              </Box>
            </Grid2>
          ))
        ) : (
          <Typography color="error">
            No available slots for this date.
          </Typography>
        )}
      </Grid2>
    </Box>
  );
};

export { FourthStep };
