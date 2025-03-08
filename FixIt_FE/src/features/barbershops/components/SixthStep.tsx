// MUI
import { Box, Button, Typography } from "@mui/material";

// Third party
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";

// Components
import { TBarbershops } from "../../../types";

const SixthStep = ({ barber }: { barber: TBarbershops | null }) => {
  const navigate = useNavigate();
  const { watch } = useFormContext();
  const selectedWorker = watch("worker");
  const selectedService = watch("service");
  const selectedDate = watch("date");
  const selectedTime = watch("time");

  return (
    <Box textAlign="center" p={4}>
      <Typography variant="h4" color="success.main" gutterBottom>
        Амжилттай захиаллаа!
      </Typography>
      <Typography variant="body1" color="text.primary" sx={{ mt: 2 }}>
        Хэрэв танд асуулт байвал <br />
        <strong>{barber?.phone}</strong> дугаараар холбогдоорой!
      </Typography>

      <Box mt={4}>
        <Typography variant="subtitle2">
          Сонгосон ажилтан:{" "}
          <Typography variant={"body2"} component={"span"}>
            {selectedWorker?.name}
          </Typography>
        </Typography>
        <Typography variant="subtitle2">
          Сонгосон үйлчилгээ:{" "}
          <Typography variant={"body2"} component={"span"}>
            {selectedService?.name}
          </Typography>
        </Typography>
        <Typography variant="subtitle2">
          Сонгосон огноо:{" "}
          <Typography variant={"body2"} component={"span"}>
            {selectedDate}
          </Typography>
        </Typography>
        <Typography variant="subtitle2">
          Сонгосон цаг:{" "}
          <Typography variant={"body2"} component={"span"}>
            {selectedTime}
          </Typography>
        </Typography>
      </Box>

      <Button
        variant="contained"
        sx={{ mt: 3, fontWeight: "bold", color: "white" }}
        onClick={() => navigate("/appointments")}
      >
        Миний цагууд
      </Button>
    </Box>
  );
};

export { SixthStep };
