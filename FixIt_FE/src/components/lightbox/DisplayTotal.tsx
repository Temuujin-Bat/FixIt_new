import { Typography } from '@mui/material';
import { FC } from 'react';

type TDisplayTotalProps = {
  totalItems: number;
  disabledTotal?: boolean;
  disabledCaptions?: boolean;
  currentIndex: number
};

const DisplayTotal: FC<TDisplayTotalProps> = ({
  totalItems, disabledTotal, disabledCaptions, currentIndex,
}) => {
  if (disabledTotal) {
    return null;
  }

  return (
    <Typography
      className="yarl__button"
      sx={{
        pl: 3,
        left: 0,
        position: 'fixed',
        typography: 'body2',
        ...(!disabledCaptions && {
          px: 'unset',
          minWidth: 64,
          position: 'unset',
          textAlign: 'center',
        }),
      }}
    >
      <strong>
        {' '}
        {currentIndex + 1}
        {' '}
      </strong>
      {' '}
      /
      {totalItems}
    </Typography>
  );
};

export {
  DisplayTotal,
};
