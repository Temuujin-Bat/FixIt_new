import { FormEvent, useEffect, useState } from "react";

// MUI
import {
  Box,
  Typography,
  Stack,
  Modal,
  Container,
  InputBase,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

// Hooks
import { useUpdateProfileAPI } from "../../../hooks/API/profile";

// Components
import { IUSER } from "../../../types";
import { CustomTextFieldLabel } from "../../../components/form";

export default function UserInfoModal({
  userInfo,
  isOpen,
  setIsOpen,
}: {
  userInfo: IUSER;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [email, setEmail] = useState(userInfo?.email || "");
  const [phone, setPhone] = useState(userInfo?.phone || "");
  const [address, setAddress] = useState(userInfo?.address || "");
  const [initialEmail, setInitialEmail] = useState("");
  const [initialPhone, setInitialPhone] = useState("");
  const [initialAddress, setInitialAddress] = useState("");

  const { mutate: editAccount, isPending } = useUpdateProfileAPI({
    setIsOpen,
  });

  useEffect(() => {
    if (userInfo) {
      setAddress(userInfo.address || "");
      setEmail(userInfo.email || "");
      setPhone(userInfo.phone || "");
      setInitialAddress(userInfo.address || "");
      setInitialEmail(userInfo.email || "");
      setInitialPhone(userInfo.phone || "");
    }
  }, [userInfo]);

  useEffect(() => {
    if (!isOpen) {
      setAddress(userInfo?.address || "");
      setEmail(userInfo?.email || "");
      setPhone(userInfo?.phone || "");
    }
  }, [isOpen, userInfo]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    editAccount({ address, email, phone });
  };

  const isButtonDisabled =
    email === initialEmail &&
    phone === initialPhone &&
    address === initialAddress;

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
            ערוך פרטים אישיים
          </Typography>

          <Box sx={{ mt: "2em" }}>
            <Typography variant="subtitle2" ml={"10px"}>
              כתובת מגורים
            </Typography>

            <InputBase
              fullWidth
              placeholder="מידע לא הוזן"
              sx={{
                border: "1px solid rgba(0,0,0,.6)",
                borderRadius: "3px",
                fontSize: "0.8em",
                padding: "3px 12px",
              }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Box>

          <Box sx={{ mt: "15px" }}>
            <CustomTextFieldLabel title="מייל" />

            <InputBase
              type="email"
              required
              fullWidth
              sx={{
                border: "1px solid rgba(0,0,0,.6)",
                borderRadius: "3px",
                fontSize: "0.8em",
                padding: "3px 12px",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          <Box sx={{ mt: "15px" }}>
            <Typography variant="subtitle2" ml={"10px"}>
              מספר טלפון
            </Typography>

            <InputBase
              fullWidth
              sx={{
                border: "1px solid rgba(0,0,0,.6)",
                borderRadius: "3px",
                fontSize: "0.8em",
                padding: "3px 12px",
              }}
              placeholder="05X-XXXXXXX"
              value={phone}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setPhone(value);
                }
              }}
              inputProps={{
                maxLength: 10,
              }}
            />
          </Box>

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
