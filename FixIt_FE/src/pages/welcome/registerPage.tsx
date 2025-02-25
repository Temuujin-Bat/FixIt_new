// MUI
import Grid from "@mui/material/Unstable_Grid2";

// Components
import { Register, RegisterImg } from "../../features/register";
import { ScrollToTop } from "../../components/scroll";

export default function RegisterPage() {
  return (
    <>
      <ScrollToTop />

      <Grid container sx={{ height: "100vh" }}>
        <Grid xs={12} sm={8} md={5} lg={5}>
          <Register />
        </Grid>

        <Grid xs={0} sm={4} md={7} lg={7}>
          <RegisterImg />
        </Grid>
      </Grid>
    </>
  );
}
