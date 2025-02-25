import React from "react";

// Third party
import { useNavigate } from "react-router-dom";

// MUI
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Container,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// Components
import { DBEventModel } from "../type";
import moment from "moment-timezone";

export default function EditEventActions({
  isPending,
  formData,
  initialFormData,
  activeStep,
  setActiveStep,
}: {
  isPending: boolean;
  formData: DBEventModel;
  initialFormData: DBEventModel;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const theme = useTheme();
  const isScreenXS = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const isFormChanged = () => {
    return JSON.stringify(initialFormData) == JSON.stringify(formData);
  };

  const isSubmitFormValid = () => {
    const {
      event_title,
      event_description,
      address_addressString,
      address_guidance,
      event_start,
      event_end,
      event_subtitle,
      isPaid,
      payment_amount,
      payment_description,
      event_isPrizedEvent,
      event_prize_title,
      event_prize_subtitle,
      contact_name,
      contact_email,
      contact_phoneNumber,
      isArena,
      arena,
      arenaName,
    } = formData;

    const isEventStartValid =
      moment(event_start, moment.ISO_8601, true).isValid() &&
      moment(event_start).tz("Asia/Jerusalem").isValid();

    const isBasicInfoComplete = Boolean(
      event_title &&
        event_description &&
        address_addressString &&
        address_guidance &&
        isEventStartValid &&
        event_end &&
        arenaName
    );

    const isEventFeaturesComplete = Boolean(event_subtitle);

    const isArenaInfoComplete = Boolean(!isArena || (arena && arena.name));

    const isPaymentComplete = Boolean(
      !isPaid || (payment_amount && payment_description)
    );

    const isPrizeSectionComplete = Boolean(
      !event_isPrizedEvent || (event_prize_title && event_prize_subtitle)
    );

    const isCreatorInfoComplete = Boolean(
      contact_name && (contact_email || contact_phoneNumber)
    );

    return (
      isBasicInfoComplete &&
      isArenaInfoComplete &&
      isEventFeaturesComplete &&
      isPaymentComplete &&
      isPrizeSectionComplete &&
      isCreatorInfoComplete &&
      !isFormChanged()
    );
  };

  return (
    <Box width={"100%"}>
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
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, color: "black" }}
            >
              {isScreenXS ? "חזרה" : "חזרה לעמוד קודם"}
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
                loading={isPending}
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
                <Typography variant="subtitle1" color="white">
                  עדכן אירוע
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
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, color: "black" }}
            >
              {isScreenXS ? "חזרה" : "חזרה לעמוד קודם"}
            </Typography>
          </LoadingButton>
        )}

        {activeStep === 0 && (
          <Box
            sx={{ display: "inline-block", width: { xs: "30%", sm: "20%" } }}
          >
            <LoadingButton
              onClick={() => setActiveStep((prev) => prev + 1)}
              sx={{
                width: "100%",
                height: "3em",
                backgroundColor: "primary.main",
                borderRadius: "100px",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              <Typography variant="subtitle1" color={"common.white"}>
                המשך
              </Typography>
            </LoadingButton>
          </Box>
        )}
      </Container>
    </Box>
  );
}
