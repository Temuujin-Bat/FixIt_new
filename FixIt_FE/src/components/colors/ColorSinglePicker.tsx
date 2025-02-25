import { forwardRef } from 'react';
// @mui
import {
  Radio, RadioGroup, RadioGroupProps, Box, Typography,
} from '@mui/material';
import { BaseIcon } from '../base';
import { COLORS_LABEL_MAP } from '../../data/tamirData/data';

export interface IColorSinglePickerProps extends RadioGroupProps {
  colors: string[];
}

const ColorSinglePicker = forwardRef<HTMLDivElement, IColorSinglePickerProps>(
  ({ colors, ...other }, ref) => (
    <RadioGroup row ref={ref} {...other} sx={{ justifyContent: 'center' }}>
      {colors.map((color) => {
        const colorValue = COLORS_LABEL_MAP[color];
        const isDualColor = Array.isArray(colorValue);

        return (
          <Box
            key={color}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mx: 1.5, // Add spacing between options
            }}
          >
            <Radio
              value={color}
              color="default"
              icon={(
                <BaseIcon
                  whiteColor={!isDualColor && (colorValue === '#FFFFFF' || colorValue === 'white')}
                  colors={(isDualColor ? colorValue : undefined) as [string, string] | undefined}
                />
              )}
              checkedIcon={(
                <BaseIcon
                  checked
                  whiteColor={!isDualColor && (colorValue === '#FFFFFF' || colorValue === 'white')}
                  colors={(isDualColor ? colorValue : undefined) as [string, string] | undefined}
                />
              )}
              sx={{
                color: isDualColor ? 'transparent' : colorValue,
                '&:hover': { opacity: 0.72 },
                '& svg': { width: 12, height: 12 },
              }}
            />
            <Typography
              variant="body2"
              sx={{ mt: 0.5, textAlign: 'center', fontSize: 12 }}
            >
              {color}
            </Typography>
          </Box>
        );
      })}
    </RadioGroup>
  ),
);

export { ColorSinglePicker };
