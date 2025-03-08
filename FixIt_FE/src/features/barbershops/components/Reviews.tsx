// MUI
import { Avatar, Box, Rating, Stack, Typography } from "@mui/material";

// Third party
import dayjs from "dayjs";

// Components
import { calculateAverageRating } from "../../../utils/helpers";
import { TBarbershops } from "../../../types";

const Reviews = ({ barber }: { barber: TBarbershops | null }) => {
  // Calculate average rating across all barbershops
  const averageRating = calculateAverageRating(barber?.reviews);

  return (
    <Box sx={{ mt: 3, padding: { xs: 3, sm: 0 } }}>
      <Typography variant="h3">Сэтгэгдлүүд</Typography>

      <Typography variant={"body1"} sx={{ mb: 2 }}>
        ({barber?.reviews.length}) ★★★★★ {averageRating}
      </Typography>

      {barber?.reviews.map((review) => (
        <Box key={review.id} sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ mr: 1.5, backgroundColor: "secondary.main" }}>
              {review.userName.charAt(0)}
            </Avatar>

            <Stack>
              <Typography variant={"subtitle1"}>{review.userName}</Typography>
              <Typography variant={"body2"} sx={{ color: "secondary.dark" }}>
                {dayjs(review.createdAt).format("DD/MM/YYYY HH:mm")}
              </Typography>
            </Stack>
          </Box>
          <Rating
            value={review.rating}
            sx={{ color: "black", mt: 0.5 }}
            size={"small"}
          />
          <Typography variant="body1">{review.comment}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export { Reviews };
