// MUI
import { Clear } from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";

// Third party
import Slider from "react-slick";
import { TArenas } from "../../../types";

export default function DetailsImagesModal({
  singleOpenArena,
  isOpen,
  setIsOpen,
}: {
  singleOpenArena: TArenas;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <Container maxWidth="md" sx={{ outline: "none" }}>
        <Box
          sx={{
            p: "30px",
            my: { xs: "20px", sm: "150px" },
            backgroundColor: "white",
            borderRadius: "20px",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <Clear />
            </IconButton>

            <Typography variant="h6" color={"primary.darker"}>
              {singleOpenArena?.name}
            </Typography>
          </Stack>

          <Box mt={"20px"}>
            <Slider {...settings}>
              {singleOpenArena?.media?.photoGallery?.map((arena) => (
                <Box
                  key={arena}
                  sx={{
                    height: "400px",
                    width: "100%",
                    borderRadius: "20px",
                    backgroundColor: "black",
                    position: "relative",
                  }}
                >
                  <Stack
                    component={"img"}
                    src={arena}
                    loading="lazy"
                    decoding="async"
                    sx={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
}
