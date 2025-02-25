// MUI
import Grid from "@mui/material/Unstable_Grid2";

// Components
import { TechniciansData } from "../../../data/techniciansData/data";
import { TechniciansCard } from "../index";

export default function Technicians() {
  return (
    <Grid container spacing={3}>
      {TechniciansData.map((technician, index) => (
        <Grid xs={12} sm={6} md={4} key={technician.id}>
          <TechniciansCard technician={technician} index={index} />
        </Grid>
      ))}
    </Grid>
  );
}
