import { FormEvent, useEffect, useState } from "react";

// MUI
import {
  Box,
  Typography,
  Stack,
  Container,
  InputBase,
  Modal,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

// Hooks
import { useUpdateProfileAPI } from "../../../hooks/API/profile";

// Components
import { IUSER } from "../../../types";

export default function PlayerInfoModal({
  userInfo,
  isOpen,
  setIsOpen,
}: {
  userInfo: IUSER;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [clubName, setClubName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [initialClubName, setInitialClubName] = useState("");
  const [initialTeamName, setInitialTeamName] = useState("");

  useEffect(() => {
    if (userInfo) {
      setClubName(userInfo.club || "");
      setTeamName(userInfo.team || "");
      setInitialClubName(userInfo.club || "");
      setInitialTeamName(userInfo.team || "");
    }
  }, [userInfo]);

  useEffect(() => {
    if (!isOpen) {
      setClubName(userInfo.club || "");
      setTeamName(userInfo.team || "");
    }
  }, [isOpen, userInfo]);

  const { mutate: editProfile, isPending } = useUpdateProfileAPI({
    setIsOpen,
  });

  const isButtonDisabled =
    clubName === initialClubName && teamName === initialTeamName;

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    editProfile({ club: clubName, team: teamName });
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
            ערוך פרופיל שחקן
          </Typography>

          <Stack sx={{ mt: "20px" }}>
            <Typography variant="subtitle2" ml={"10px"}>
              שם מועדון
            </Typography>

            <InputBase
              placeholder="מידע לא הוזן"
              fullWidth
              sx={{
                border: "1px solid rgba(0,0,0,.6)",
                borderRadius: "3px",
                fontSize: "0.8em",
                padding: "3px 12px",
              }}
              value={clubName}
              onChange={(e) => setClubName(e.target.value)}
            />
          </Stack>

          <Stack sx={{ mt: "15px" }}>
            <Typography variant="subtitle2" ml={"10px"}>
              שם קבוצה
            </Typography>

            <InputBase
              placeholder="מידע לא הוזן"
              fullWidth
              sx={{
                border: "1px solid rgba(0,0,0,.6)",
                borderRadius: "3px",
                fontSize: "0.8em",
                padding: "3px 12px",
              }}
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
          </Stack>

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
            >
              חזור
            </LoadingButton>
          </Stack>
        </Box>
      </Container>
    </Modal>
  );
}
