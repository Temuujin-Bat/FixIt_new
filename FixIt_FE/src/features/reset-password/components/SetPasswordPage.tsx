// MUI
import Grid from "@mui/material/Unstable_Grid2";

// Components
import { SetPassword, SetPasswordImg } from "../index";
import { ScrollToTop } from "../../../components/scroll";

export default function SetPasswordPage() {
  return (
    <>
      <ScrollToTop />

      <Grid container height={"100vh"}>
        <Grid xs={12} sm={8} md={5} lg={5}>
          <SetPassword />
        </Grid>

        <Grid xs={0} sm={4} md={7} lg={7}>
          <SetPasswordImg />
        </Grid>
      </Grid>
    </>
  );
}
