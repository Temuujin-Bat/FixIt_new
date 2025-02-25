// MUI
import Grid from "@mui/material/Unstable_Grid2";

// Components
import {
  DetailsAbout,
  DetailsDate,
  DetailsHero,
  DetailsLocation,
  DetailsMobileRegisterButton,
  DetailsOptions,
  DetailsOrganizer,
  DetailsPrize,
  DetailsRegisterButton,
  DetailsTitle,
  RegisterAndPayment,
} from "..";
import { TEvent } from "../type";

export default function DetailsInformation({ event }: { event?: TEvent }) {
  return (
    <>
      <DetailsHero event={event} />

      <Grid container spacing={2}>
        <Grid xs={12} md={event?.eventInfo?.registrationRequired ? 9 : 12}>
          <DetailsTitle event={event} />

          <DetailsDate event={event} />

          <DetailsLocation event={event} />

          <DetailsAbout event={event} />

          {event?.eventInfo?.isPrizedEvent && <DetailsPrize event={event} />}

          <RegisterAndPayment event={event} />

          <DetailsOrganizer event={event} />

          <DetailsOptions event={event} />
        </Grid>

        <Grid xs={0} md={3}>
          {event?.eventInfo?.registrationRequired && (
            <DetailsRegisterButton event={event} />
          )}
        </Grid>

        {event?.eventInfo?.registrationRequired && (
          <DetailsMobileRegisterButton event={event} />
        )}
      </Grid>
    </>
  );
}
