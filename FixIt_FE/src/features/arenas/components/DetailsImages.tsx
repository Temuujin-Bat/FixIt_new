import { useState } from "react";

// MUI
import { Box, Paper, Stack, Typography } from "@mui/material";

// Components
import ArenaDetailsImagesModal from "./DetailsImagesModal";
import { TArenas } from "../../../types";

export default function DetailsImages({
  singleOpenArena,
}: {
  singleOpenArena: TArenas;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Paper elevation={10} sx={{ borderRadius: "20px" }}>
        <Box
          sx={{ "&:hover": { cursor: "pointer" } }}
          onClick={() => setIsOpen(true)}
        >
          <Box sx={{ position: "relative" }}>
            <Box sx={{ height: { xs: "200px", sm: "300px", md: "400px" } }}>
              <Stack
                component={"img"}
                src={singleOpenArena?.media?.photoGallery?.[0]}
                loading="lazy"
                decoding="async"
                sx={{
                  height: "100%",
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "20px",
                }}
              />
            </Box>

            <Stack
              sx={{
                position: "absolute",
                bottom: "0",
                left: "0px",
                backgroundColor: "primary.dark",
                padding: "2px 20px",
                borderRadius: "0px 20px 0px 20px",
              }}
            >
              <Typography color={"common.white"} variant="h5">
                {singleOpenArena?.media?.photoGallery?.length}+ תמונות
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Paper>

      <ArenaDetailsImagesModal
        singleOpenArena={singleOpenArena}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
