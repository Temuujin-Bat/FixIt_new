// MUI
import { Typography } from '@mui/material';

const ProfileTitle = ({ text }: { text: string }) => {
  return (
    <Typography variant="h3">{text}</Typography>
  );
};

export { ProfileTitle };