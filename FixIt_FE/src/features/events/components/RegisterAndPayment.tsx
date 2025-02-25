// MUI
import { Box, Typography } from "@mui/material";

// Components
import { TEvent } from "../type";

export default function RegisterAndPayment({ event }: { event?: TEvent }) {
  return (
    <>
      {event?.paymentInfo?.description && (
        <Box mb={3}>
          <Typography variant="h6">הרשמה</Typography>

          <Typography
            variant="subtitle2"
            color={"#707287"}
            ml={0.4}
            display="flex"
            alignItems="baseline"
          >
            {event?.paymentInfo?.description}
          </Typography>
        </Box>
      )}
    </>
  );
}
