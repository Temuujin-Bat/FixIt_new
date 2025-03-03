// MUI
import { Stack } from '@mui/material';

// Third party
// Components
import { RHFTextField } from '../../../components/hookForm';

const FifthStep = () => {
  return (
    <Stack spacing={3}>
      <RHFTextField name="name" label="Бүтэн нэр" />

      <RHFTextField
        label="Утасны дугаар (солих боломжгүй)"
        name="phone"
        InputProps={{ readOnly: true }}
      />

      <RHFTextField
        multiline
        rows={3}
        label="Хүсэлт (шаардлагагүй)"
        name="note"
      />
    </Stack>
  );
};

export { FifthStep };