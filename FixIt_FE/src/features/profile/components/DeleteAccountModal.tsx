import { FormEvent, useState } from "react";

// MUI
import {
  Typography,
  Stack,
  Container,
  Box,
  InputBase,
  Modal,
} from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

// Hooks
import { useDeleteAccountAPI } from "../../../hooks/API/profile";

// Components
import { IUSER } from "../../../types";

export default function DeleteAccountModal({
  userInfo,
  isOpen,
  setIsOpen,
}: {
  userInfo: IUSER;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { mutate: deleteAccount, isPending } = useDeleteAccountAPI({
    setIsOpen,
  });
  const email = userInfo.email;
  const [inputValue, setInputValue] = useState("");

  const isButtonDisabled = inputValue !== "deletemyairsoftaccount";

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email) {
      deleteAccount({ email });
    }
  };

  return (
    <Modal open={isOpen} onClose={(prev) => setIsOpen(!prev)}>
      <Container
        sx={{ outline: "none" }}
        maxWidth={"xs"}
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
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ErrorOutline sx={{ fontSize: "7em", color: "error.main" }} />
          </Stack>

          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              mt: "20px",
              mb: "25px",
            }}
          >
            האם אתה בטוח שברצונך למחוק את חשבונך?
          </Typography>

          <Typography variant="body2">
            פעולה זו אינה ניתנת לביטול. כל הנתונים שלך יימחקו.
          </Typography>
          <Typography variant="body2">
            הקלד 'deletemyairsoftaccount' לאישור.
          </Typography>

          <InputBase
            fullWidth
            sx={{
              border: "1px solid rgba(0,0,0,.6)",
              borderRadius: "3px",
              fontSize: "0.8em",
              padding: "3px 12px",
              mt: "10px",
            }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <Stack sx={{ mt: "25px" }} direction="row" justifyContent="flex-end">
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
              <Typography variant="subtitle2">מחק</Typography>
            </LoadingButton>

            <LoadingButton
              sx={{
                height: "2em",
                mr: "10px",
                padding: "5px 15px",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "3px",
                color: "black",
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgba(0,0,0,.1)",
                },
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Typography variant="subtitle2">חזור</Typography>
            </LoadingButton>
          </Stack>
        </Box>
      </Container>
    </Modal>
  );
}
