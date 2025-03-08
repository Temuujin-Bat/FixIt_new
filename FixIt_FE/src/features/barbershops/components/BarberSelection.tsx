import { useMemo, useState } from "react";

// MUI
import { Box } from "@mui/material";

// Third party
import { useForm } from "react-hook-form";

// Components
import {
  ActiveStep,
  BackAction,
  FifthStep,
  FirstStep,
  FourthStep,
  SecondStep,
  SixthStep,
  StepActions,
  StepTitle,
  ThirdStep,
} from "../components";
import { FormProvider } from "../../../components/hookForm";
import { useAppSelector } from "../../../hooks/useAppStore";
import { getCustomerInfo } from "../../../store/authenticate/selectors";
import { TBarbershops, TServices, TWorker } from "../../../types";

const BarberSelection = ({ barber }: { barber: TBarbershops | null }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const selectedCustomer = useAppSelector(getCustomerInfo);

  const defaultValues = useMemo(
    () => ({
      worker: null as TWorker | null,
      service: null as TServices | null,
      date: "",
      time: "",
      name: selectedCustomer?.name,
      phone: selectedCustomer?.phone,
      note: "",
    }),
    [selectedCustomer],
  );

  const methods = useForm({
    defaultValues,
  });

  const { watch } = methods;
  console.log(watch("date"));

  return (
    <FormProvider methods={methods}>
      <Box
        sx={{
          padding: 4,
          backgroundColor: "white",
          borderRadius: 10,
          mt: 3,
          position: "relative",
        }}
      >
        <ActiveStep activeStep={activeStep} totalSteps={5} />

        {activeStep != 0 && activeStep != 5 && (
          <BackAction prev={() => setActiveStep(activeStep - 1)} />
        )}

        <StepTitle step={activeStep} />

        {activeStep === 0 && <FirstStep barber={barber} />}
        {activeStep === 1 && <SecondStep />}
        {activeStep === 2 && <ThirdStep />}
        {activeStep === 3 && <FourthStep />}
        {activeStep === 4 && <FifthStep />}
        {activeStep === 5 && <SixthStep barber={barber} />}

        <StepActions
          activeStep={activeStep}
          next={() => setActiveStep(activeStep + 1)}
        />
      </Box>
    </FormProvider>
  );
};

export { BarberSelection };
