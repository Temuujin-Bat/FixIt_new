// MUI
import { Box, Button, Stack, Typography } from "@mui/material";

// Components
import { TAppointmentsProp } from "../type";

const UserAppointments = ({ appointments }: TAppointmentsProp) => {
  return (
    <>
      {appointments.map((appointment) => (
        <Box key={appointment.id}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Stack>
              <Typography>{appointment.date}</Typography>
              <Typography></Typography>
              <Typography></Typography>
            </Stack>
          </Box>

          <Button></Button>
        </Box>
      ))}
    </>
  );
};

export { UserAppointments };
