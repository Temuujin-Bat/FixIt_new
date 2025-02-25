import TextField from '@mui/material/TextField';
import Stack, { StackProps } from '@mui/material/Stack';
import { FC } from "react";

// ----------------------------------------------------------------------

interface IFilterPrice extends StackProps {
  filterPrice: {
    start: number;
    end: number;
  };
  onChangeStartPrice: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEndPrice: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// ----------------------------------------------------------------------

const FilterPrice: FC<IFilterPrice> = ({
                                      filterPrice,
                                      onChangeStartPrice,
                                      onChangeEndPrice,
                                      ...other
                                    }) => {
  return (
    <Stack spacing={2} direction="row" alignItems="center" divider={<div> - </div>} {...other}>
      <TextField
        size="small"
        label="מינימום ₪"
        type="number"
        value={filterPrice.start === 0 ? '' : filterPrice.start}
        onChange={onChangeStartPrice}
      />
      <TextField
        size="small"
        label="מקסימום ₪"
        type="number"
        value={filterPrice.end === 0 ? '' : filterPrice.end}
        onChange={onChangeEndPrice}
      />
    </Stack>
  );
}

export {
  FilterPrice
}
