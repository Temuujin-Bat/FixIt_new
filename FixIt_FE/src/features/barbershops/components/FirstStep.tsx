// MUI
import { Box, Typography } from '@mui/material';
import { PermIdentity } from '@mui/icons-material';

// Third party
import { useFormContext } from 'react-hook-form';

// Components
import { TBarbershop } from '../type';

const FirstStep = ({ barber, }: {
  barber: TBarbershop | null,
}) => {
  const { setValue, watch } = useFormContext();
  const selectedWorker = watch('worker');

  return (
    <>
      {barber?.workers.map((worker) => (
        <Box
          key={worker.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid',
            borderColor: selectedWorker?.id === worker?.id ? 'secondary.light' : 'secondary.light',
            backgroundColor: selectedWorker?.id === worker?.id ? 'secondary.lighter' : 'white',
            borderRadius: 20,
            padding: 1,
            mb: 1,
            '&:hover': {
              cursor: 'pointer'
            }
          }}
          onClick={() => setValue('worker', worker)}
        >
          <PermIdentity />
          <Typography ml={1}>{worker.name}</Typography>
        </Box>
      ))}
    </>
  );
};

export { FirstStep };