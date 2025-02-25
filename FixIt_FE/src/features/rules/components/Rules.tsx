// MUI
import Grid from "@mui/material/Unstable_Grid2";

// Components
import {
  BattleRoyal,
  TeamDeathmatch,
  Breach,
  VIP,
  CaptureTheFlag,
  Domination,
} from "../index";

export default function Rules() {
  return (
    <Grid container spacing={3}>
      <Grid xs={12} sm={12} md={6} lg={6}>
        <BattleRoyal />
      </Grid>

      <Grid xs={12} sm={12} md={6} lg={6}>
        <TeamDeathmatch />
      </Grid>

      <Grid xs={12} sm={12} md={6} lg={6}>
        <Breach />
      </Grid>

      <Grid xs={12} sm={12} md={6} lg={6}>
        <VIP />
      </Grid>

      <Grid xs={12} sm={12} md={6} lg={6}>
        <CaptureTheFlag />
      </Grid>

      <Grid xs={12} sm={12} md={6} lg={6}>
        <Domination />
      </Grid>
    </Grid>
  );
}
