import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { useBoolean } from '../../../hooks/useBoolean';
import { Iconify } from '../../../components';
import { ProductsFilter, ProductsList } from './products';

const VIEW_OPTIONS = [
  { value: 'list', icon: <Iconify icon="carbon:list-boxes" /> },
  { value: 'grid', icon: <Iconify icon="carbon:grid" /> },
];

const ProductsView = () => {
  const mobileOpen = useBoolean();

  const [viewMode, setViewMode] = useState('grid');

  const handleChangeViewMode = useCallback(
    (_: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
      if (newAlignment !== null) {
        setViewMode(newAlignment);
      }
    },
    [],
  );

  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          py: 5,
        }}
      >
        <Typography variant="h3">סינון</Typography>

        <Button
          variant="contained"
          startIcon={<Iconify icon="carbon:filter" width={18} />}
          onClick={mobileOpen.onTrue}
          sx={{
            display: { lg: 'none' },
          }}
        >
          סינון
        </Button>
      </Stack>

      <Stack
        direction={{
          xs: 'column-reverse',
          md: 'row',
        }}
        sx={{ mb: { xs: 8, md: 10 } }}
      >
        <Stack spacing={5} divider={<Divider sx={{ borderStyle: 'dashed' }} />}>
          <ProductsFilter open={mobileOpen.value} onClose={mobileOpen.onFalse} />
        </Stack>

        <Box
          sx={{
            flexGrow: 1,
            pl: { lg: 8 },
            width: { lg: `calc(100% - ${280}px)` },
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
            <ToggleButtonGroup
              exclusive
              size="small"
              value={viewMode}
              onChange={handleChangeViewMode}
              sx={{ borderColor: 'transparent' }}
            >
              {VIEW_OPTIONS.map((option) => (
                <ToggleButton key={option.value} value={option.value}>
                  {option.icon}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>

          </Stack>
          <ProductsList
            viewMode={viewMode}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export {
  ProductsView,
};
