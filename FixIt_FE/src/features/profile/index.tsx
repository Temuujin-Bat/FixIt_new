// MUI
import { Box, Container } from "@mui/material";

// Third party
import { Outlet, useLocation } from "react-router-dom";

// Components
import { GuestProfile, ProfileTitle, UserProfile } from "./components";

// Hooks
import { useAuth } from "../../hooks/useAuth";

const Profile = () => {
  const { isLoggedIn, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {location.pathname === "/profile" ? (
        <Container maxWidth="xs">
          <Box sx={{ mt: 5, mb: 3 }}>
            <ProfileTitle text="Профайл" />
          </Box>

          {isLoggedIn ? <UserProfile /> : <GuestProfile />}
        </Container>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export { Profile };
