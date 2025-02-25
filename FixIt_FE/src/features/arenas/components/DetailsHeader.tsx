// MUI
import { Box, Link, Stack, Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

// Components
import { getOpenArenasData } from "../../../store/arenas/selectors";

export default function DetailsHeader() {
  const { singleOpenArena } = getOpenArenasData();

  return (
    <Box mt={2}>
      <Stack
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "primary.darker",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          {singleOpenArena?.name}
        </Typography>
        <Typography mx={"5px"} fontWeight={"bold"} fontSize={"1.4em"}>
          -
        </Typography>

        {singleOpenArena?.location?.XCoordinate && (
          <Link
            target="_blank"
            component={"a"}
            href={`https://waze.com/ul?ll=${singleOpenArena?.location?.XCoordinate},${singleOpenArena?.location?.YCoordinate}&navigate=yes`}
            sx={{
              display: "flex",
              flexDirection: "row",
              "&:hover": {
                textDecoration: "underline",
                textDecorationColor: "#006CE4",
              },
            }}
            underline="none"
          >
            <Typography color={"#006CE4"} variant="h5">
              לניווט על ידי waze לחץ
            </Typography>
          </Link>
        )}
      </Stack>

      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        <LocationOn fontSize="small" />
        <Typography variant="subtitle2">
          {singleOpenArena?.location?.addressString}
        </Typography>
      </Stack>
    </Box>
  );
}
