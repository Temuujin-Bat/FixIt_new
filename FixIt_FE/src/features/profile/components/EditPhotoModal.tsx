import { FormEvent, useEffect, useState } from "react";

// MUI
import {
  Avatar,
  Stack,
  Typography,
  Link,
  Modal,
  Container,
  Box,
} from "@mui/material";
import { Backup } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";

// Hooks
import { useSetAvatarAPI } from "../../../hooks/API/profile";

// Components
import { IUSER } from "../../../types";
import { convertToBase64 } from "../../../utils/helpers/ConvertToBase64";
import { PROFILE_PHOTOS_URL } from "../../../data/constants";

export default function EditPhotoModal({
  isOpen,
  setIsOpen,
  userInfo,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  userInfo: IUSER;
}) {
  const [b64I, setB64I] = useState<string>("");
  const [initialB64I, setInitialB64I] = useState<string>("");

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (files.length > 0) {
      const base64Photo = await convertToBase64(files[0]);
      setB64I(base64Photo);
    }
  };

  const { mutate: editAvatar, isPending } = useSetAvatarAPI({
    setIsOpen,
  });

  useEffect(() => {
    if (userInfo) {
      setB64I(userInfo.avatarFile || "");
      setInitialB64I(userInfo.avatarFile || "");
    }
  }, [userInfo]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userInfo?.email) {
      editAvatar({ email: userInfo?.email, b64I });
    }
  };

  const isButtonDisabled = b64I === initialB64I;

  return (
    <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)}>
      <Container
        sx={{ outline: "none", overflowY: "auto", maxHeight: "90vh" }}
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
            החלפת תמונה
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: "30px",
              mb: "30px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "primary.light",
                width: "280px",
                height: "280px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
              }}
            >
              {userInfo?.avatarFile ? (
                <Avatar
                  src={`${PROFILE_PHOTOS_URL}${userInfo?.avatarFile}`}
                  sx={{
                    height: "90%",
                    width: "90%",
                    fontSize: "90px",
                    backgroundColor: "primary.main",
                    border: "2px solid white",
                  }}
                />
              ) : (
                <Avatar
                  sx={{
                    height: "90%",
                    width: "90%",
                    fontSize: "90px",
                    backgroundColor: "primary.main",
                    border: "2px solid white",
                  }}
                />
              )}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              component="label"
              underline="none"
              sx={{
                width: { xs: "50%", sm: "30%" },
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 15px",
                backgroundColor: "rgba(26, 188, 156, 0.1)",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.3s ease, transform 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(26, 188, 156, 0.2)",
                  transform: "translateY(-2px)",
                  "& .upload-icon": {
                    color: "primary.icon",
                  },
                  "& .upload-typography": {
                    color: "primary.icon",
                  },
                },
                m: "10px",
              }}
            >
              <Backup
                className="upload-icon"
                sx={{ mr: "5px" }}
                fontSize="small"
              />

              <Typography variant="body2" className="upload-typography">
                שינוי תמונה
              </Typography>

              <input
                type="file"
                hidden
                multiple
                accept="image/*"
                onChange={handleFileUpload}
              />
            </Link>
          </Box>

          <Stack mt={"2em"} direction="row" justifyContent="flex-end">
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
