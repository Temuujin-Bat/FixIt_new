// MUI
import Grid from '@mui/material/Unstable_Grid2';
import {
  Box, Card, Stack, Typography,
} from '@mui/material';
import { Link as RouterLink } from "react-router-dom"

const ArenaStoresDetailsHero = () => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'background.paper',
      borderRadius: 0,
    }}
  >
    <Grid container spacing={2}>
      <Grid xs={12} sm={6} md={4}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <Stack
            component="img"
            src="/assets/Stores/TamirLogo2.png"
            loading="lazy"
            decoding="async"
            sx={{
              width: '100%',
              height: '100%',
              filter: 'brightness(90%)',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Grid>

      <Grid
        xs={12}
        sm={6}
        md={8}
        px={2}
        pb={{ xs: '20px', md: 0 }}
        pr={{ md: '20px' }}
      >
        <Typography pt={2} variant="h4" color="primary.darker">
          Airsoft 4 U
        </Typography>
        <Typography variant="body1" color="text.secondary" fontSize={'1.2rem'}>
          דוכן שטח המציע תחמושת, מיגון, ציוד היקפי, ציוד תחזוקה וכלים במחירים
          מיוחדים.
        </Typography>
        <Typography variant="body1" color="text.secondary" fontSize={'1.2rem'}>
          ניתן להשכיר כלי משחק וציוד מיגון במקום.
        </Typography>
        <Typography variant="body1" color="text.secondary" fontSize={'1.2rem'}>
          משלוחים באיזור
          המרכז עד יום עסקים אחד!
        </Typography>
        <Box mt={2}>
          <Typography variant="h6" color="primary.darker">
            דרכים ליצירת קשר:
          </Typography>

          <Stack>
            <Box display="flex" alignItems="center">
              <Typography variant="body1" color="text.secondary">
                מספר טלפון:&nbsp;
              </Typography>
              <Typography variant="body1">0525-556-635</Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <Typography variant="body1" color="text.secondary">
                מייל:&nbsp;
              </Typography>
              <Typography variant="body1">
                sonoma_tamir123@walla.co.il
              </Typography>
            </Box>

            <Typography
              component={RouterLink}
              to="/privacy?type=store"
              pt={2} variant="h6" color="primary.darker" sx={{
              cursor: 'pointer'
            }}>תקנון חנות
            </Typography>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  </Card>
);

export {
  ArenaStoresDetailsHero,
};
