import { useMemo, useState } from 'react';

// MUI
import { Box } from '@mui/material';

// Third party
import { useForm } from 'react-hook-form';

// Components
import {
  ActiveStep,
  BackAction,
  FirstStep,
  FourthStep,
  SecondStep,
  StepActions,
  StepTitle,
  ThirdStep
} from '../components';
import { FormProvider } from '../../../components/hookForm';
import { TBarbershop, TService, TWorker } from '../type';

const BarberSelection = ({ barber }: { barber: TBarbershop }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const defaultValues = useMemo(
    () => ({
      worker: null as TWorker | null,
      service: null as TService | null
    }),
    [],
  );

  const methods = useForm({
    defaultValues,
  });

  const {} = methods;

  return (
    <FormProvider methods={methods}>
      <Box
        sx={{
          padding: 4,
          backgroundColor: 'white',
          borderRadius: 10,
          mt: 3,
          position: 'relative'
        }}>
        <ActiveStep activeStep={activeStep} totalSteps={4} />

        {activeStep != 0 && <BackAction prev={() => setActiveStep(activeStep - 1)} />}

        <StepTitle step={activeStep} />

        {activeStep === 0 && <FirstStep barber={barber} />}
        {activeStep === 1 && <SecondStep />}
        {activeStep === 2 && <ThirdStep />}
        {activeStep === 3 && <FourthStep />}


        <StepActions
          activeStep={activeStep}
          next={() => setActiveStep(activeStep + 1)}
        />
      </Box>
    </FormProvider>
  );
};

export { BarberSelection };