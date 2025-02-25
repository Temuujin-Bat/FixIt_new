import { useState } from "react";

// MUI
import { Box, Button, Stack, Typography } from "@mui/material";

// Components
import { DetailsRegister } from "..";
import { TEvent } from "../type";
import { Divider } from "../../../components";

export default function DetailsMobileRegisterButton({
  event,
}: {
  event: TEvent;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <Divider />

      <Box
        sx={{
          display: { xs: "block", md: "none" },
          width: "100%",
          p: 2,
          mb: 5,
          borderRadius: "10px",
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
          <Typography
            color={"#707287"}
            textAlign={"center"}
            variant="subtitle2"
          >
            הרשמה בחינם
          </Typography>
        )}

        <Button
          variant="contained"
          fullWidth
          sx={{
            padding: "12px 20px",
            borderRadius: "12px",
            mt: 0.5,
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
    </>
  );
}
