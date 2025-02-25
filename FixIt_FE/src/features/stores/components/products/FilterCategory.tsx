import Stack, { StackProps } from '@mui/material/Stack';

import { FC } from 'react';
import { CATEGORY_LABEL_MAP } from '../../../../data/tamirData/data';

interface IFilterCategory extends StackProps {
  options: string[];
  filterCategories: string;
  onChangeCategories: (name: string) => void;
}

const FilterCategory: FC<IFilterCategory> = ({
  options,
  filterCategories,
  onChangeCategories,
  ...other
}) => (
  <Stack spacing={1} alignItems="flex-start" {...other}>
    {options.map((option) => (
      <Stack
        key={option}
        direction="row"
        alignItems="center"
        onClick={() => onChangeCategories(option)}
        sx={{
          typography: 'body2',
          cursor: 'pointer',
          ...(filterCategories === option && {
            fontWeight: 'fontWeightBold',
            color: 'rgba(26, 188, 156, 1)',
          }),
        }}
      >
        {CATEGORY_LABEL_MAP[option]}
      </Stack>
    ))}
  </Stack>
);

export {
  FilterCategory,
};
