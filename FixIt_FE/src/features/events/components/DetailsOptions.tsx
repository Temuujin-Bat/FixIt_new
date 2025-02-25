// MUI
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";
import {
  AddShoppingCart,
  AssignmentTurnedIn,
  AttachMoney,
  EmojiEvents,
  EmojiPeople,
  Payment,
  Storefront,
  Water,
  Wc,
} from "@mui/icons-material";

// Components
import { TEvent } from "../type";

export default function DetailsOptions({ event }: { event?: TEvent }) {
  const eventOptions = [
    {
      condition: event?.eventInfo?.isPrizedEvent,
      label: "פרס לקבוצה מנצחת",
      icon: (
        <EmojiEvents
          sx={{
            color: "primary.main",
            mr: "5px",
            fontSize: "12px",
          }}
        />
      ),
    },
    {
      condition: event?.paymentInfo?.amount != 0 && event?.isPaid,
      label: "אירוע בתשלום",
      icon: (
        <AttachMoney
          sx={{
            color: "primary.main",
            mr: "5px",
            fontSize: "12px",
          }}
        />
      ),
    },
    {
      condition: event?.paymentInfo?.registerInPlace,
      label: "ניתן להירשם במקום",
      icon: (
        <AssignmentTurnedIn
          sx={{
            color: "primary.main",
            mr: "5px",
            fontSize: "12px",
          }}
        />
      ),
    },
    {
      condition: event?.eventInfo.rentalsInPlace,
      label: "דוכן להשכרת ציוד",
      icon: (
        <Storefront
          sx={{
            color: "primary.main",
            mr: "5px",
            fontSize: "12px",
          }}
        />
      ),
    },
    {
      condition: event?.eventInfo?.sellersInPlace,
      label: "דוכן מכירות",
      icon: (
        <AddShoppingCart
          sx={{
            color: "primary.main",
            mr: "5px",
            fontSize: "12px",
          }}
        />
      ),
    },
    {
      condition: event?.eventInfo?.marshalsInPlace,
      label: "שופט משחק/זירה",
      icon: (
        <EmojiPeople
          sx={{
            color: "primary.main",
            mr: "5px",
            fontSize: "12px",
          }}
        />
      ),
    },
    {
      condition: event?.eventInfo?.bathroomInPlace,
      label: "שירותים במקום",
      icon: (
        <Wc
          sx={{
            color: "primary.main",
            mr: "5px",
            fontSize: "12px",
          }}
        />
      ),
    },
    {
      condition: event?.eventInfo?.waterInPlace,
      label: "מי שתייה",
      icon: (
        <Water
          sx={{
            color: "primary.main",
            mr: "5px",
            fontSize: "12px",
          }}
        />
      ),
    },
    {
      condition: event?.paymentInfo?.payInPlace,
      label: "ניתן לשלם במקום",
      icon: (
        <Payment
          sx={{
            color: "primary.main",
            mr: "5px",
            fontSize: "12px",
          }}
        />
      ),
    },
  ];

  return (
    <Box mb={3}>
      <Grid container spacing={2}>
        {eventOptions.map(
          (option, index) =>
            option.condition && (
              <Grid xs={4} sm={3} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F8F7FA",
                    padding: 1,
                    borderRadius: "20px",
                  }}
                >
                  {option.icon}
                  <Typography variant="caption">{option.label}</Typography>
                </Box>
              </Grid>
            )
        )}
      </Grid>
    </Box>
  );
}
