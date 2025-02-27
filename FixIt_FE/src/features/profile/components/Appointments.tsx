// MUI
import { MenuItem, Stack, Typography } from '@mui/material';
import { ArrowForwardIos, CalendarMonthOutlined } from '@mui/icons-material';

// Third party
import { useNavigate } from 'react-router-dom';

const Appointments = () => {
  const navigate = useNavigate();

  return (
    <MenuItem
      onClick={() => navigate('/profile/appointments')}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 2,
        borderBottom: '1px solid',
        borderColor: 'grey.400',
        transition: 'border-color 0.3s ease',
        '&:hover': {
          borderBottom: '2px solid',
          borderBottomColor: 'primary.main',
        },
      }}
    >
      <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
        <CalendarMonthOutlined fontSize={'small'} />
        <Typography
          variant="body1"
          sx={{
            color: 'text.primary',
            transition: 'color 0.3s ease, border-color 0.3s ease',
            ml: 1
          }}
        >
          Миний цагууд
        </Typography>
      </Stack>


      <ArrowForwardIos fontSize={'small'} />
    </MenuItem>
  );
};

export { Appointments };