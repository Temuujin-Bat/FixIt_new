// MUI
import Grid from "@mui/material/Unstable_Grid2";
import { LoadingButton } from "@mui/lab";
import { Link, Stack, Typography } from "@mui/material";

// Components
import { TEvent } from "../type";

// Hooks
import { useDeleteEventAPI } from "../../../hooks/API/events";

// Third party
import { useNavigate } from "react-router-dom";

export default function UserPastEventsCardActions({
  event,
}: {
  event: TEvent;
}) {
  const navigate = useNavigate();
  const { mutate: deleteEvent, isPending } = useDeleteEventAPI();

  const deleteHandler = (eventId: number, eventEnd: string) => {
    deleteEvent({ eventId, eventEnd });
  };

  return (
    <Grid xs={12} sm={12} md={4} lg={3}>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row", md: "column" },
          alignItems: "center",
          width: "100%",
          padding: "20px",
          height: "100%",
        }}
        gap={1}
      >
        <Link
          underline="none"
          onClick={() => navigate(`/events/${event?.eventId}`)}
          sx={{
            backgroundColor: "primary.main",
            width: "100%",
            display: "flex",
            border: "2px solid transparent",
            borderRadius: "10px",
            color: "common.white",
            padding: "12px 20px",
            justifyContent: "center",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "primary.dark",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
            לעמוד האירוע
          </Typography>
        </Link>

        <LoadingButton
          onClick={() =>
            deleteHandler(Number(event!.eventId), event!.eventInfo.end)
          }
          sx={{
            backgroundColor: "error.main",
            width: "100%",
            display: "flex",
            border: "2px solid transparent",
            borderRadius: "10px",
            color: "common.white",
            padding: "12px 20px",
            justifyContent: "center",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "error.dark",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
            },
          }}
          loading={isPending}
        >
          <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
            מחק ארוע
          </Typography>
        </LoadingButton>
      </Stack>
    </Grid>
  );
}
