// MUI
import Grid from "@mui/material/Unstable_Grid2";

// Components
import { Form } from "./Form";
import { Wallpaper } from "./Wallpaper";

export default function ContactUs() {
  return (
    <Grid container spacing={2}>
      <Grid
        xs={12}
        sm={7}
        sx={{
          padding: "50px",
          display: "flex ",
          height: "90vh",
        }}
      >
        <Form />
      </Grid>

      <Grid xs={12} sm={5} sx={{ display: { xs: "none", sm: "flex" } }}>
        <Wallpaper />
      </Grid>
    </Grid>
  );
}
