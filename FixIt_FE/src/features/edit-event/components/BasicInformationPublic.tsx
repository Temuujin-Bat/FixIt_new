// MUI
import { Box, Switch, Typography } from "@mui/material";

// Components
import { DBEventModel } from "../type";

export default function BasicInformationPublic({
  formData,
  setFormData,
}: {
  formData: DBEventModel;
  setFormData: React.Dispatch<React.SetStateAction<DBEventModel>>;
}) {
  const { isPublic } = formData;

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: "10px", mt: "20px" }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid",
          mt: "10px",
          borderColor: isPublic ? "primary.main" : "error.main",
          borderRadius: "8px",
          padding: "8px 16px",
          backgroundColor: isPublic ? "rgba(26, 188, 156, 0.1)" : "transparent",
          "&:hover": {
            borderColor: "primary.main",
            cursor: "pointer",
          },
        }}
        onClick={() => {
          setFormData((prev) => ({
            ...prev,
            isPublic: !prev.isPublic,
          }));
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: { xs: 0, md: 10 },
          }}
        >
          <Typography
            variant="subtitle1"
            color={isPublic ? "primary.main" : "error.main"}
          >
            {isPublic ? "האירוע ציבורי" : "האירוע פרטי"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {isPublic
              ? "האירוע מופיע בלוח האירועים לכל המשתמשים"
              : "האירוע לא מוצג בלוח האירועים ורק בעלי קישור לעמוד האירוע יוכלו לצפות בו"}
          </Typography>
        </Box>

        <Switch checked={isPublic} color="primary" />
      </Box>
    </Box>
  );
}
