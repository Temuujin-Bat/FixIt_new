import { useMemo } from "react";

// MUI
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import {
  ArrowForward,
  FavoriteBorderOutlined,
  LocationOn,
  Star,
} from "@mui/icons-material";

// Hooks
import { useAppSelector } from "../../../hooks/useAppStore";

// Components
import { calculateAverageRating } from "../../../utils/helpers";
import { getBarbershops } from "../../../store/barbershops/selectors";
import { TBarbershopProps } from "../type";

const Barbershop = ({ setOpen, setSelectedBarber }: TBarbershopProps) => {
  const selectedBarbershop = useAppSelector(getBarbershops);

  return (
    <Container maxWidth="xs" sx={{ mt: 3 }}>
      {selectedBarbershop.map((barber) => {
        const averageRating = useMemo(
          () => calculateAverageRating(barber.reviews),
          [barber.reviews],
        );

        return (
          <Box
            key={barber.id}
            sx={{
              border: "1px solid",
              borderColor: "secondary.lighter",
              borderRadius: 5,
              mb: 5,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, .1)",
            }}
          >
            <Box sx={{ padding: 2, display: "flex", alignItems: "center" }}>
              <Avatar sx={{ width: 50, height: 50 }} src={barber.logo} />

              <Box ml={2}>
                <Typography variant="subtitle2">{barber.name}</Typography>

                <Box
                  component="a"
                  href={`https://www.google.com/maps?q=${barber.location.XCoordinates},${barber.location.YCoordinates}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    ml: -0.5,
                    textDecoration: "none",
                    color: "secondary.darker",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <LocationOn fontSize={"small"} />
                  <Typography variant="body2">
                    {barber.location.address}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{ borderRadius: 5, overflow: "hidden", position: "relative" }}
            >
              <Box
                sx={{
                  borderRadius: 5,
                  objectFit: "cover",
                  height: "400px",
                  position: "relative",
                }}
                component="img"
                src={barber?.gallery[0]?.image_url}
              />

              <IconButton
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  color: "white",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                <FavoriteBorderOutlined fontSize={"large"} />
              </IconButton>
            </Box>

            <Box sx={{ padding: 2, mt: -1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "3px" }}>
                <Typography>{averageRating}</Typography>
                <Star fontSize={"small"} />
                <Typography>({barber.reviews.length})</Typography>
              </Box>

              <Typography sx={{ fontStyle: "italic" }}>
                &#34;Хотын хамгийн сайн үсчин&#34;
              </Typography>
            </Box>

            <Box sx={{ padding: 2, mt: -2 }}>
              <Button
                onClick={() => {
                  setSelectedBarber(barber);
                  setOpen(true);
                }}
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 120,
                  color: "black",
                  backgroundColor: "white",
                  boxShadow: "none",
                  border: "1px solid",
                  borderColor: "secondary.light",
                  fontWeight: "bold",
                }}
              >
                Цаг захиалах
              </Button>
            </Box>

            <Box sx={{ padding: 3, mt: -2 }}>
              {barber.workers.map((worker) => (
                <Box
                  key={worker.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle1">
                      {worker.services[0].name}
                    </Typography>
                    <Typography variant="body2" color={"secondary.dark"}>
                      {worker.name}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="subtitle1">
                      {worker.services[0].price}₮
                    </Typography>
                    <Typography variant="body2">
                      {worker.services[0].duration} мин
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box
              onClick={() => {
                setSelectedBarber(barber);
                setOpen(true);
              }}
              sx={{
                padding: 2,
                mt: -3,
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Typography variant="subtitle1" color={"primary.main"}>
                Бүх үйлчилгээг үзэх
              </Typography>
              <ArrowForward
                sx={{ color: "primary.main", fontSize: "large", ml: 1 }}
              />
            </Box>
          </Box>
        );
      })}
    </Container>
  );
};

export { Barbershop };
