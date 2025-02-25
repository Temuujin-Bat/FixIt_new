// MUI
import { Add } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

// Components
import { Divider } from "../../../components";

// Third party
import { Link } from "react-router-dom";

export default function UserEventsAction() {
  return (
    <>
      <Divider mt="60px" />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 5,
          mb: 5,
        }}
      >
        <Link to="/events/add">
          <IconButton
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#f4f4f4",
            }}
          >
            <Add sx={{ fontSize: 40, color: "primary.main" }} />
          </IconButton>
        </Link>

        <Typography
          to="/events/add"
          component={Link}
          variant="subtitle2"
          sx={{
            color: "black",
            textDecoration: "none",
            marginTop: 1,
            textAlign: "center",
            "&:hover": { cursor: "pointer" },
          }}
        >
          תוסיפו אירועים חדשים
        </Typography>
      </Box>
    </>
  );
}
