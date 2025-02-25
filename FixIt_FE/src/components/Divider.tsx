// MUI
import { Divider } from "@mui/material";

export default function DividerAlternative({
  gradient,
  mt,
  mb,
}: {
  gradient?: string;
  mt?: string;
  mb?: string;
}) {
  return (
    <Divider
      sx={{
        borderColor: "transparent",
        backgroundImage:
          gradient ||
          "linear-gradient(90deg, rgba(26, 188, 156, 0.1), rgba(26, 188, 156, 1), rgba(26, 188, 156, 0.1))",
        height: "2px",
        width: "100%",
        mx: "auto",
        boxShadow:
          "0px 4px 12px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08)",
        opacity: 0.9,
        mt: mt ? mt : 0,
        mb: mb ? mb : 0,
      }}
    />
  );
}
