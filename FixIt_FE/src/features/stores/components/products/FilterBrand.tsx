import Checkbox from '@mui/material/Checkbox';
import Stack, { StackProps } from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import {FC} from "react";

// ----------------------------------------------------------------------

interface IFilterBrand extends StackProps {
  options: string[];
  filterBrand: string[];
  onChangeBrand: (name: string) => void;
}

const FilterBrand: FC<IFilterBrand> = ({ options, filterBrand, onChangeBrand, ...other }) => {
  return (
    <Stack {...other}>
      {options.map((option) => (
        <FormControlLabel
          key={option}
          control={
            <Checkbox
              size="small"
              value={option}
              checked={filterBrand.includes(option)}
              onChange={() => onChangeBrand(option)}
            />
          }
          label={option}
        />
      ))}
    </Stack>
  );
}

export {
  FilterBrand
}
