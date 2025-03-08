// MUI
import { Stack, Typography } from "@mui/material";

// Third party
import { useFormContext } from "react-hook-form";

// Components
import { RHFTextField } from "../../../components/hookForm";
import Box from "@mui/material/Box";

const FifthStep = () => {
  const { watch } = useFormContext();
  const selectedWorker = watch("worker");
  const selectedService = watch("service");
  const selectedDate = watch("date");
  const selectedTime = watch("time");

  return (
    <Stack spacing={3}>
      <RHFTextField name="name" label="Бүтэн нэр" />

      <RHFTextField
        label="Утасны дугаар (солих боломжгүй)"
        name="phone"
        InputProps={{ readOnly: true }}
      />

      <RHFTextField
        multiline
        rows={3}
        label="Хүсэлт (шаардлагагүй)"
        name="note"
      />

      <Box>
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
    </Stack>
  );
};

export { FifthStep };
