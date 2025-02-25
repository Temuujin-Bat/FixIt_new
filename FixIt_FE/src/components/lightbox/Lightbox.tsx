import ReactLightbox, { LightboxExternalProps } from 'yet-another-react-lightbox';
// eslint-disable-next-line import/no-unresolved
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
// eslint-disable-next-line import/no-unresolved
import Video from 'yet-another-react-lightbox/plugins/video';
// eslint-disable-next-line import/no-unresolved
import Captions from 'yet-another-react-lightbox/plugins/captions';
// eslint-disable-next-line import/no-unresolved
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
// eslint-disable-next-line import/no-unresolved
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
// eslint-disable-next-line import/no-unresolved
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
//
import { FC, useState } from 'react';
import { StyledLightbox } from './StyledLightbox';
import { DisplayTotal } from './DisplayTotal';
import { Iconify } from '../Iconify';

const ICON_SIZE = 24;

export interface TLightBoxProps extends LightboxExternalProps {
  disabledZoom?: boolean;
  disabledVideo?: boolean;
  disabledTotal?: boolean;
  disabledCaptions?: boolean;
  disabledSlideshow?: boolean;
  disabledThumbnails?: boolean;
  disabledFullscreen?: boolean;
  onGetCurrentIndex?: (index: number) => void;
}

export function getPlugins({
  disabledZoom,
  disabledVideo,
  disabledCaptions,
  disabledSlideshow,
  disabledThumbnails,
  disabledFullscreen,
}: TLightBoxProps) {
  let plugins = [Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom];

  if (disabledThumbnails) {
    plugins = plugins.filter((plugin) => plugin !== Thumbnails);
  }
  if (disabledCaptions) {
    plugins = plugins.filter((plugin) => plugin !== Captions);
  }
  if (disabledFullscreen) {
    plugins = plugins.filter((plugin) => plugin !== Fullscreen);
  }
  if (disabledSlideshow) {
    plugins = plugins.filter((plugin) => plugin !== Slideshow);
  }
  if (disabledZoom) {
    plugins = plugins.filter((plugin) => plugin !== Zoom);
  }
  if (disabledVideo) {
    plugins = plugins.filter((plugin) => plugin !== Video);
  }

  return plugins;
}

const Lightbox: FC<TLightBoxProps> = ({
  slides,
  disabledZoom,
  disabledVideo,
  disabledTotal,
  disabledCaptions,
  disabledSlideshow,
  disabledThumbnails,
  disabledFullscreen,
  onGetCurrentIndex,
  ...other
}) => {
  const totalItems = slides ? slides.length : 0;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <StyledLightbox />

      <ReactLightbox
        slides={slides}
        animation={{ swipe: 240 }}
        carousel={{ finite: totalItems < 5 }}
        controller={{ closeOnBackdropClick: true }}
        plugins={getPlugins({
          disabledZoom,
          disabledVideo,
          disabledCaptions,
          disabledSlideshow,
          disabledThumbnails,
          disabledFullscreen,
        })}
        on={{
          view: ({ index}) => {
            if (onGetCurrentIndex) {
              setCurrentIndex(index as unknown as number);
              onGetCurrentIndex(index as unknown as number);
            }
          },
        }}
        toolbar={{
          buttons: [
            <DisplayTotal
              key={0}
              currentIndex={currentIndex}
              totalItems={totalItems}
              disabledTotal={disabledTotal}
              disabledCaptions={disabledCaptions}
            />,
            'close',
          ],
        }}
        render={{
          iconClose: () => <Iconify width={ICON_SIZE} icon="carbon:close" />,
          iconZoomIn: () => <Iconify width={ICON_SIZE} icon="carbon:zoom-in" />,
          iconZoomOut: () => <Iconify width={ICON_SIZE} icon="carbon:zoom-out" />,
          iconSlideshowPlay: () => <Iconify width={ICON_SIZE} icon="carbon:play" />,
          iconSlideshowPause: () => <Iconify width={ICON_SIZE} icon="carbon:pause" />,
          iconPrev: () => <Iconify width={ICON_SIZE + 8} icon="carbon:chevron-left" />,
          iconNext: () => <Iconify width={ICON_SIZE + 8} icon="carbon:chevron-right" />,
          iconExitFullscreen: () => <Iconify width={ICON_SIZE} icon="carbon:center-to-fit" />,
          iconEnterFullscreen: () => <Iconify width={ICON_SIZE} icon="carbon:fit-to-screen" />,
        }}
        {...other}
      />
    </>
  );
};

export {
  Lightbox,
};
