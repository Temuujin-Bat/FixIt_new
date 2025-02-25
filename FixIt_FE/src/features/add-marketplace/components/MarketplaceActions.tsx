// MUI
import { Box, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// Third party
import { Link } from "react-router-dom";

export default function MarketplaceActions() {
  return (
    <Grid container spacing={2} mt={2}>
      {/* Airsoft Replicas */}
      <Grid xs={6} md={4} height={"100%"}>
        <Paper
          elevation={10}
          sx={{
            borderRadius: "20px",
            "&:hover": {
              transform: "scale(1.03)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            },
          }}
        >
          <Box
            component={Link}
            to="airsoft-replicas"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              paddingY: 3,
              textDecoration: "none",
            }}
          >
            <Box
              sx={{
                width: "100%",
                backgroundImage:
                  "url(/assets/Marketplace/airsoft-replicas.png)",
                height: { xs: "80px", sm: "130px", md: "180px", lg: "230px" },
                borderRadius: "20px 20px 0px 0px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />

            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60%",
              }}
            >
              <Typography
                textAlign={"center"}
                color={"common.black"}
                variant="h6"
              >
                רובי איירסופט
              </Typography>
              <Typography
                textAlign={"center"}
                color={"grey.600"}
                variant="body1"
                fontWeight={"600"}
              >
                רובה ארוך, קצר או אקדח ושוטגאן
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Grid>

      {/* Parts And Accessories */}
      <Grid xs={6} md={4} height={"100%"}>
        <Paper
          elevation={10}
          sx={{
            borderRadius: "20px",
            "&:hover": {
              transform: "scale(1.03)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            },
          }}
        >
          <Box
            component={Link}
            to="parts-and-accessories"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              paddingY: 3,
              textDecoration: "none",
            }}
          >
            <Box
              sx={{
                width: "100%",
                backgroundImage:
                  "url(/assets/Marketplace/parts-and-accessories.png)",
                height: { xs: "80px", sm: "130px", md: "180px", lg: "230px" },
                borderRadius: "20px 20px 0px 0px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />

            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60%",
              }}
            >
              <Typography
                textAlign={"center"}
                color={"common.black"}
                variant="h6"
              >
                חלקים ותוספים
              </Typography>
              <Typography
                textAlign={"center"}
                color={"grey.600"}
                variant="body1"
                fontWeight={"600"}
              >
                אביזרים כמו מחסניות, סוללות ותוספות
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Grid>

      {/* Tactical Equipment */}
      <Grid xs={6} md={4} height={"100%"}>
        <Paper
          elevation={10}
          sx={{
            borderRadius: "20px",
            "&:hover": {
              transform: "scale(1.03)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            },
          }}
        >
          <Box
            component={Link}
            to="tactical-equipment"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              paddingY: 3,
              textDecoration: "none",
            }}
          >
            <Box
              sx={{
                width: "100%",
                backgroundImage:
                  "url(/assets/Marketplace/tactical-equipment.png)",
                height: { xs: "80px", sm: "130px", md: "180px", lg: "230px" },
                borderRadius: "20px 20px 0px 0px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />

            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60%",
              }}
            >
              <Typography
                textAlign={"center"}
                color={"common.black"}
                variant="h6"
              >
                ציוד טקטי וליבוש
              </Typography>
              <Typography
                textAlign={"center"}
                color={"grey.600"}
                variant="body1"
                fontWeight={"600"}
              >
                ווסטים, קסדות, מגנים וביגוד טקטי
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
