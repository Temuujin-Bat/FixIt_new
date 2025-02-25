// MUI
import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Stack,
} from "@mui/material";
import { PeopleAlt, Check, AttachMoney, Park } from "@mui/icons-material";

// Components
import { getOpenArenasData } from "../../../store/arenas/selectors";

export default function OfficialArenas() {
  const { openArenas } = getOpenArenasData();

  return (
    <Grid container spacing={5}>
      {openArenas.map((arena, index) => (
        <Grid
          xs={12}
          sm={6}
          md={6}
          lg={4}
          key={index}
          sx={{
            "&:hover": {
              transform: "scale(1.03)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            },
          }}
        >
          <Link href={`/arenas/${arena.name}`} underline="none">
            <Card
              sx={{
                height: "100%",
                position: "relative",
                borderRadius: "20px",
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
                {arena?.region}
              </Typography>

              <CardMedia sx={{ height: "65%", position: "relative" }}>
                <Stack sx={{ height: "200px" }}>
                  <Stack
                    component={"img"}
                    src={arena?.media?.photoGallery?.[3]}
                    loading="lazy"
                    decoding="async"
                    sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                  />
                </Stack>

                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    height: "38px",
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
              </CardMedia>

              <CardContent
                sx={{
                  height: "25%",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Box textAlign={"center"}>
                  <PeopleAlt />
                  <Typography color={"primary.main"} variant="body2">
                    {arena?.capacity}
                  </Typography>
                </Box>

                {arena?.privateArena ? (
                  <Box textAlign={"center"}>
                    <AttachMoney />
                    <Typography color={"primary.main"} variant="body2">
                      זירה בתשלום
                    </Typography>
                  </Box>
                ) : (
                  <Box textAlign={"center"}>
                    <Check />
                    <Typography color={"primary.main"} variant="body2">
                      זירה חינמית
                    </Typography>
                  </Box>
                )}

                <Box textAlign={"center"}>
                  <Park />
                  <Typography color={"primary.main"} variant="body2">
                    שטח פתוח
                  </Typography>
                </Box>
              </CardContent>

              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "primary.lighter",
                  height: "10%",
                }}
              >
                <Typography variant="subtitle2">
                  {arena?.location?.addressString}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
