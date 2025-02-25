import React from "react";

// MUI
import {
  Box,
  Container,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// Components
import { Title, BasicInformation, ArenaDetails, PrizeSection } from "..";
import { Divider } from "../../../components";
import { DBEventModel } from "../type";

export default function FirstStep({
  formData,
  setFormData,
}: {
  formData: DBEventModel;
  setFormData: React.Dispatch<React.SetStateAction<DBEventModel>>;
}) {
  const theme = useTheme();
  const isScreenXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      component={isScreenXS ? Box : Paper}
      elevation={isScreenXS ? 0 : 10}
      maxWidth="md"
      sx={{
        mt: { xs: 7, sm: 12 },
        backgroundColor: "white",
        borderRadius: isScreenXS ? 0 : "20px",
        position: "relative",
      }}
    >
      {/* Step Indicator */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          position: "absolute",
          top: 30,
          right: 30,
          backgroundColor: theme.palette.primary.main,
          color: "white",
          borderRadius: "20px",
          padding: "4px 12px",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="body2" fontWeight="bold">
          1/2
        </Typography>
      </Box>

      {/* BasicInformation */}
      <Box padding={isScreenXS ? 0 : 4}>
        <Title titleNumber={1} title="פרטי אירוע" />
        <BasicInformation formData={formData} setFormData={setFormData} />
      </Box>

      <Box my={{ xs: 5, sm: -3 }} padding={isScreenXS ? 0 : 4}>
        <Divider />
      </Box>

      {/* PrizeSection */}
      <Box padding={isScreenXS ? 0 : 4}>
        <Title titleNumber={2} title="פרס לקבוצה המנצחת" />
        <PrizeSection formData={formData} setFormData={setFormData} />
      </Box>

      <Box my={{ xs: 5, sm: -3 }} padding={isScreenXS ? 0 : 4}>
        <Divider />
      </Box>

      {/* ArenaDetails */}
      <Box padding={isScreenXS ? 0 : 4}>
        <Title titleNumber={3} title="מיקום וזירה" />
        <ArenaDetails formData={formData} setFormData={setFormData} />
      </Box>
    </Container>
  );
}
