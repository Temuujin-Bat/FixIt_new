import { useState } from "react";

// MUI
import {
  Container,
  Stack,
  Typography,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";

// Third party
import { useNavigate } from "react-router-dom";

// Components
import {
  CustomTextFieldLabel,
  PasswordCriteria,
} from "../../../components/form";
import { ErrorMessagesField } from "../../../components/form";

// Hooks
import { useUpdatePasswordAPI } from "../../../hooks/API/profile";
import { useValidation } from "../../../hooks/useValidation";

export default function ChangePasswordForm() {
  const navigate = useNavigate();
  const { mutate: updatePassword, isPending } = useUpdatePasswordAPI();
  const { validatePassword, comparePasswords } = useValidation();

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const [comparePasswordError, setComparePasswordError] = useState(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!comparePasswords(newPassword, confirmNewPassword)) {
      setComparePasswordError((prev) => !prev);

      return;
    }

    if (!validatePassword(newPassword)) {
      return;
    }

    updatePassword(newPassword);
  };

  return (
    <Container
      maxWidth={"xs"}
      sx={{ mt: "60px" }}
      component={"form"}
      onSubmit={submitHandler}
    >
      {/* Title */}
      <Stack>
        <Typography variant="h3" color={"primary.main"}>
          החלפת סיסמה
        </Typography>

        <Typography variant="body2">
          סיסמה חזקה עוזרת למנוע גישה בלתי מורשית לחשבון הדואר האלקטרוני שלך.
        </Typography>
      </Stack>

      {/* New Password */}
      <Stack sx={{ mt: "15px" }}>
        <ErrorMessagesField comparePasswordError={comparePasswordError} />

        <CustomTextFieldLabel title="סיסמה חדשה" />

        <TextField
          fullWidth
          type={showNewPassword ? "text" : "password"}
          placeholder="סיסמה חדשה"
          autoComplete="new-password"
          required
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          error={newPassword.length > 0 && !validatePassword(newPassword)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowNewPassword((prev) => !prev)}
                  edge="end"
                  sx={{ p: 1 }}
                >
                  {showNewPassword ? (
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

      <PasswordCriteria
        isInvalid={!validatePassword(newPassword)}
        password={newPassword}
      />

      {/* Confirm New Password */}
      <Stack mt={1}>
        <CustomTextFieldLabel title="אימות סיסמה חדשה" />

        <TextField
          fullWidth
          autoComplete="confirm-password"
          required
          type={showConfirmNewPassword ? "text" : "password"}
          placeholder="אימות סיסמה חדשה"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmNewPassword((prev) => !prev)}
                  edge="end"
                  sx={{ p: 1 }}
                >
                  {showConfirmNewPassword ? (
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

      {/* Buttons */}
      <Stack sx={{ mt: "2em" }} direction="row" justifyContent="flex-end">
        <LoadingButton
          type="submit"
          sx={{
            mr: "10px",
            height: "2em",
            backgroundColor: "primary.main",
            borderRadius: "3px",
            fontWeight: "bold",
            color: "common.white",
            textAlign: "center",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "primary.dark",
            },
          }}
          loading={isPending}
        >
          <Typography variant="subtitle1">שמור</Typography>
        </LoadingButton>

        <LoadingButton
          sx={{
            height: "2em",
            backgroundColor: "common.white",
            border: "1.3px solid black",
            borderRadius: "3px",
            color: "black",
            textAlign: "center",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          component={"button"}
          onClick={() => navigate("/profile")}
        >
          <Typography variant="subtitle1">חזור</Typography>
        </LoadingButton>
      </Stack>
    </Container>
  );
}
