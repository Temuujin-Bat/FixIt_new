// MUI
import { Box, Typography } from '@mui/material';

const ModalRegisterBusinessAction = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, '&:hover': { cursor: 'pointer' } }}>
      <Box sx={{
        backgroundColor: 'white',
        borderRadius: 20,
        border: '1px solid',
        borderColor: 'secondary.lighter',
        maxWidth: 'fit-content',
        padding: '4px 15px'
      }}>
        <Typography variant="body1">Өөрийн бизнесдээ ийм хуудас нээгээрэй</Typography>
      </Box>
    </Box>
  );
};

export { ModalRegisterBusinessAction };