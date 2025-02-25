// MUI
import Grid from "@mui/material/Unstable_Grid2";

// Components
import { RentalsData } from "../../../data/rentalsData/data";
import { RentalsCard } from "../index";

export default function Rentals() {
  return (
    <Grid container spacing={3}>
      {RentalsData.map((rental) => (
        <Grid xs={12} sm={6} md={4} key={rental.id}>
          <RentalsCard rental={rental} />
        </Grid>
      ))}
    </Grid>
  );
}
