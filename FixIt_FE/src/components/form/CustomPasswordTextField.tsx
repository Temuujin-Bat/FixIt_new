// MUI
import { TextField } from "@mui/material";

// Components
import { ReusablePasswordTextFieldProps } from "./type";

const CustomPasswordTextField: React.FC<ReusablePasswordTextFieldProps> = ({
  type = "text",
  required = false,
  autoComplete = "off",
  placeholder = "",
  fullWidth = true,
  value,
  onChange,
  InputProps,
}) => {
  return (
    <TextField
      type={type}
      required={required}
      autoComplete={autoComplete}
      placeholder={placeholder}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      InputProps={InputProps}
    />
  );
};

export default CustomPasswordTextField;
