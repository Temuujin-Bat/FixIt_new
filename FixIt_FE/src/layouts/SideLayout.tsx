import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { FC } from 'react';
import { useResponsive } from '../hooks/useResponsive';
import Image from '../components/image';

type TSideLayoutProps = {
  title: string;
  image: string;
  children: React.ReactNode;
};

const SideLayout: FC<TSideLayoutProps> = ({ title, image, children }) => {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const renderCarousel = (
    <Image
      key={image}
      alt={image}
      src={image}
      overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${
        theme.palette.common.black
      } 100%)`}
    />
  );

  return (
    <Box sx={{ minHeight: 1, display: 'flex' }}>
      <Box
        sx={{
          mx: 'auto',
          flexShrink: 0,
          py: { xs: 5, md: 8 },
          px: { xs: 2, md: 10 },
          width: { xs: 1, md: 600 },
        }}
      >
        {children}
      </Box>

      {mdUp && (
        <Box
          sx={{
            flexGrow: 1,
            overflow: 'hidden',
            position: 'relative',
            bgcolor: 'common.black',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              p: 10,
              left: 0,
              bottom: 80,
              width: 1,
              zIndex: 10,
              textAlign: 'center',
              position: 'absolute',
              color: 'common.white',
              whiteSpace: 'pre-line',
            }}
          >
            {title}
          </Typography>

          {renderCarousel}
        </Box>
      )}
    </Box>
  );
};

export {
  SideLayout,
};
