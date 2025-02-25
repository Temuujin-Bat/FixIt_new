// MUI
import { Container } from "@mui/material";

// Hooks
import { useAuthentication } from "../../../hooks/useAuthenticate";

// Components
import Logo from "./Logo";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import LoggedInUser from "./LoggedInUser";
import NotLoggedIn from "./NotLoggedIn";

export default function Navbar() {
  const { isLoggedIn } = useAuthentication();

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* PAGES */}
      <MenuMobile />

      {/* LOGO */}
      <Logo />

      {/* PAGES WHEN LARGE */}
      <MenuDesktop />

      {/* LOGIN AND USER */}
      {isLoggedIn() ? <LoggedInUser /> : <NotLoggedIn />}
    </Container>
  );
}
