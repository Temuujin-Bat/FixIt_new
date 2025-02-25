// MUI
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Divider, Typography } from "@mui/material";

// Components
import {
  DetailsAbout,
  DetailsDate,
  DetailsHero,
  DetailsLocation,
  DetailsOptions,
  DetailsOrganizer,
  DetailsPrize,
  DetailsTitle,
  RegisterAndPayment,
} from "..";
import { TEvent } from "../type";

export default function PastEventDetailsInformation({
  event,
}: {
  event?: TEvent;
}) {
  return (
    <>
      <DetailsHero event={event} />

      <Grid container spacing={2} mb={2}>
        <Grid xs={12}>
          <DetailsTitle event={event} />

          <DetailsDate event={event} />

          <DetailsLocation event={event} />

          <DetailsAbout event={event} />

          {event?.eventInfo?.isPrizedEvent && <DetailsPrize event={event} />}

          {event?.eventInfo?.registrationRequired && (
            <RegisterAndPayment event={event} />
          )}

          <DetailsOrganizer event={event} />

          <DetailsOptions event={event} />

          <Divider sx={{ my: 2 }} />

          <Typography variant="h4" color={"error.main"}>
            האירוע הסתיים!
          </Typography>

          {event?.postEventInfo?.eventLinks &&
            event.postEventInfo.eventLinks.length > 0 && (
              <>
                <Typography variant="h6" color="text.secondary">
                  קישורים לתמונות מהאירוע:
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {event.postEventInfo.eventLinks.map((link, index) => {
                    return (
                      <Box key={index} sx={{ display: "flex" }}>
                        <Typography variant="subtitle1">
                          {index + 1}.
                        </Typography>
                        &nbsp;
                        <Typography
                          key={index}
                          variant="subtitle1"
                          color="primary.main"
                          component="a"
                          href={
                            link?.link?.startsWith("http")
                              ? link.link
                              : `https://${link.link}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            textDecoration: "none",
                            cursor: "pointer",
                            "&:hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          {link.title}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </>
            )}
        </Grid>
      </Grid>
    </>
  );
}
