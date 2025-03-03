// MUI
import { Box, Typography } from '@mui/material';

// Third party
import { useFormContext } from 'react-hook-form';

// Components
import { TServices } from '../type.ts';

const SecondStep = () => {
  const { setValue, watch } = useFormContext();
  const selectedWorker = watch('worker');
  const selectedService = watch('service');

  return (
    <>
      {selectedWorker?.services?.map((service: TServices) => (
        <Box
          key={service.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            border: '1px solid',
            borderColor: selectedService?.id === service?.id ? 'secondary.light' : 'secondary.light',
            backgroundColor: selectedService?.id === service?.id ? 'secondary.lighter' : 'white',
            borderRadius: 3,
            paddingX: 3,
            paddingY: 1,
            mb: 1,
            '&:hover': {
              cursor: 'pointer'
            }
          }}
          onClick={() => setValue('service', service)}
        >
          <Box>
            <Typography variant="subtitle1">{service.name}</Typography>
            <Typography variant="body2">{service.duration} мин</Typography>
          </Box>

          <Typography>{service.price}₮</Typography>
        </Box>
      ))}
    </>
  );
};

export { SecondStep };