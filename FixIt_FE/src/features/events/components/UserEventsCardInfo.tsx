// MUI
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Stack, Typography } from "@mui/material";

// Components
import { TEvent } from "../type";
import { formatDateHelper } from "../../../utils/helpers/date.helper";

export default function UserEventsCardInfo({ event }: { event?: TEvent }) {
  const img = "/assets/Events/AddEventsWallpaper.png";

  return (
    <Grid xs={12} sm={12} md={8} lg={9} sx={{ position: "relative" }}>
      <Box
        sx={{
          height: "100%",
          borderRadius: {
            xs: "20px 20px 20px 20px",
            md: "0px 20px 0px 0px",
          },
          boxShadow: { xs: "0 4px 20px rgba(0, 128, 0, 0.3)", md: "none" },
          overflow: "hidden",
        }}
      >
        <Grid container>
          <Grid xs={6} sm={6} md={6} lg={6}>
            <Box
              sx={{
                height: { xs: "150px", md: "200px" },
                width: "100%",
              }}
            >
              <Stack
                component={"img"}
                src={
                  event?.eventInfo?.gallery?.length != 0
                    ? event?.eventInfo?.gallery?.[0]
                    : img
                }
                loading="lazy"
                decoding="async"
                sx={{
                  height: "100%",
                  width: "100%",
                  borderRadius: {
                    xs: "0px 20px 0px 20px",
                    sm: "0px 20px 0px 20px",
                    md: "20px 0px 20px 0px",
                  },
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>

          <Grid xs={6} sm={6} md={6} lg={6} sx={{ padding: "20px 30px" }}>
            <Box>
              <Stack color={"text.primary"}>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  {event?.eventInfo.title}
                </Typography>

                <Typography
                  color={"text.secondary"}
                  variant="body2"
                  sx={{ mt: 1 }}
                >
                  <Typography variant="subtitle2" component={"a"}>
                    כתובת:
                  </Typography>{" "}
                  {event?.locationInfo.address?.addressString}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mt: 1 }}
                >
                  <Typography variant="subtitle2" component={"a"}>
                    תאריך משחק:
                  </Typography>{" "}
                  {event?.eventInfo?.start &&
                    event?.eventInfo?.end &&
                    formatDateHelper(
                      event?.eventInfo?.start,
                      event?.eventInfo?.end
                    )}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
