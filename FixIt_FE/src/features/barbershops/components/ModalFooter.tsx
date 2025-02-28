// MUI
import { Box, Typography } from '@mui/material';

const ModalFooter = () => {
  return (
    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3">Fix It</Typography>

      <Box sx={{ display: 'flex' }}>
        <Typography variant="body2" sx={{ mr: 1, '&:hover': { cursor: 'pointer' } }}>
          Нууцлалын бодлого
        </Typography>

        <Typography variant="body2" sx={{ '&:hover': { cursor: 'pointer' } }}>
          Үйлчилгээний нөхцөл
        </Typography>
      </Box>
    </Box>
  );
};

export { ModalFooter };