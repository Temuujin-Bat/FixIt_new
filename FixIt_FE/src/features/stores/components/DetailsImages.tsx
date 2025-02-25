import { FC, useState } from 'react';

// MUI
import {
  Box, Paper, Stack, Typography,
} from '@mui/material';

// Components
import { TSingleStore } from '../type';
import { DetailsImagesModal } from './DetailsImagesModal';

const DetailsImages: FC<TSingleStore> = ({ singleStore }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Paper elevation={10} sx={{ borderRadius: '20px' }}>
        <Box
          sx={{ '&:hover': { cursor: 'pointer' } }}
          onClick={() => setIsOpen(true)}
        >
          <Box sx={{ position: 'relative' }}>
            <Box sx={{ height: { xs: '200px', sm: '300px', md: '400px' } }}>
              <Stack
                component="img"
                loading="lazy"
                decoding="async"
                src={singleStore?.images?.gallery[0]}
                sx={{
                  height: '100%',
                  objectFit: 'cover',
                  width: '100%',
                  borderRadius: '20px',
                }}
              />
            </Box>

            <Stack
              sx={{
                position: 'absolute',
                bottom: '0',
                left: '0px',
                backgroundColor: 'primary.dark',
                padding: '2px 20px',
                borderRadius: '0px 20px 0px 20px',
              }}
            >
              <Typography color="common.white" variant="h5">
                {singleStore?.images?.gallery?.length}
                + תמונות
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Paper>

      <DetailsImagesModal
        singleStore={singleStore}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export {
  DetailsImages,
};
