import { useState } from "react";

// MUI
import {
  Typography,
  TextField,
  Box,
  InputAdornment,
  IconButton,
  Stack,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";

// Hooks
import { useValidation } from "../../../hooks/useValidation";
import { useSetPasswordAfterResetAPI } from "../../../hooks/API/welcome";

// Third party
import { useLocation } from "react-router-dom";

// Components
import { PasswordCriteria } from "../../../components/form";
import { hashPassword } from "../../../utils/helpers/common.helper";
import ErrorMessagesField from "../../../components/form/ErrorMessagesField";

export default function SetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [comparePasswordError, setComparePasswordError] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const resetToken = queryParams.get("resetToken");

  const { validatePassword, comparePasswords } = useValidation();

  const { mutate: setPasswordAPI, isPending } = useSetPasswordAfterResetAPI();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!comparePasswords(password, confirmPassword)) {
      setComparePasswordError(true);
      return;
    }

    if (!validatePassword(password)) {
      return;
    }

    const hashedPassword = hashPassword(password);

    if (resetToken) {
      setPasswordAPI({ password: hashedPassword, resetToken });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: "100%" }}>
      <Box>
        <ErrorMessagesField comparePasswordError={comparePasswordError} />

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle2" mr={"10px"}>
            סיסמה חדשה
          </Typography>
          <Typography variant="subtitle2" color={"error"} marginRight={"1px"}>
            *
          </Typography>
        </Box>

        <TextField
          type={showPassword ? "text" : "password"}
          required
          autoComplete="password"
          placeholder="הקלדת סיסמה חדשה"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={password.length > 0 && !validatePassword(password)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                  sx={{ p: 1 }}
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ fontSize: ".8em" }} />
                  ) : (
                    <Visibility sx={{ fontSize: ".8em" }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <PasswordCriteria
        isInvalid={!validatePassword(password)}
        password={password}
      />

      <Stack sx={{ mt: "15px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle2" mr={"10px"}>
            אימות סיסמה חדשה
          </Typography>
          <Typography variant="subtitle2" color={"error"} marginRight={"1px"}>
            *
          </Typography>
        </Box>
        <TextField
          fullWidth
          type={showConfirmPassword ? "text" : "password"}
          placeholder="אימות סיסמה חדשה"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={comparePasswordError}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  edge="end"
                  sx={{ p: 1 }}
                >
                  {showConfirmPassword ? (
                    <VisibilityOff sx={{ fontSize: ".8em" }} />
                  ) : (
                    <Visibility sx={{ fontSize: ".8em" }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <LoadingButton
        loading={isPending}
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          height: "3em",
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.light",
          },
          borderRadius: "100px",
          mt: 3,
        }}
      >
        <Typography variant="subtitle1" color={"common.white"}>
          איפוס
        </Typography>
      </LoadingButton>
    </Box>
  );
}
