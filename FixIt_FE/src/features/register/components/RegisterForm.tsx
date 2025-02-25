import { useState } from "react";

// MUI
import { Box, InputAdornment, IconButton, Stack } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

// Hooks
import { useRegisterAPI } from "../../../hooks/API/welcome";
import { useValidation } from "../../../hooks/useValidation";

// Components
import { hashPassword } from "../../../utils/helpers/common.helper";
import { RegisterFormLinks } from "..";
import {
  CustomLoadingButton,
  CustomPasswordTextField,
  CustomTextField,
  CustomTextFieldLabel,
  PasswordCriteria,
  ErrorMessagesField,
} from "../../../components/form";

export default function RegisterForm() {
  const {
    mutate: register,
    isError: registerError,
    isPending,
  } = useRegisterAPI();
  const { validatePassword } = useValidation();

  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validatePassword(password)) {
      return;
    }

    const hashedPassword = hashPassword(password);

    register({ name, displayName, email, password: hashedPassword });
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
      sx={{ mt: 3, width: "100%" }}
    >
      <ErrorMessagesField registerError={registerError} />

      <Stack spacing={{ xs: 2, sm: 1 }}>
        <Box>
          <CustomTextFieldLabel title="שם מלא" />

          <CustomTextField
            type="text"
            required
            autoComplete="name"
            placeholder="שם פרטי ומשפחה"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>

        <Box>
          <CustomTextFieldLabel title="שם תצוגה" />

          <CustomTextField
            type="text"
            required
            placeholder="שם תצוגה"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </Box>

        <Box>
          <CustomTextFieldLabel title="מייל" />

          <CustomTextField
            type="email"
            required
            autoComplete="email"
            placeholder="yourmail@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Box>

        <Box>
          <CustomTextFieldLabel title="סיסמה" />

          <CustomPasswordTextField
            fullWidth
            type={showPassword ? "text" : "password"}
            required
            autoComplete="current-password"
            placeholder="הקדלת סיסמה"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={password.length > 0 && !validatePassword(password)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
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
      </Stack>

      {/* At least 8 character */}
      <PasswordCriteria
        isInvalid={!validatePassword(password)}
        password={password}
      />

      <CustomLoadingButton title="להרשמה" isPending={isPending} />

      <RegisterFormLinks />
    </Box>
  );
}
