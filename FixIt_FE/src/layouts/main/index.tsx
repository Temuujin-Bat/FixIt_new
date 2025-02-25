// Third party
import { Outlet, useLocation } from "react-router-dom";

// MUI
import { styled, useMediaQuery } from "@mui/system";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

// Components
import { useTheme } from "@mui/material";
import { ApplicationFooter } from "./Footer";
import { ApplicationBar } from "./Bar/index";

const MainStyled = styled("main")(() => ({
  width: "100%",
  flexGrow: 1,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const MainLayout = () => {
  const location = useLocation();
  const noFooterRoutes = ["/profile", "/profile/updatePassword"];

  const theme = useTheme();
  const isScreenXS = useMediaQuery(theme.breakpoints.down("sm"));

  const showFooter =
    !noFooterRoutes.includes(location.pathname) &&
    !(location.pathname.includes("/contact-us") || location.pathname.includes("/faq") && !isScreenXS);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ApplicationBar />
      <MainStyled>
        <Toolbar />
        <Outlet />
      </MainStyled>

      {showFooter && <ApplicationFooter />}
    </Box>
  );
};

export { MainLayout };
