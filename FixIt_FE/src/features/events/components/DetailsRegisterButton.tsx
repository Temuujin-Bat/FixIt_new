import { useState } from "react";

// MUI
import { Box, Button, Stack, Typography } from "@mui/material";

// Components
import { DetailsRegister } from "..";
import { TEvent } from "../type";

export default function DetailsRegisterButton({ event }: { event?: TEvent }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <Box
      sx={{
        position: "sticky",
        top: "80px",
        borderRadius: "10px",
        padding: 2,
        mt: 2,
        border: "1px solid",
        borderColor: "grey.300",
        backgroundColor: "white",
        zIndex: 1,
        display: { xs: "none", md: "block" },
      }}
    >
      {event?.isPaid && event?.paymentInfo?.amount != 0 ? (
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography color={"#707287"} variant="subtitle2">
            עלות הרשמה:
          </Typography>
          &nbsp;
          <Typography
            variant="subtitle2"
            color={"primary.main"}
            textAlign={"center"}
          >
            {event?.paymentInfo?.amount}₪
          </Typography>
        </Stack>
      ) : (
        <Typography color={"#707287"} textAlign={"center"} variant="subtitle2">
          הרשמה בחינם
        </Typography>
      )}

      <Button
        variant="contained"
        fullWidth
        sx={{
          padding: "12px 20px",
          borderRadius: "12px",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
        onClick={handleOpenModal}
      >
        <Typography variant="subtitle1" fontWeight="bold" color={"white"}>
          להרשמה
        </Typography>
      </Button>

      <DetailsRegister
        event={event}
        open={modalOpen}
        handleClose={handleCloseModal}
      />
    </Box>
  );
}
