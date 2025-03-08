import { useState } from "react";

// MUI
import { Box, Grid2, IconButton, Modal } from "@mui/material";
import { Close } from "@mui/icons-material";

// Components
import { TBarbershops } from "../../../types";

const Gallery = ({ barber }: { barber: TBarbershops | null }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          paddingTop: 1,
          paddingX: 1,
          borderRadius: 10,
          mt: 3,
        }}
      >
        <Grid2 container columnSpacing={1} rowSpacing={0}>
          {barber?.gallery?.map((image) => (
            <Grid2
              size={{
                xs: 6,
              }}
              key={image.id}
            >
              <Box
                component="img"
                src={image.image_url}
                sx={{
                  width: "100%",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: 10,
                  cursor: "pointer",
                }}
                onClick={() => setSelectedImage(image.image_url)}
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>

      <Modal
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "secondary.lighter",
            borderRadius: 10,
            boxShadow: 24,
            minWidth: 300,
            width: 550,
            maxWidth: 600,
            height: "85vh",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{
              position: "absolute",
              top: 30,
              right: 30,
              color: "secondary.darker",
              backgroundColor: "white",
              border: "1px solid",
              borderColor: "secondary.light",
              zIndex: 100,
            }}
          >
            <Close fontSize="large" />
          </IconButton>

          <Box
            component="img"
            src={selectedImage ?? ""}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Modal>
    </>
  );
};

export { Gallery };
