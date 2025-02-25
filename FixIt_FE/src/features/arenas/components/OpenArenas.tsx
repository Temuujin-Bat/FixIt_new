// MUI
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography, Stack } from "@mui/material";
import { PeopleAlt, Check, AttachMoney, Park } from "@mui/icons-material";

// Components
import { getOpenArenasData } from "../../../store/arenas/selectors";

// Third party
import { Link } from "react-router-dom";

export default function OpenArenas() {
  const { openArenas } = getOpenArenasData();

  return (
    <Grid container spacing={3}>
      {openArenas.map((arena, index) => (
        <Grid
          xs={12}
          sm={6}
          lg={4}
          key={index}
          sx={{
            "&:hover": {
              transform: "scale(1.03)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            },
          }}
        >
          <Box
            component={Link}
            to={`/arenas/${arena.name}`}
            sx={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                position: "relative",
                boxShadow: "0px 14px 12px rgba(0, 0, 0, 0.4)",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              {/* Region Badge */}
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
                {arena?.region}
              </Typography>

              {/* Media Section */}
              <Box sx={{ position: "relative" }}>
                <Stack sx={{ height: "180px" }}>
                  <Box
                    component={"img"}
                    src={arena?.media?.thumbNail || ''}
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
                  {arena?.name}
                </Typography>
              </Box>

              {/* Info Section */}
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
                {/* Capacity */}
                <Box
                  sx={{
                    textAlign: "center",
                    paddingX: 2,
                    paddingY: 1,
                    borderRadius: "20px",
                    backgroundColor: "grey.100",
                  }}
                >
                  <PeopleAlt sx={{ color: "text.primary" }} />
                  <Typography variant="body2" color="primary.main">
                    {arena?.capacity}
                  </Typography>
                </Box>

                {/* Arena Type */}
                <Box
                  sx={{
                    textAlign: "center",
                    paddingX: 2,
                    paddingY: 1,
                    borderRadius: "20px",
                    backgroundColor: "grey.100",
                  }}
                >
                  {arena?.privateArena ? (
                    <>
                      <AttachMoney sx={{ color: "text.primary" }} />
                      <Typography variant="body2" color="text.primary">
                        זירה בתשלום
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Check sx={{ color: "text.primary" }} />
                      <Typography variant="body2" color="primary.main">
                        זירה חינמית
                      </Typography>
                    </>
                  )}
                </Box>

                {/* Open Area */}
                <Box
                  sx={{
                    textAlign: "center",
                    paddingX: 2,
                    paddingY: 1,
                    borderRadius: "20px",
                    backgroundColor: "grey.100",
                  }}
                >
                  <Park sx={{ color: "text.primary" }} />
                  <Typography variant="body2" color="primary.main">
                    שטח פתוח
                  </Typography>
                </Box>
              </Box>

              {/* Address Section */}
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
                  {arena?.location?.addressString}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
