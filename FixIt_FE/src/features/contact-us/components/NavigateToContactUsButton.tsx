// MUI
import { Add } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

// Third party
import { useNavigate } from "react-router-dom";
import { FC } from "react";

type TNavigateToContactUsButton = {
  title: string;
  category: string;
};

const NavigateToContactUsButton: FC<TNavigateToContactUsButton> = ({
  title,
  category,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 5,
      }}
    >
      <IconButton
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f4f4f4",
        }}
        onClick={() => navigate("/contact-us", { state: { category } })}
      >
        <Add sx={{ fontSize: 40, color: "primary.main" }} />
      </IconButton>

      <Typography
        onClick={() => navigate("/contact-us", { state: { category } })}
        variant="subtitle2"
        sx={{
          marginTop: 1,
          textAlign: "center",
          "&:hover": { cursor: "pointer" },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export { NavigateToContactUsButton };
