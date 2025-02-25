import React, { useState } from "react";

// MUI
import Grid from "@mui/material/Unstable_Grid2";
import { ArrowBack, Close, CreditCard } from "@mui/icons-material";
import { Typography, Box, TextField, Modal, IconButton } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// Components
import { getUserData } from "../../../store/authenticate/selectors";
import { TEvent } from "../type";

// Third party
import { useParams } from "react-router-dom";

// Hooks
import { useEnrollEventAPI } from "../../../hooks/API/events";

export default function DetailsRegister({
  event,
  open,
  handleClose,
}: {
  event?: TEvent;
  open: boolean;
  handleClose: () => void;
}) {
  const { userInfo } = getUserData();
  const { id } = useParams();
  const eventId = Number(id);

  const { mutate: enrollEvent, isPending } = useEnrollEventAPI(handleClose);

  const [name, setName] = useState(userInfo?.name || "");
  const [email, setEmail] = useState(userInfo?.email || "");
  const [phone, setPhone] = useState(userInfo?.phone || "");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    enrollEvent({ eventId, name, email, phone, message });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          maxWidth: "500px",
          bgcolor: "background.paper",
          borderRadius: "20px",
          boxShadow: 24,
          p: 4,
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            mb: 2,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
            פרטים להרשמה:
          </Typography>

          {event?.paymentInfo?.paymentLink && (
            <Box sx={{ display: "flex", alignItems: "center", mr: 5 }}>
              <CreditCard
                sx={{ fontSize: "16px", color: "#707287", mr: 0.5 }}
              />

              <Typography
                variant="subtitle1"
                color="primary.main"
                component="a"
                href={
                  event?.paymentInfo?.paymentLink.startsWith("http")
                    ? event?.paymentInfo?.paymentLink
                    : `https://${event?.paymentInfo?.paymentLink}`
                }
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                לתשלום הרשמה
              </Typography>

              <ArrowBack sx={{ fontSize: "12px", color: "primary.main" }} />
            </Box>
          )}
        </Box>

        <Grid container spacing={1} sx={{ mx: "-5px" }}>
          <Grid xs={12} sm={12}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle2" mr={"10px"}>
                שם מלא
              </Typography>
              <Typography
                variant="subtitle2"
                color={"error"}
                marginRight={"1px"}
              >
                *
              </Typography>
            </Box>
            <TextField
              variant="outlined"
              placeholder="הקלד שם מלא"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
            />
          </Grid>

          <Grid xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle2" mr={"10px"}>
                מייל
              </Typography>
              <Typography
                variant="subtitle2"
                color={"error"}
                marginRight={"1px"}
              >
                *
              </Typography>
            </Box>
            <TextField
              variant="outlined"
              placeholder="הקלד מייל"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle2" mr={"10px"}>
                מספר טלפון
              </Typography>
              <Typography
                variant="subtitle2"
                color={"error"}
                marginRight={"1px"}
              >
                *
              </Typography>
            </Box>
            <TextField
              required
              variant="outlined"
              placeholder="05X-XXXXXXX"
              value={phone}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setPhone(value);
                }
              }}
              inputProps={{
                maxLength: 10,
              }}
              fullWidth
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: "10px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="subtitle2" mr={"10px"}>
              מידע נוסף
            </Typography>
            <Typography variant="subtitle2" color={"error"} marginRight={"1px"}>
              *
            </Typography>
          </Box>

          <TextField
            variant="outlined"
            placeholder="הודעה למארגן על מידע נוסף"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            multiline
            rows={4}
            required
          />
        </Box>

        <LoadingButton
          loading={isPending}
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            height: "50px",
            mt: 3,
            borderRadius: "100px",
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          <Typography variant="subtitle1" color={"white"}>
            הירשם לאירוע
          </Typography>
        </LoadingButton>
      </Box>
    </Modal>
  );
}
