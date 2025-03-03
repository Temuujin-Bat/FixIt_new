import { useState } from "react";

// MUI
import {
  Box,
  Button,
  Container,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { ArrowBack, HeartBroken } from "@mui/icons-material";

// Third party
import { useNavigate } from "react-router-dom";

// Components
import { ProfileTitle } from "../../features/profile/components";
import { LoginModal, RegisterModal } from "../../features/welcome/components";

// Hooks
import { useAuth } from "../../hooks/useAuth";

const FavouritesPage = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mt: 5,
          mb: 3,
        }}
      >
        <Tooltip title="Буцах">
          <ArrowBack
            sx={{ mr: 1, "&:hover": { cursor: "pointer" } }}
            onClick={() => navigate(-1)}
          />
        </Tooltip>
        <ProfileTitle text="Хадгалсан зүйлс" />
      </Box>

      <Box
        sx={{
          border: "1px solid",
          borderColor: "secondary.lighter",
          padding: 3,
          borderRadius: 2.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeartBroken
          fontSize="large"
          sx={{ mt: 5, mb: 2, color: "primary.main" }}
        />

        <Typography textAlign="center" variant="h4">
          Танд одоогоор хадгалсан бизнес алга
        </Typography>
        <Typography
          mt={0.5}
          textAlign="center"
          variant="body1"
          color="secondary.dark"
        >
          Хайлт хийж, зүрхэн дээр дарж хадгалаарай!
        </Typography>

        <Button
          onClick={() => navigate("/")}
          fullWidth
          variant="contained"
          sx={{
            boxShadow: "none",
            fontWeight: "bold",
            color: "white",
            borderRadius: 2.5,
            padding: 1.5,
            mt: 3,
          }}
        >
          Бизнес хайх
        </Button>

        {!isLoggedIn && (
          <Stack
            width={"100%"}
            mt={2}
            sx={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Button
              onClick={() => setOpenLoginModal(true)}
              variant="text"
              sx={{
                border: "1px solid",
                borderColor: "secondary.lighter",
                color: "black",
                fontWeight: "bold",
                borderRadius: 2.5,
                padding: 1.5,
                textTransform: "uppercase",
                width: "49%",
              }}
            >
              НЭВТРЭХ
            </Button>

            <Button
              onClick={() => setOpenRegisterModal(true)}
              variant="text"
              sx={{
                border: "1px solid",
                borderColor: "secondary.lighter",
                color: "black",
                fontWeight: "bold",
                borderRadius: 2.5,
                padding: 1.5,
                textTransform: "uppercase",
                width: "49%",
              }}
            >
              Бүртгүүлэх
            </Button>
          </Stack>
        )}
      </Box>

      <LoginModal
        open={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
      />
      <RegisterModal
        open={openRegisterModal}
        onClose={() => setOpenRegisterModal(false)}
      />
    </Container>
  );
};

export default FavouritesPage;
