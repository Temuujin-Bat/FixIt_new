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
import {
  AirsoftReplicasFormPhotos,
  AirsoftReplicasFormInfo,
  AirsoftReplicasTitle,
} from "../index";
import { Divider } from "../../../components";
import { TAirsoftReplicas } from "../type";

export default function AirsoftReplicasForm({
  formData,
  setFormData,
}: {
  formData: TAirsoftReplicas;
  setFormData: React.Dispatch<React.SetStateAction<TAirsoftReplicas>>;
}) {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const Wrapper: React.ElementType = isXsScreen ? Box : Paper;

  return (
    <Container
      maxWidth="md"
      sx={{ mt: { xs: 10, sm: 12 }, backgroundColor: "white" }}
    >
      {/* Form */}
      <Wrapper
        elevation={10}
        sx={{
          borderRadius: isXsScreen ? "0px" : "20px",
          padding: isXsScreen ? 0 : 4,
        }}
      >
        <AirsoftReplicasTitle title="פרטים על המוצר" />
        <AirsoftReplicasFormInfo
          formData={formData}
          setFormData={setFormData}
        />
      </Wrapper>

      {isXsScreen && (
        <Box sx={{ mb: 2 }}>
          <Divider />
        </Box>
      )}

      {/* Photos */}
      <Wrapper
        elevation={10}
        sx={{
          borderRadius: isXsScreen ? "0px" : "20px",
          padding: isXsScreen ? 0 : 4,
          mt: isXsScreen ? "0px" : "16px",
        }}
      >
        <AirsoftReplicasTitle title="תמונות של המוצר" />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: -2, mb: 2 }}
        >
          כאן ניתן להוסיף תמונות של המוצר שיופיעו במודעה. הקפידו על תמונות
          ברורות ואיכותיות שייצגו את הפריט שברצונכם למכור.
        </Typography>
        <AirsoftReplicasFormPhotos />
      </Wrapper>
    </Container>
  );
}
