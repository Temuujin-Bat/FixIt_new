// MUI
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import {
  Paper, Box, Typography, Stack,
} from '@mui/material';

// Components
import { getStoresData } from '../../../store/stores/selectors';

export default function DetailsInformation() {
  const { singleStore } = getStoresData();

  return (
    <Paper
      elevation={10}
      sx={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: '20px',
      }}
    >
      <Grid container spacing={2}>
        <Grid xs={12} sm={8}>
          <Stack>
            <Typography variant="h5" color="primary.darker">
              {singleStore?.name}
            </Typography>
            <Typography variant="body1">
              {singleStore?.description}
              .
            </Typography>
          </Stack>

          <Stack mt="15px">
            <Typography variant="h5" color="primary.darker">
              שעות פתיחה:
            </Typography>
            <Typography variant="subtitle1">ימים א'-ה': 10:00-20:00</Typography>
            <Typography variant="subtitle1">
              ימי ו' וערבי חג: 09:00-13:00
            </Typography>
          </Stack>

          <Box mt="15px">
            <Typography variant="h5" color="primary.darker">
              דרכים ליצירת קשר:
            </Typography>

            <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
              <Typography variant="body1">מספר טלפון:&nbsp;</Typography>
              <Typography variant="body1">
                {singleStore?.contactInfo?.phoneNumber}
              </Typography>
            </Stack>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1">מייל:&nbsp;</Typography>
              <Typography variant="body1">
                {singleStore?.contactInfo?.email}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} sm={4}>
          <Box
            sx={{
              height: { xs: '200px', sm: '100%' },
              width: '100%',
              borderRadius: '10px',
            }}
          >
            <Stack
              component="img"
              loading="lazy"
              decoding="async"
              src={singleStore?.images?.logo}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
