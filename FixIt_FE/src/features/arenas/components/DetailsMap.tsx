import { useState } from "react";

// MUI
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Typography } from "@mui/material";

// Components
import { MapBox } from "../../../components";
import { getOpenArenasData } from "../../../store/arenas/selectors";
import { DetailsImages } from "../index";

export default function DetailsMap() {
  const { singleOpenArena } = getOpenArenasData();
  const [showMap, setShowMap] = useState(false);

  return (
    <Grid container spacing={2} sx={{ mt: { xs: "0px", md: "10px" } }}>
      {!showMap && (
        <Grid xs={12} sm={8} sx={{ position: "relative" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundImage: "url('/assets/Stores/MapBox.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              filter: "blur(1px)",
              position: "relative",
            }}
          />
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              position: "absolute",
              top: "50%",
              left: "50%",
              zIndex: 1000,
              transform: "translate(-50%, -50%)",
              borderRadius: "20px",
              padding: "12px 24px",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease, background-color 0.3s ease",
              "&:hover": {
                cursor: "pointer",
                transform: "translate(-50%, -50%) scale(1.05)",
                background: "rgba(255, 255, 255, 0.3)",
              },
            }}
            onClick={() => setShowMap(!showMap)}
          >
            <Typography variant="subtitle1">להצגת מפה</Typography>
          </Box>
        </Grid>
      )}

      {showMap && (
        <Grid xs={0} sm={8}>
          <MapBox singleOpenArena={singleOpenArena} />
        </Grid>
      )}

      <Grid xs={12} sm={4} sx={{ height: "100%", width: "100%" }}>
        <DetailsImages singleOpenArena={singleOpenArena} />
      </Grid>
    </Grid>
  );
}
