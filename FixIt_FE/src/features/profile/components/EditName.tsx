import { useState } from "react";

// MUI
import { Box, Stack, Typography, Link } from "@mui/material";

// Components
import { IUSER } from "../../../types";
import EditNameModal from "./EditNameModal";

export default function EditName({ userInfo }: { userInfo: IUSER }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px",
        }}
      >
        <Stack>
          <Typography variant="body1">שם מלא:</Typography>
          <Typography variant="subtitle2">{userInfo?.name}</Typography>
        </Stack>

        <Stack>
          <Typography variant="body1">שם תצוגה:</Typography>
          <Typography variant="subtitle2">{userInfo?.displayName}</Typography>
        </Stack>

        <Link
          sx={{
            textDecoration: "none",
            "&:hover": {
              cursor: "pointer",
              textDecoration: "underline",
            },
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Typography
            sx={{ color: "primary.dark", "&:hover": { color: "primary.main" } }}
            variant="body1"
          >
            ערוך שם
          </Typography>
        </Link>
      </Box>

      <EditNameModal
        userInfo={userInfo}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
