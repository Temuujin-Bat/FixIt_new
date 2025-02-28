// MUI
import { Box, Typography } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';

const BackAction = ({ prev }: { prev: () => void }) => {
  return (
    <Box
      onClick={prev}
      sx={{ display: 'flex', alignItems: 'center', '&:hover': { cursor: 'pointer' } }}
    >
      <ArrowBackIos fontSize={'small'} />
      <Typography>
        Буцах
      </Typography>
    </Box>
  );
};

export { BackAction };