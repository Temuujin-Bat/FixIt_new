// MUI
import { Box, Paper } from "@mui/material";

// Third party
import Slider from "react-slick";

// Components
import { TEvent } from "../type";

export default function DetailsHero({ event }: { event?: TEvent }) {
  const images = event?.eventInfo?.gallery || [];

  const settings = {
    dots: true,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box mt={4} mb={2}>
      {event?.eventInfo?.gallery?.length === 0 ? (
        <Paper
          sx={{
            borderRadius: "20px",
            height: { xs: "200px", sm: "250px" },
          }}
        >
          <Box
            component={"img"}
            src="/assets/Events/EventsWallpaper.png"
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        </Paper>
      ) : (
        <Slider {...settings}>
          {images?.map((image, index) => (
            <Box
              key={index}
              sx={{
                height: { xs: "200px", sm: "250px" },
                outline: "none",
                border: "1px solid",
                borderRadius: "20px",
                borderColor: "#707287",
              }}
            >
              <Box
                component={"img"}
                src={image}
                sx={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </Box>
          ))}
        </Slider>
      )}
    </Box>
  );
}
