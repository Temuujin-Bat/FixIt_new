// MUI
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Stack, Box, Paper } from "@mui/material";
import {
  LocalParking,
  Store,
  Shop,
  AddShoppingCart,
} from "@mui/icons-material";

// Components
import { getStoresData } from "../../../store/stores/selectors";

// Third party
import { Link } from "react-router-dom";

export default function StoresGrid() {
  const { stores } = getStoresData();

  return (
    <Grid container spacing={3}>
      {stores.map((store) => (
        <Grid
          xs={12}
          sm={6}
          lg={4}
          key={store.description}
          sx={{
            "&:hover": {
              transform: "scale(1.03)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            },
          }}
        >
          <Box
            component={Link}
            to={`/stores/${store.name}`}
            sx={{ textDecoration: "none" }}
          >
            <Paper
              elevation={10}
              sx={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  backgroundColor: "primary.darker",
                  color: "common.white",
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1,
                }}
              >
                {stores.indexOf(store) + 1}
              </Typography>

              <Box sx={{ position: "relative" }}>
                <Stack sx={{ height: "180px" }}>
                  <Box
                    component={"img"}
                    src={store.images.gallery[0]}
                    loading="lazy"
                    decoding="async"
                    sx={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Stack>

                <Typography
                  variant="h6"
                  sx={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "primary.darker",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    letterSpacing: "3px",
                  }}
                >
                  {store?.name}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  paddingY: 1.5,
                  backgroundColor: "background.paper",
                  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                {store?.tags?.parking ? (
                  <Box
                    sx={{
                      textAlign: "center",
                      paddingX: 2,
                      paddingY: 1,
                      borderRadius: "20px",
                      backgroundColor: "grey.100",
                    }}
                  >
                    <LocalParking sx={{ color: "text.primary" }} />

                    <Typography variant="body2" color="primary.main">
                      חנייה חינם
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      textAlign: "center",
                      paddingX: 2,
                      paddingY: 1,
                      borderRadius: "20px",
                      backgroundColor: "grey.100",
                    }}
                  >
                    <LocalParking sx={{ color: "text.primary" }} />

                    <Typography variant="body2" color="text.primary">
                      אין חנייה
                    </Typography>
                  </Box>
                )}

                {store?.tags?.physicalStore ? (
                  <Box
                    sx={{
                      textAlign: "center",
                      paddingX: 2,
                      paddingY: 1,
                      borderRadius: "20px",
                      backgroundColor: "grey.100",
                    }}
                  >
                    <Store sx={{ color: "text.primary" }} />
                    <Typography variant="body2" color="primary.main">
                      חנות פיזית
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      textAlign: "center",
                      paddingX: 2,
                      paddingY: 1,
                      borderRadius: "20px",
                      backgroundColor: "grey.100",
                    }}
                  >
                    <Shop sx={{ color: "text.primary" }} />
                    <Typography variant="body2" color="text.primary">
                      אין חנות פיזית
                    </Typography>
                  </Box>
                )}

                {store?.tags?.onlineStore ? (
                  <Box
                    sx={{
                      textAlign: "center",
                      paddingX: 2,
                      paddingY: 1,
                      borderRadius: "20px",
                      backgroundColor: "grey.100",
                    }}
                  >
                    <AddShoppingCart sx={{ color: "text.primary" }} />
                    <Typography variant="body2" color="primary.main">
                      חנות אונליין
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      textAlign: "center",
                      paddingX: 2,
                      paddingY: 1,
                      borderRadius: "20px",
                      backgroundColor: "grey.100",
                    }}
                  >
                    <AddShoppingCart sx={{ color: "text.primary" }} />
                    <Typography variant="body2" color="text.primary">
                      אין חנות אונליין
                    </Typography>
                  </Box>
                )}
              </Box>

              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "primary.lighter",
                  p: "10px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  fontWeight={"bold"}
                  color={"common.black"}
                  letterSpacing={1}
                >
                  {store?.address?.addressString}
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
