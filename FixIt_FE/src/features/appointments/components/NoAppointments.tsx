// MUI
import { Box, Button, Typography } from "@mui/material";
import { HeartBroken } from "@mui/icons-material";

// Third party
import { useNavigate } from "react-router-dom";

const NoAppointments = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "secondary.lighter",
        padding: 3,
        borderRadius: 2.5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HeartBroken
        fontSize="large"
        sx={{ mt: 5, mb: 2, color: "primary.main" }}
      />

      <Typography textAlign="center" variant="h4">
        Таны ирээдүйн цагууд байхгүй байна
      </Typography>
      <Typography
        mt={0.5}
        textAlign="center"
        variant="body1"
        color="secondary.dark"
      >
        Энд таны цагууд таны төвлөж дууссаны дараа гарч ирнэ
      </Typography>

      <Button
        onClick={() => navigate("/")}
        fullWidth
        variant="contained"
        sx={{
          boxShadow: "none",
          fontWeight: "bold",
          color: "white",
          borderRadius: 2.5,
          padding: 1.5,
          mt: 3,
        }}
      >
        Бизнес хайх
      </Button>
    </Box>
  );
};

export { NoAppointments };
