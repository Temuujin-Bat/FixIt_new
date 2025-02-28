// MUI
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import { Close, Facebook, Instagram, LocationOn, Phone } from '@mui/icons-material';

const ModalHeader = ({ barber, onClose }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: 4,
        borderRadius: 10,
        mb: 3,
        position: 'relative'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '60%',
          backgroundImage: `url(${barber?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          zIndex: 1,
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50%', // Controls how much of the image fades
            background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,1) 100%)',
          },
        }}
      />

      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          color: 'secondary.darker',
          backgroundColor: 'white',
          border: '1px solid',
          borderColor: 'secondary.light',
          zIndex: 100
        }}
      >
        <Close fontSize="large" />
      </IconButton>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Avatar src={barber?.image}
                sx={{
                  width: 100,
                  height: 100,
                  mt: 15,
                  mb: 4,
                  zIndex: 100,
                  borderRadius: 5,
                  border: '5px solid',
                  borderColor: 'white'
                }} />
        <Typography variant="h4">{barber?.name}</Typography>
        <Box sx={{ display: 'flex', color: 'secondary.dark', alignItems: 'center', mb: 3, mt: 1 }}>
          <LocationOn fontSize="small" />
          <Typography variant="body1">{barber?.location}</Typography>
        </Box>
        <Box>
          <IconButton
            sx={{ backgroundColor: 'secondary.lighter', color: 'secondary.darker', mr: 2, borderRadius: 4 }}>
            <Phone fontSize="large" />
          </IconButton>
          <IconButton
            sx={{ backgroundColor: 'secondary.lighter', color: 'secondary.darker', mr: 2, borderRadius: 4 }}>
            <Instagram fontSize="large" />
          </IconButton>
          <IconButton sx={{ backgroundColor: 'secondary.lighter', color: 'secondary.darker', borderRadius: 4 }}>
            <Facebook fontSize="large" />
          </IconButton>
        </Box>
      </Box>

    </Box>
  );
};

export { ModalHeader };