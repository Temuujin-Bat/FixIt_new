// MUI
import Grid from "@mui/material/Unstable_Grid2";

// Components
import { Login, LoginImg } from "../../features/login";
import { ScrollToTop } from "../../components/scroll";

export default function LoginPage() {
  return (
    <>
      <ScrollToTop />

      <Grid container height="100vh">
        <Grid xs={12} sm={8} md={5} lg={5}>
          <Login />
        </Grid>

        <Grid xs={0} sm={4} md={7} lg={7}>
          <LoginImg />
        </Grid>
      </Grid>
    </>
  );
}
