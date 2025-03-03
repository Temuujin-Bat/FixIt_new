// MUI
import { Box, Dialog } from '@mui/material';

// Components
import { BarberSelection, Footer, Gallery, Header, RegisterBusinessAction, Reviews } from '../components';
import { TBarbershop } from '../type';

const DashboardDialog = ({ open, onClose, barber }: {
  open: boolean;
  onClose: () => void,
  barber: TBarbershop | null
}) => {

  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <Box sx={{
        height: '100%',
        overflowY: 'auto',
        boxSizing: 'border-box',
        backgroundColor: 'secondary.lighter',
        '&::-webkit-scrollbar': { width: 6 },
        '&::-webkit-scrollbar-thumb': { backgroundColor: '#888', borderRadius: '4px' },
        '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#555' },
      }}>
        <Header barber={barber} onClose={onClose} />

        <BarberSelection barber={barber} />

        <Gallery />

        <RegisterBusinessAction />

        <Reviews />

        <Footer />
      </Box>
    </Dialog>
  );
};

export { DashboardDialog };
