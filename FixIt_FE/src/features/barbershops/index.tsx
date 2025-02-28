import { useState } from 'react';

// MUI
import { Avatar, Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

// Third party
import Slider from 'react-slick';

// Components
import { DashboardDialog, DashboardModal } from './components';
import { Barbershop, barbershops } from '../../data/BarberData';
import { REACT_SETTINGS } from '../../data/constants';

const BarberShop = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);
  const [selectedBarber, setSelectedBarber] = useState<Barbershop | null>(null);

  return (
    <>
      <Container maxWidth="xs" sx={{ mt: 3 }}>
        {barbershops.map((barber, index) => (
          <Box
            key={barber.id}
            sx={{
              border: '1px solid',
              borderColor: 'secondary.lighter',
              borderRadius: 5,
              mb: 5,
              boxShadow: '0px 4px 10px rgba(0, 0, 0, .1)',
            }}
          >
            <Box sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{ width: 50, height: 50 }} />

              <Box ml={2}>
                <Typography variant="subtitle2">{barber.name}</Typography>
                <Typography variant="body2">{barber.location}</Typography>
              </Box>
            </Box>

            <Box sx={{ borderRadius: 4, }}>
              <Slider {...REACT_SETTINGS}>
                <Box
                  sx={{ borderRadius: 4, objectFit: 'cover', height: '400px' }}
                  component="img"
                  alt={`Image ${index + 1} of ${barber.name}`}
                  src={barber.image}
                />
              </Slider>
            </Box>

            <Box sx={{ padding: 2, mt: -1 }}>
              <Typography>4.96 ★ (323)</Typography>

              <Typography sx={{ fontStyle: 'italic' }}>&#34;Хотын хамгийн сайн үсчин&#34;</Typography>
            </Box>

            <Box sx={{ padding: 2, mt: -2 }}>
              <Button
                onClick={() => {
                  setSelectedBarber(barber);
                  setOpen(true);
                }}
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 120,
                  color: 'black',
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  border: '1px solid',
                  borderColor: 'secondary.light',
                  fontWeight: 'bold'
                }}
              >
                Цаг захиалах
              </Button>
            </Box>

            <Box sx={{ padding: 2, mt: -2 }}>
              {barber.workers.map((worker) => (
                <Box key={worker.id}
                     sx={{
                       display: 'flex',
                       justifyContent: 'space-between',
                       mb: 1
                     }}>
                  <Box>
                    <Typography variant="subtitle1">{worker.services[0].name}</Typography>
                    <Typography variant="body2" color={'secondary.dark'}>{worker.name}</Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="subtitle1">{worker.services[0].price}₮</Typography>
                    <Typography variant="body2">{worker.services[0].duration} мин</Typography>
                  </Box>

                </Box>
              ))}
            </Box>

            <Box
              onClick={() => {
                setSelectedBarber(barber);
                setOpen(true);
              }}
              sx={{
                padding: 2, mt: -3, display: 'flex', alignItems: 'center', '&:hover': {
                  cursor: 'pointer'
                }
              }}>
              <Typography variant="subtitle1" color={'primary.main'}>Бүх үйлчилгээг үзэх</Typography>
              <ArrowForward sx={{ color: 'primary.main', fontSize: 'large', ml: 1 }} />
            </Box>
          </Box>
        ))}
      </Container>

      {isMobile ? (
        <DashboardDialog
          open={open}
          onClose={() => setOpen(false)}
          barber={selectedBarber}
        />
      ): (
        <DashboardModal
          open={open}
          onClose={() => setOpen(false)}
          barber={selectedBarber}
        />
      )}
    </>
  );
};

export { BarberShop };