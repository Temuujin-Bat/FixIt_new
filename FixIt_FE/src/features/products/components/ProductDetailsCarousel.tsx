import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import {alpha, styled, useTheme} from '@mui/material/styles';

import Image from "../../../components/image";
import {useLightbox} from "../../../hooks/useLightbox.ts";
import {useCarousel} from "../../../hooks/useCarousel.ts";
import {useAppSelector} from "../../../hooks/useAppStore.ts";
import {getSelectedProduct} from "../../../store/products/selectors.ts";
import {Slide} from "yet-another-react-lightbox";
import {CarouselArrows, Lightbox} from "../../../components";
import Carousel from "react-slick";
import {bgGradient} from "../../../theme/css.ts";

// ----------------------------------------------------------------------

const THUMB_SIZE = 84;

type StyledThumbnailsContainerProps = {
  length: number;
};

const StyledThumbnailsContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'length',
})<StyledThumbnailsContainerProps>(({ length, theme }) => ({
  margin: theme.spacing(0, 'auto'),
  position: 'relative',

  '& .slick-slide': {
    opacity: 0.48,
    '&.slick-current': {
      opacity: 1,
    },
    '& > div': {
      padding: theme.spacing(0, 0.75),
    },
  },

  ...(length === 1 && {
    maxWidth: THUMB_SIZE * 1 + 16,
  }),
  ...(length === 2 && {
    maxWidth: THUMB_SIZE * 2 + 32,
  }),
  ...((length === 3 || length === 4) && {
    maxWidth: THUMB_SIZE * 3 + 48,
  }),
  ...(length >= 5 && {
    maxWidth: THUMB_SIZE * 6,
  }),
  ...(length > 2 && {
    '&:before, &:after': {
      ...bgGradient({
        direction: 'to left',
        startColor: `${alpha(theme.palette.background.default, 0)} 0%`,
        endColor: `${theme.palette.background.default} 100%`,
      }),
      top: 0,
      zIndex: 9,
      content: "''",
      height: '100%',
      position: 'absolute',
      width: (THUMB_SIZE * 2) / 3,
    },
    '&:after': {
      right: 0,
      transform: 'scaleX(-1)',
    },
  }),
}));

const ProductDetailsCarousel  = () => {
  const theme = useTheme();
  const selectedProduct = useAppSelector(getSelectedProduct);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [selectedProduct.thumbNail, ...(selectedProduct.gallery || [])]?.map((slide) => ({
    src: slide as string,
  }));

  const lightbox = useLightbox(slides as Slide[]);

  const carouselLarge = useCarousel({
    rtl: true,
    draggable: false,
    adaptiveHeight: true,
    afterChange: (index: number) => {
      setCurrentIndex(index);
    },
  });

  const carouselThumb = useCarousel({
    rtl: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: '0px',
    slidesToShow: (slides?.length || 0) > 3 ? 3 : slides?.length,
  });

  useEffect(() => {
    carouselLarge.onSetNav();
    carouselThumb.onSetNav();
  }, [carouselLarge, carouselThumb]);

  useEffect(() => {
    if (lightbox.open) {
      carouselLarge.onTogo(lightbox.selected);
    }
  }, [carouselLarge, lightbox.open, lightbox.selected]);

  const renderLargeImg = (
    <Box
      sx={{
        mb: 3,
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        bgcolor: 'background.neutral',
      }}
    >
      <CarouselArrows onNext={carouselThumb.onNext} onPrev={carouselThumb.onPrev}>
        <Carousel
          {...carouselLarge.carouselSettings}
          asNavFor={carouselThumb.nav}
          ref={carouselLarge.carouselRef}
        >
          {slides?.map((slide) => (
            <Image
              key={slide.src}
              alt="product"
              src={slide.src}
              ratio="1/1"
              onClick={() => lightbox.onOpen(slide.src)}
              sx={{ cursor: 'zoom-in' }}
            />
          ))}
        </Carousel>
      </CarouselArrows>
    </Box>
  );

  const renderThumbnails = (
    <StyledThumbnailsContainer length={slides?.length || 0}>
      <Carousel
        {...carouselThumb.carouselSettings}
        asNavFor={carouselLarge.nav}
        ref={carouselThumb.carouselRef}
        afterChange={(index: number) => {
          setCurrentIndex(index);
        }}
      >
        {slides?.map((item, index) => (
          <Box key={item.src} sx={{ px: 1 }}>
            <Avatar
              alt={`thumbnail-${index}`}
              src={item.src}
              variant="rounded"
              onClick={() => {
                if (carouselLarge.carouselRef?.current) {
                  carouselLarge.carouselRef.current.slickGoTo(index);
                  setCurrentIndex(index);
                }
              }}
              sx={{
                width: THUMB_SIZE,
                height: THUMB_SIZE,
                cursor: 'pointer',
                ...(currentIndex === index && {
                  opacity: 1,
                  border: `solid 2.5px ${theme.palette.primary.main}`,
                }),
                opacity: currentIndex === index ? 1 : 0.48,
              }}
            />
          </Box>
        ))}
      </Carousel>
    </StyledThumbnailsContainer>
  );


  return (
    <>
      <Box
        sx={{
          '& .slick-slide': {
            float: theme.direction === 'rtl' ? 'right' : 'left',
          },
        }}
      >
        {renderLargeImg}

        {renderThumbnails}
      </Box>

      <Lightbox
        index={lightbox.selected}
        slides={slides}
        open={lightbox.open}
        close={lightbox.onClose}
        onGetCurrentIndex={(index: number) => lightbox.setSelected(index)}
      />
    </>
  );
}

export {
  ProductDetailsCarousel
}
