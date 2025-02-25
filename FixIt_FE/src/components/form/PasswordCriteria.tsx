// MUI
import { Typography } from "@mui/material";

export default function PasswordCriteria({
  isInvalid,
  password,
}: {
  isInvalid: boolean;
  password: string;
}) {
  return (
    <Typography
      variant="caption"
      sx={{ color: isInvalid && password.length > 0 ? "error.main" : "" }}
    >
      הסיסמה חייבת להכיל לפחות 8 תווים.
    </Typography>
  );
}
