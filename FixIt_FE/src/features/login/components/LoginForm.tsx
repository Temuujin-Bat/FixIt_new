import { useState } from "react";

// MUI
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Box, InputAdornment, IconButton, Stack } from "@mui/material";

// Components
import { hashPassword } from "../../../utils/helpers/common.helper";
import { LoginFormLinks } from "./LoginFormLinks";
import { TAxiosError } from "../../../types/responses";
import { LoginErrorType } from "../type";
import {
  CustomLoadingButton,
  CustomPasswordTextField,
  CustomTextField,
  CustomTextFieldLabel,
  ErrorMessagesField,
} from "../../../components/form";

// Hooks
import {
  useLoginAPI,
  useResendVerificationEmailAPI,
} from "../../../hooks/API/welcome";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailNotConfirmedError, setEmailNotConfirmedError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const { mutate: login, isPending: loginLoading } = useLoginAPI();
  const { mutate: resendVerification, isPending: resendLoading } =
    useResendVerificationEmailAPI();

  const resendVerificationEmail = async () => {
    resendVerification({ email, setEmailNotConfirmedError });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailNotConfirmedError(false);
    setLoginError(false);

    const hashedPassword = hashPassword(password);

    login(
      { email, password: hashedPassword },
      {
        onError: (error: TAxiosError) => {
          const loginError = error as TAxiosError & Partial<LoginErrorType>;

          if (loginError.type === "emailNotConfirmed") {
            setEmailNotConfirmedError(true);
          } else if (loginError.type === "loginError") {
            setLoginError(true);
          }
        },
      }
    );
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: "100%" }}>
      <ErrorMessagesField
        loginError={loginError}
        emailNotConfirmedError={emailNotConfirmedError}
        resendVerificationEmail={resendVerificationEmail}
        resendLoading={resendLoading}
      />

      <Stack spacing={2}>
        <Box>
          <CustomTextFieldLabel title="מייל" />

          <CustomTextField
            type="email"
            required
            autoComplete="email"
            placeholder="yourmail@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

      <CustomLoadingButton title="התחברות" isPending={loginLoading} />

      <LoginFormLinks />
    </Box>
  );
};

export { LoginForm };
