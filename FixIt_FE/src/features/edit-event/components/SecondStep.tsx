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
import { CreatorInfo, Gallery, PaymentDetails, Title } from "..";
import { DBEventModel } from "../type";
import { Divider } from "../../../components";

export default function SecondStep({
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
          2/2
        </Typography>
      </Box>

      {/* PaymentDetails */}
      <Box padding={isScreenXS ? 0 : 4}>
        <Title titleNumber={4} title="דרכי הרשמה ותשלום" />
        <PaymentDetails formData={formData} setFormData={setFormData} />
      </Box>

      <Box my={{ xs: 3, sm: -3 }} padding={isScreenXS ? 0 : 4}>
        <Divider />
      </Box>

      {/* Gallery */}
      <Box padding={isScreenXS ? 0 : 4}>
        <Title titleNumber={5} title="תמונות לאירוע" />
        <Gallery formData={formData} setFormData={setFormData} />
      </Box>

      <Box my={{ xs: 3, sm: -3 }} padding={isScreenXS ? 0 : 4}>
        <Divider />
      </Box>

      {/* CreatorInfo */}
      <Box padding={isScreenXS ? 0 : 4} mb={2}>
        <Title titleNumber={6} title="דרכי תקשורת" />
        <CreatorInfo formData={formData} setFormData={setFormData} />
      </Box>
    </Container>
  );
}
