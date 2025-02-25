// MUI
import { Toolbar, AppBar } from "@mui/material";

// Components
import Navbar from "./Navbar";

const ApplicationBar = () => (
  <AppBar
    elevation={1}
    sx={{
      backgroundColor: "#101921",
      height: "64px",
    }}
  >
    <Toolbar
      sx={{
        position: "static",
      }}
      disableGutters
    >
      <Navbar />
    </Toolbar>
  </AppBar>
);

export { ApplicationBar };
