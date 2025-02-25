// MUI
import { Box, Link, Stack, Typography } from "@mui/material";

// Components
import { TEvent } from "../type";

export default function DetailsOrganizer({ event }: { event?: TEvent }) {
  return (
    <Box sx={{ marginBottom: 3 }}>
      <Typography variant="h6">צור קשר</Typography>

      <Typography variant="subtitle2" ml={0.4} color={"#707287"}>
        {event?.contactInfo?.name}
      </Typography>

      <Stack
        sx={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", ml: 0.4 }}>
          <Link
            href={`mailto:${event?.contactInfo?.email}`}
            sx={{
              color: "primary.main",
              "&:hover": {
                textDecoration: "underline",
                color: "primary.dark",
              },
              display: "inline-block",
            }}
          >
            <Typography variant="subtitle2">
              {event?.contactInfo?.email}
            </Typography>
          </Link>

          {event?.contactInfo?.phoneNumber && (
            <>
              <Typography fontWeight={"bold"}>&nbsp;/&nbsp;</Typography>

              <Link
                href={`tel:${event?.contactInfo?.phoneNumber}`}
                sx={{
                  color: "primary.main",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "primary.dark",
                  },
                  display: "inline-block",
                }}
              >
                <Typography variant="subtitle2">
                  {event?.contactInfo?.phoneNumber}
                </Typography>
              </Link>
            </>
          )}
        </Box>
      </Stack>
    </Box>
  );
}
