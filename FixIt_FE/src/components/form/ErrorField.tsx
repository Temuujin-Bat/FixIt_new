// MUI
import { Warning } from "@mui/icons-material";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function ErrorField({
  text,
  onResend,
  resendLoading,
}: {
  text: string;
  onResend?: () => void;
  resendLoading?: boolean;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        padding: 1.5,
        border: (theme) => `1px solid ${theme.palette.error.main}`,
        borderRadius: 1,
        mb: 3,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Warning sx={{ ml: 2, color: "error.main", fontSize: "2em" }} />
        <Typography
          variant="body2"
          sx={{ ml: 2, color: (theme) => theme.palette.error.main }}
        >
          {text}
        </Typography>
      </Box>

      {onResend &&
        (resendLoading ? (
          <CircularProgress
            size={12}
            sx={{ ml: 8, color: (theme) => theme.palette.info.main }}
          />
        ) : (
          <Typography
            variant="subtitle2"
            sx={{
              ml: 7.5,
              color: (theme) => theme.palette.info.main,
              cursor: "pointer",
              textDecoration: "underline",
              "&:hover": {
                textDecoration: "none",
              },
            }}
            onClick={onResend}
          >
            לא קיבלתי מייל, שלחו לי מחדש.
          </Typography>
        ))}
    </Box>
  );
}
