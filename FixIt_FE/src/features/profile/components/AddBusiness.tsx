// MUI
import { MenuItem, Stack, Typography } from '@mui/material';
import { AddOutlined, ArrowForwardIos } from '@mui/icons-material';

const AddBusiness = () => {
  return (
    <MenuItem
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
        <AddOutlined fontSize={'small'} />
        <Typography
          variant="body1"
          sx={{
            color: 'text.primary',
            transition: 'color 0.3s ease, border-color 0.3s ease',
            ml: 1
          }}
        >
          Шинэ бизнес нэмэх
        </Typography>
      </Stack>


      <ArrowForwardIos fontSize={'small'} />
    </MenuItem>
  );
};

export { AddBusiness };