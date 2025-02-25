// MUI
import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";

// Components
import { CustomLoadingButtonProps } from "./type";

const CustomLoadingButton: React.FC<CustomLoadingButtonProps> = ({
  isPending,
  title,
  color,
  hoverColor,
  mt,
  borderRadius,
}) => {
  return (
    <LoadingButton
      type="submit"
      fullWidth
      variant="contained"
      sx={{
        height: "3em",
        mt: mt ?? 3,
        backgroundColor: color ?? "primary.main",
        "&:hover": {
          backgroundColor: hoverColor ?? "primary.light",
        },
        borderRadius: borderRadius ?? "100px",
      }}
      loading={isPending}
    >
      <Typography variant="subtitle1" color="common.white">
        {title}
      </Typography>
    </LoadingButton>
  );
};

export default CustomLoadingButton;
