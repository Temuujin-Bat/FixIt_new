// MUI
import { AddPhotoAlternate } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function AirsoftReplicasFormPhotos() {
  const numberOfBoxes = 4;

  return (
    <Grid container spacing={2}>
      {Array.from({ length: numberOfBoxes }).map((_, index) => (
        <Grid xs={6} md={3} key={index}>
          <Box
            sx={{
              border: "2px dashed #ccc",
              borderRadius: "20px",
              paddingY: { xs: 5, sm: 8 },
              textAlign: "center",
              cursor: "pointer",
              "&:hover": {
                borderColor: "primary.main",
              },
              transition: "all 0.3s ease-in-out",
              backgroundColor: "#f9f9f9",
            }}
          >
            <AddPhotoAlternate sx={{ color: "primary.main" }} />
            <Typography variant="subtitle1" color="text.secondary">
              הוספת תמונה
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
