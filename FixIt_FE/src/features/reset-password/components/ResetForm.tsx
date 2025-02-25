import { useState } from "react";

// MUI
import { Typography, Box } from "@mui/material";

// Hooks
import { useResetPasswordAPI } from "../../../hooks/API/welcome";

// Components
import {
  CustomLoadingButton,
  CustomTextField,
  CustomTextFieldLabel,
} from "../../../components/form";

export default function ResetForm() {
  const [email, setEmail] = useState("");

  const { mutate: resetPassword, isPending, isSuccess } = useResetPasswordAPI();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    resetPassword({ email });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: "100%" }}>
      <Box>
        <CustomTextFieldLabel title="מייל" />

        <CustomTextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          autoComplete="email"
          placeholder="yourmail@email.com"
          fullWidth
        />
      </Box>

      {isSuccess && (
        <Box
          sx={{
            padding: "8px 25px",
            borderRadius: "6px",
            mt: "20px",
            backgroundColor: "primary.darker",
          }}
        >
          <Typography
            textAlign="center"
            variant="subtitle2"
            color="common.white"
          >
            אם המייל שסופק שייך למשתמש, נשלח לך קישור לאיפוס הסיסמה.
          </Typography>
        </Box>
      )}

      <CustomLoadingButton isPending={isPending} title="איפוס" />
    </Box>
  );
}
