import React from "react";

// Third party
import { useNavigate } from "react-router-dom";
import moment from "moment-timezone";

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

export default function AddEventActions({
  isPending,
  formData,
  activeStep,
  setActiveStep,
}: {
  isPending: boolean;
  formData: DBEventModel;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const theme = useTheme();
  const isScreenXS = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const isFirstStepValid = () => {
    const {
      arenaName,
      event_title,
      event_description,
      event_subtitle,
      address_addressString,
      address_guidance,
      event_start,
      event_end,
      event_isPrizedEvent,
      event_prize_title,
      event_prize_subtitle,
    } = formData;

    const isPrizeSectionComplete = Boolean(
      !event_isPrizedEvent || (event_prize_title && event_prize_subtitle)
    );

    return (
      event_title &&
      event_description &&
      address_addressString &&
      address_guidance &&
      event_start &&
      event_end &&
      isPrizeSectionComplete &&
      event_subtitle &&
      arenaName
    );
  };

  const isSubmitFormValid = () => {
    const {
      arenaName,
      event_title,
      event_description,
      event_subtitle,
      address_addressString,
      address_guidance,
      event_start,
      event_end,
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
    } = formData;

    const isPrizeSectionComplete = Boolean(
      !event_isPrizedEvent || (event_prize_title && event_prize_subtitle)
    );

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

    const isCreatorInfoComplete = Boolean(
      contact_name && (contact_email || contact_phoneNumber)
    );

    return (
      isBasicInfoComplete &&
      isArenaInfoComplete &&
      isEventFeaturesComplete &&
      isPaymentComplete &&
      isPrizeSectionComplete &&
      isCreatorInfoComplete
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
            title={
              !isSubmitFormValid()
                ? "נא למלא את כל השדות המסומנים בכוכבית אדומה"
                : ""
            }
            arrow
            placement="top"
          >
            <Box
              sx={{ display: "inline-block", width: { xs: "30%", sm: "20%" } }}
            >
              <LoadingButton
                loading={isPending}
                disabled={!isSubmitFormValid() || isPending}
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
                  פרסם אירוע
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
          <Tooltip
            title={
              !isSubmitFormValid()
                ? "נא למלא את כל השדות המסומנים בכוכבית אדומה"
                : ""
            }
            arrow
            placement="top"
          >
            <Box
              sx={{ display: "inline-block", width: { xs: "30%", sm: "20%" } }}
            >
              <LoadingButton
                onClick={() => setActiveStep((prev) => prev + 1)}
                disabled={!isFirstStepValid()}
                sx={{
                  width: "100%",
                  height: "3em",
                  backgroundColor: isFirstStepValid()
                    ? "primary.main"
                    : "rgba(0, 0, 0, 0.1)",
                  borderRadius: "100px",
                  "&:hover": {
                    backgroundColor: isFirstStepValid()
                      ? "primary.dark"
                      : "rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Typography
                  variant="subtitle1"
                  color={isFirstStepValid() ? "common.white" : "grey.500"}
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
