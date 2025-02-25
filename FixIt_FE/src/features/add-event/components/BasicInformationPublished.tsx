// MUI
import { Box, Switch, Typography } from "@mui/material";

// Components
import { DBEventModel } from "../type";

export default function BasicInformationPublished({
  formData,
  setFormData,
}: {
  formData: DBEventModel;
  setFormData: React.Dispatch<React.SetStateAction<DBEventModel>>;
}) {
  const { isPublished } = formData;

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid",
          mt: "10px",
          borderColor: isPublished ? "primary.main" : "error.main",
          borderRadius: "8px",
          padding: "8px 16px",
          backgroundColor: isPublished
            ? "rgba(26, 188, 156, 0.1)"
            : "transparent",
          "&:hover": {
            borderColor: "primary.main",
            cursor: "pointer",
          },
        }}
        onClick={() => {
          setFormData((prev) => ({
            ...prev,
            isPublished: !prev.isPublished,
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
            color={isPublished ? "primary.main" : "error.main"}
          >
            {isPublished ? "האירוע מפורסם" : "האירוע אינו מפורסם"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {isPublished
              ? "האירוע יופיע בלוח האירועים"
              : 'האירוע במצב "טיוטה" ואינו מופיע בלוח האירועים'}
          </Typography>
        </Box>

        <Switch checked={isPublished} color="primary" />
      </Box>
    </Box>
  );
}
