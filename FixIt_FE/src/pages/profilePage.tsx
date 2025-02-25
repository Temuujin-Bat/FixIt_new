// MUI
import { Container } from "@mui/material";

// Third party
import { Outlet, useLocation } from "react-router-dom";

// Components
import { Profile } from "../features/profile";

export default function ProfilePage() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/profile" && (
        <Container maxWidth={"sm"}>
          <Profile />
        </Container>
      )}

      <Outlet />
    </>
  );
}
