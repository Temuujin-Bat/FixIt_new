// @mui
import { alpha } from '@mui/material/styles';
import { Box, Typography, Stack } from '@mui/material';
//
import { FC } from 'react';
import { StackProps } from '@mui/material/Stack';
import { COLORS_LABEL_MAP } from '../../data/tamirData/data';

export interface IColorPreviewProps extends StackProps {
  colors: string[];
  limit?: number;
}

const ColorPreview: FC<IColorPreviewProps> = ({ colors, limit = 3, sx }) => {
  const showColor = colors.slice(0, limit);

  const moreColor = colors.length - limit;

  return (
    <Stack component="span" direction="row" alignItems="center" justifyContent="flex-end" sx={sx}>
      {showColor.map((color, index) => (
        <Box
          key={color + index.toString()}
          sx={{
            ml: -0.75,
            width: 16,
            height: 16,
            borderRadius: '50%',
            border: (theme) => `solid 2px ${theme.palette.background.paper}`,
            boxShadow: (theme) => `inset -1px 1px 2px ${alpha(theme.palette.common.black, 0.24)}`,
            bgcolor: COLORS_LABEL_MAP[color],
          }}
        />
      ))}

      {colors.length > limit && <Typography variant="subtitle2">{`+${moreColor}`}</Typography>}
    </Stack>
  );
};

export {
  ColorPreview,
};
