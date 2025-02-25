// MUI
import { Container } from "@mui/material";

// Third party
import { useLocation } from "react-router-dom";

// Components
import { MarketplaceActions, MarketplaceTitle } from "../index";

export default function MarketplacePage() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/marketplace/add" && (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <MarketplaceTitle />
          <MarketplaceActions />
        </Container>
      )}
    </>
  );
}
