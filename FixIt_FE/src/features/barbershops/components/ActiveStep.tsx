// MUI
import { Box, LinearProgress } from '@mui/material';

const ActiveStep = ({ activeStep, totalSteps }: { activeStep: number, totalSteps: number }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '50%',
        top: 10,
        width: '50%',
        height: 8,
        display: 'flex',
        justifyContent: 'space-between',
        transform: 'translateX(-50%)',
      }}
    >
      {[ ...Array(totalSteps) ].map((_, index) => {
        const isFilled = index <= activeStep;

        return (
          <LinearProgress
            key={index}
            variant="determinate"
            value={isFilled ? 100 : 0}
            sx={{
              width: '15%',
              height: '100%',
              borderRadius: 2,
              backgroundColor: (theme) => theme.palette.grey[300],
              '& .MuiLinearProgress-bar': {
                backgroundColor: isFilled
                  ? (theme) => theme.palette.primary.dark
                  : 'transparent',
              },
            }}
          />
        );
      })}
    </Box>
  );
};

export { ActiveStep };