// MUI
import { Box, Button, } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';

// Third party
import { useFormContext } from 'react-hook-form';

// Components
import { TStepActions } from '../type';

const StepActions = ({ activeStep, next }: TStepActions) => {
  const { watch } = useFormContext();
  const selectedWorker = watch('worker');
  const selectedService = watch('service');
  const selectedDate = watch('date');
  const selectedTime = watch('time');
  const selectedName = watch('name');

  return (
    <Box width={'100%'} mt={3}>
      {activeStep == 0 && (
        <Button
          onClick={next}
          disabled={activeStep === 0 && !selectedWorker}
          sx={{
            borderRadius: 5,
            backgroundColor: 'primary.dark',
            color: 'white',
            fontWeight: 'bold',
            padding: 2
          }}
          variant="contained"
          fullWidth
          endIcon={<ArrowForwardIos />}
        >
          Үргэлжлүүлэх
        </Button>
      )}

      {activeStep == 1 && (
        <Button
          onClick={next}
          disabled={activeStep === 1 && !selectedService}
          sx={{
            borderRadius: 5,
            backgroundColor: 'primary.dark',
            color: 'white',
            fontWeight: 'bold',
            padding: 2
          }}
          variant="contained"
          fullWidth
          endIcon={<ArrowForwardIos />}
        >
          Үргэлжлүүлэх
        </Button>
      )}

      {activeStep == 2 && (
        <Button
          onClick={next}
          disabled={activeStep === 2 && !selectedDate}
          sx={{
            borderRadius: 5,
            backgroundColor: 'primary.dark',
            color: 'white',
            fontWeight: 'bold',
            padding: 2
          }}
          variant="contained"
          fullWidth
          endIcon={<ArrowForwardIos />}
        >
          Үргэлжлүүлэх
        </Button>
      )}

      {activeStep == 3 && (
        <Button
          onClick={next}
          disabled={activeStep === 3 && !selectedTime}
          sx={{
            borderRadius: 5,
            backgroundColor: 'primary.dark',
            color: 'white',
            fontWeight: 'bold',
            padding: 2
          }}
          variant="contained"
          fullWidth
          endIcon={<ArrowForwardIos />}
        >
          Үргэлжлүүлэх
        </Button>
      )}

      {activeStep == 4 && (
        <Button
          onClick={next}
          disabled={activeStep === 4 && !selectedName}
          sx={{
            borderRadius: 5,
            backgroundColor: 'primary.dark',
            color: 'white',
            fontWeight: 'bold',
            padding: 2
          }}
          variant="contained"
          fullWidth
          endIcon={<ArrowForwardIos />}
        >
          Үргэлжлүүлэх
        </Button>
      )}
    </Box>
  );
};

export { StepActions };