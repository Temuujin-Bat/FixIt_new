// MUI
import { TextField } from "@mui/material";

// Components
import { ReusableTextFieldProps } from "./type";

const CustomTextField: React.FC<ReusableTextFieldProps> = ({
  type = "text",
  required = false,
  autoComplete = "off",
  placeholder = "",
  fullWidth = true,
  value,
  onChange,
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
    />
  );
};

export default CustomTextField;
