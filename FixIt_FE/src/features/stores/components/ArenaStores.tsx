// MUI
import Grid from '@mui/material/Unstable_Grid2';
import {
  Typography, Stack, Box, Paper,
} from '@mui/material';
import { Store, AddShoppingCart, DeliveryDining } from '@mui/icons-material';

// Third party
import { Link } from 'react-router-dom';

const ArenaStores = () => (
  <Grid container spacing={3}>
    <Grid
      xs={12}
      sm={6}
      lg={4}
      sx={{
        '&:hover': {
          transform: 'scale(1.03)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        },
      }}
    >
      <Paper
        component={Link}
        to="/stores/airsoft4u"
        sx={{ textDecoration: 'none' }}
      >
        <Box
          sx={{
            boxShadow: '0px 14px 12px rgba(0, 0, 0, 0.4)',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          {/* Media Section */}
          <Box sx={{ position: 'relative' }}>
            <Stack sx={{ height: '180px' }}>
              <Box
                component="img"
                src="/assets/Stores/TamirLogo2.png"
                loading="lazy"
                decoding="async"
                sx={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </Stack>

            <Typography
              variant="h6"
              sx={{
                width: '100%',
                padding: '10px',
                backgroundColor: 'primary.darker',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                letterSpacing: '3px',
              }}
            >
              Airsoft 4 U
            </Typography>
          </Box>

          {/* Info Section */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              paddingY: 1.5,
              backgroundColor: 'background.paper',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Box
              sx={{
                textAlign: 'center',
                paddingX: 2,
                paddingY: 1,
                borderRadius: '20px',
                backgroundColor: 'grey.100',
              }}
            >
              <DeliveryDining sx={{ color: 'text.primary' }} />
              <Typography variant="body2" color="primary.dark">
                משלוחים במרכז
              </Typography>
                <Typography variant="body2" color="primary.dark">
עד יום עסקים 1!                </Typography>
            </Box>

            <Box
              sx={{
                textAlign: 'center',
                paddingX: 2,
                paddingY: 1,
                borderRadius: '20px',
                backgroundColor: 'grey.100',
              }}
            >
              <Store sx={{ color: 'text.primary' }} />
              <Typography variant="body2" color="primary.dark">
                חנות פיזית
              </Typography>
            </Box>

            <Box
              sx={{
                textAlign: 'center',
                paddingX: 2,
                paddingY: 1,
                borderRadius: '20px',
                backgroundColor: 'grey.100',
              }}
            >
              <AddShoppingCart sx={{ color: 'text.primary' }} />
              <Typography variant="body2" color="primary.dark">
                חנות אונליין
              </Typography>
            </Box>
          </Box>

          {/* Address Section */}
          <Box
            sx={{
              width: '100%',
              backgroundColor: 'primary.lighter',
              p: '10px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="caption"
              fontWeight="bold"
              color="common.black"
              letterSpacing={1}
            >
              בית דגן - הדוכן ממוקם בסמוך למשרדי רשות ההגירה והאוכלוסין, סניף
              ראשון לציון
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  </Grid>
);

export {
  ArenaStores,
};
