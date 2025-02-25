import { FormEvent, useEffect, useState } from "react";

// MUI
import {
  Box,
  Stack,
  Typography,
  InputBase,
  Modal,
  Container,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

// Hooks
import { useUpdateProfileAPI } from "../../../hooks/API/profile";

// Components
import { IUSER } from "../../../types";
import { CustomTextFieldLabel } from "../../../components/form";

export default function EditNameModal({
  userInfo,
  isOpen,
  setIsOpen,
}: {
  userInfo: IUSER;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [initialFullName, setInitialFullName] = useState("");
  const [initialDisplayName, setInitialDisplayName] = useState("");

  const { mutate: updateName, isPending } = useUpdateProfileAPI({
    setIsOpen,
  });

  useEffect(() => {
    if (userInfo) {
      setFullName(userInfo.name || "");
      setDisplayName(userInfo.displayName || "");
      setInitialFullName(userInfo.name || "");
      setInitialDisplayName(userInfo.displayName || "");
    }
  }, [userInfo]);

  useEffect(() => {
    if (!isOpen) {
      setFullName(userInfo.name || "");
      setDisplayName(userInfo.displayName || "");
    }
  }, [isOpen, userInfo]);

  const isButtonDisabled =
    fullName === initialFullName && displayName === initialDisplayName;

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateName({ name: fullName, displayName });
  };

  return (
    <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)}>
      <Container
        sx={{ outline: "none" }}
        maxWidth={"sm"}
        component={"form"}
        onSubmit={submitHandler}
      >
        <Box
          sx={{
            p: "20px",
            mt: "200px",
            backgroundColor: "white",
            borderRadius: "20px",
          }}
        >
          <Typography variant="h5" color={"primary.main"}>
            שינוי שם
          </Typography>

          <Box sx={{ mt: "20px" }}>
            <CustomTextFieldLabel title="שם מלא" />

            <InputBase
              required
              fullWidth
              sx={{
                border: "1px solid rgba(0,0,0,.6)",
                borderRadius: "3px",
                fontSize: "0.8em",
                padding: "3px 12px",
              }}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Box>

          <Box sx={{ mt: "15px" }}>
            <CustomTextFieldLabel title="שם תצוגה" />

            <InputBase
              required
              fullWidth
              sx={{
                border: "1px solid rgba(0,0,0,.6)",
                borderRadius: "3px",
                fontSize: "0.8em",
                padding: "3px 12px",
              }}
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </Box>

          <Stack sx={{ mt: "2em" }} direction="row" justifyContent="flex-end">
            <LoadingButton
              sx={{
                height: "2em",
                backgroundColor: isButtonDisabled
                  ? "rgba(128, 128, 128, 0.4)"
                  : "rgba(26, 188, 156, .9)",
                border: isButtonDisabled
                  ? "1px solid rgba(128, 128, 128, 0)"
                  : "1px solid rgba(26, 188, 156, .9)",
                borderRadius: "3px",
                fontWeight: "bold",
                color: "white",
                "&:hover": {
                  cursor: isButtonDisabled ? "regular" : "pointer",
                  backgroundColor: isButtonDisabled
                    ? "rgba(128, 128, 128, 0.4)"
                    : "rgba(26, 188, 156, 1)",
                  border: isButtonDisabled
                    ? "1px solid rgba(128, 128, 128, 0)"
                    : "1px solid rgba(26, 188, 156, 1)",
                },
              }}
              type="submit"
              disabled={isButtonDisabled}
              loading={isPending}
            >
              שמור
            </LoadingButton>

            <LoadingButton
              sx={{
                height: "2em",
                ml: "10px",
                padding: "5px 15px",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "3px",
                fontWeight: "bold",
                color: "black",
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgba(0,0,0,.1)",
                },
              }}
              onClick={() => setIsOpen(!isOpen)}
              type="button"
            >
              חזור
            </LoadingButton>
          </Stack>
        </Box>
      </Container>
    </Modal>
  );
}
