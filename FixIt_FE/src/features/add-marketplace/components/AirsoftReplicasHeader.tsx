// MUI
import { Box, LinearProgress, Typography } from "@mui/material";

export default function AirsoftReplicasHeader({
  activeStep,
  totalSteps,
}: {
  activeStep: number;
  totalSteps: number;
}) {
  const progress = ((activeStep + 1) / totalSteps) * 100;

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: 0,
          padding: 1,
          backgroundColor: "background.paper",
          zIndex: 1000,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "50px",
              ml: { xs: "10px", md: "20px" },
              mr: { xs: "0", md: "20px" },
            }}
          >
            <Box
              component={"img"}
              sx={{ height: "100%", width: "100%" }}
              src="/assets/Logo/logo.png"
            />
          </Box>
          <Typography variant="h4">פרסום מודעה</Typography>
        </Box>
      </Box>

      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          position: "fixed",
          left: 0,
          width: "100%",
          height: 8,
          borderRadius: 2,
          zIndex: 1000,
          top: { xs: "58px", sm: "59px", md: "60px" },
          transform: "scaleX(-1)",
          backgroundColor: (theme) => theme.palette.grey[300],
          "& .MuiLinearProgress-bar": {
            backgroundColor: (theme) => theme.palette.primary.main,
          },
        }}
      />
    </>
  );
}
