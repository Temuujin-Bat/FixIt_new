// MUI
import { LoadingButton } from "@mui/lab";
import { Box, Container, Tooltip, Typography } from "@mui/material";

// Third party
import { useNavigate } from "react-router-dom";

// Components
import { TAirsoftReplicas } from "../type";

export default function AirsoftReplicasActions({
  formData,
  activeStep,
  setActiveStep,
}: {
  formData: TAirsoftReplicas;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const navigate = useNavigate();

  const isFormValid = () => {
    const {
      productName,
      gunCategory,
      manufacturer,
      gunType,
      condition,
      description,
      price,
    } = formData;
    return (
      productName.trim() &&
      gunCategory.trim() &&
      manufacturer.trim() &&
      gunType.trim() &&
      condition.trim() &&
      description.trim() &&
      price > 0
    );
  };

  const isSubmitFormValid = () => {
    const { name, email, address, phone } = formData;
    return name.trim() && email.trim() && address.trim() && phone.trim();
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          my: 6,
        }}
      >
        {activeStep === 1 && (
          <LoadingButton
            onClick={() => setActiveStep((prev) => prev - 1)}
            sx={{
              width: { xs: "30%", sm: "20%" },
              height: "3em",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              border: "1px solid",
              borderRadius: "100px",
              borderColor: "grey.400",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderColor: "primary.main",
              },
            }}
          >
            <Typography variant="body1" fontWeight={600} color={"common.black"}>
              חזור
            </Typography>
          </LoadingButton>
        )}

        {activeStep === 1 && (
          <Tooltip
            title={!isSubmitFormValid() ? "נא למלא את כל השדות הדרושים" : ""}
            arrow
            placement="top"
          >
            <Box
              sx={{ display: "inline-block", width: { xs: "30%", sm: "20%" } }}
            >
              <LoadingButton
                disabled={!isSubmitFormValid()}
                type="submit"
                sx={{
                  width: "100%",
                  height: "3em",
                  backgroundColor: isSubmitFormValid()
                    ? "primary.main"
                    : "rgba(0, 0, 0, 0.1)",
                  borderRadius: "100px",
                  "&:hover": {
                    backgroundColor: isSubmitFormValid()
                      ? "primary.dark"
                      : "rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Typography variant="subtitle1" color={"common.white"}>
                  פרסם מודעה
                </Typography>
              </LoadingButton>
            </Box>
          </Tooltip>
        )}

        {activeStep === 0 && (
          <LoadingButton
            onClick={() => navigate(-1)}
            sx={{
              width: { xs: "30%", sm: "20%" },
              height: "3em",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              border: "1px solid",
              borderRadius: "100px",
              borderColor: "grey.400",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderColor: "primary.main",
              },
            }}
          >
            <Typography variant="body1" fontWeight={600} color={"common.black"}>
              חזור
            </Typography>
          </LoadingButton>
        )}

        {activeStep === 0 && (
          <Tooltip
            title={!isFormValid() ? "נא למלא את כל השדות הדרושים" : ""}
            arrow
            placement="top"
          >
            <Box
              sx={{ display: "inline-block", width: { xs: "30%", sm: "20%" } }}
            >
              <LoadingButton
                onClick={() => setActiveStep((prev) => prev + 1)}
                disabled={!isFormValid()}
                sx={{
                  width: "100%",
                  height: "3em",
                  backgroundColor: isFormValid()
                    ? "primary.main"
                    : "rgba(0, 0, 0, 0.1)",
                  borderRadius: "100px",
                  "&:hover": {
                    backgroundColor: isFormValid()
                      ? "primary.dark"
                      : "rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Typography
                  variant="subtitle1"
                  color={isFormValid() ? "common.white" : "grey.500"}
                >
                  המשך
                </Typography>
              </LoadingButton>
            </Box>
          </Tooltip>
        )}
      </Container>
    </Box>
  );
}
