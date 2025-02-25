import Switch from '@mui/material/Switch';
import { StackProps } from '@mui/material/Stack';
import FormControlLabel, { formControlLabelClasses } from '@mui/material/FormControlLabel';
import { FC } from 'react';

interface IFilterStock extends StackProps {
  filterStock: boolean;
  onChangeStock: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterStock: FC<IFilterStock> = ({ filterStock, onChangeStock }) => (
  <FormControlLabel
    control={<Switch color="success" checked={filterStock} onChange={onChangeStock} />}
    labelPlacement="start"
    label="מוצרים במלאי"
    sx={{
      m: 0,
      [`& .${formControlLabelClasses.label}`]: {
        typography: 'h6',
      },
    }}
  />
);

export {
  FilterStock,
};
