// MUI
import { Typography, Stack, Link } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";

export default function DeleteAccountButton({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Link
      component={"button"}
      underline="none"
      sx={{
        display: "flex",
        alignItems: "center",
        mb: "20px",
        "&:hover": {
          cursor: "pointer",
          "& .key-icon": {
            color: "common.white",
            backgroundColor: "error.main",
          },
          "& .typography-background": {
            color: "error.main",
          },
        },
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <DeleteForever
        className="key-icon"
        fontSize="large"
        sx={{
          color: "error.main",
          backgroundColor: "error.lighter",
          borderRadius: "20px",
          padding: "5px",
          mr: 1,
        }}
      />

      <Stack>
        <Typography className="typography-background" variant="subtitle2">
          מחיקת חשבון
        </Typography>
        <Typography
          textAlign={"left"}
          className="typography-background"
          variant="body2"
        >
          לצמיתות
        </Typography>
      </Stack>
    </Link>
  );
}
