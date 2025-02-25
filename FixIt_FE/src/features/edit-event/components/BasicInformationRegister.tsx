// MUI
import { Box, Switch, Typography } from "@mui/material";

// Components
import { DBEventModel } from "../type";

export default function BasicInformationRegister({
  formData,
  setFormData,
}: {
  formData: DBEventModel;
  setFormData: React.Dispatch<React.SetStateAction<DBEventModel>>;
}) {
  const { event_registrationRequired } = formData;

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
          borderColor: event_registrationRequired
            ? "primary.main"
            : "error.main",
          borderRadius: "8px",
          padding: "8px 16px",
          backgroundColor: event_registrationRequired
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
            event_registrationRequired: !prev.event_registrationRequired,
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
            color={event_registrationRequired ? "primary.main" : "error.main"}
          >
              {event_registrationRequired
                  ? "צריך להירשם מראש"
                  : "לא צריך להירשם מראש"}
          </Typography>
            <Typography variant="body2" color="text.secondary">
                {event_registrationRequired
                    ? 'שחקנים צריכים להירשם לאירוע מראש בדף האירוע באמצעות טופס ההרשמה. תוכל לראות את השחקנים שנרשמו תחת "האירועים שלי"'
                    : "שחקנים לא צריכים להירשם כדי להשתתף באירוע"
                }
            </Typography>
        </Box>

        <Switch checked={event_registrationRequired} color="primary" />
      </Box>
    </Box>
  );
}
