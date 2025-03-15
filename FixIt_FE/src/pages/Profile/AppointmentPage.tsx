// MUI
import { Box, Container, Tooltip, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

// Third party
import { useNavigate } from "react-router-dom";

// Components
import { Appointments } from "../../features/appointments";
import { ProfileTitle } from "../../features/profile/components";

// Hooks
import { useGetUserAppointmentsAPI } from "../../hooks/API/appointments";

const AppointmentPage = () => {
  const navigate = useNavigate();
  const { isPending } = useGetUserAppointmentsAPI();

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container maxWidth="xs">
      <Box
        onClick={() => navigate(-1)}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mt: 5,
          mb: 3,
        }}
      >
        <Tooltip title="Буцах">
          <ArrowBack sx={{ mr: 1, "&:hover": { cursor: "pointer" } }} />
        </Tooltip>
        <ProfileTitle text="Миний цагууд" />
      </Box>

      <Typography variant="h6" sx={{ mb: 3 }}>
        Ирээдүйн цагууд
      </Typography>

      <Appointments />
    </Container>
  );
};

export default AppointmentPage;
