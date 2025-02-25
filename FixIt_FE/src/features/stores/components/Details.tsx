// MUI
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';

// Hooks
import { useParams } from 'react-router-dom';
import { useGetSingleStoreAPI } from '../../../hooks/useStores';

// Third party

// Components
import {
  DetailsInformation, DetailsHero,
} from '..';
import { DetailsMap } from './DetailsMap';
import { DetailsLinks } from './DetailsLinks';

export default function Details() {
  const { name } = useParams();
  useGetSingleStoreAPI(name || '');

  return (
    <Container maxWidth="lg">
      <DetailsHero />

      <DetailsMap />

      <Grid container spacing={2} mt={1}>
        <Grid xs={12} md={9}>
          <DetailsInformation />
        </Grid>

        <Grid xs={12} md={3}>
          <DetailsLinks />
        </Grid>
      </Grid>
    </Container>
  );
}
