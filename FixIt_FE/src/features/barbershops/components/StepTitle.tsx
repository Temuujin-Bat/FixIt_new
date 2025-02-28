// MUI
import { Typography } from '@mui/material';

// Components
import { CHOOSE_SERVICE } from '../../../data/constants';

const StepTitle = ({ step }: { step: number }) => {
  return (
    <Typography variant="h4" textAlign={'center'} mt={2} mb={1}>
      {CHOOSE_SERVICE[step]}
    </Typography>
  );
};

export { StepTitle };