import Switch from '@mui/material/Switch';
import { StackProps } from '@mui/material/Stack';
import FormControlLabel, { formControlLabelClasses } from '@mui/material/FormControlLabel';
import { FC } from 'react';

interface IFilterStock extends StackProps {
  filterSale: boolean;
  onChangeSale: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterSale: FC<IFilterStock> = ({ filterSale, onChangeSale }) => (
  <FormControlLabel
    control={<Switch color="success" checked={filterSale} onChange={onChangeSale} />}
    labelPlacement="start"
    label="מוצרים במבצע"
    sx={{
      m: 0,
      [`& .${formControlLabelClasses.label}`]: {
        typography: 'h6',
      },
    }}
  />
);

export {
  FilterSale,
};
