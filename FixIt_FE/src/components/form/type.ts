// MUI
import { OutlinedInputProps } from "@mui/material";

export type TErrorMessagesField = {
  registerError?: boolean;
  loginError?: boolean;
  comparePasswordError?: boolean;
  emailNotConfirmedError?: boolean;
  resendVerificationEmail?: () => void;
  resendLoading?: boolean;
};

export type TSuccessMessagesField = {
  contactUsSuccess?: boolean;
};

export interface ReusablePasswordTextFieldProps {
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  fullWidth?: boolean;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  InputProps: OutlinedInputProps;
  error?: boolean;
}

export interface ReusableTextFieldProps {
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  fullWidth?: boolean;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CustomLoadingButtonProps {
  isPending?: boolean;
  title: string;
  color?: string;
  hoverColor?: string;
  mt?: string;
  borderRadius?: string;
}
