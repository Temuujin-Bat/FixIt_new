// MUI
import { Box, Stack, Typography } from '@mui/material';
import { LocationOn } from '@mui/icons-material';

// Components
import { getStoresData } from '../../../store/stores/selectors';

export default function DetailsHero() {
  const { singleStore } = getStoresData();

  return (
    <Box mt={2}>
      <Typography
        variant="h3"
        sx={{
          color: 'primary.darker',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        {singleStore?.name}
      </Typography>

      <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
        <LocationOn fontSize="small" />
        <Typography variant="subtitle2">
          {singleStore?.address?.addressString}
        </Typography>
      </Stack>
    </Box>
  );
}
