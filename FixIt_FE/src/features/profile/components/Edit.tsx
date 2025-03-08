import { useState } from "react";

// MUI
import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Phone } from "@mui/icons-material";

// Hooks
import { useAppSelector } from "../../../hooks/useAppStore";

// Components
import { getCustomerInfo } from "../../../store/authenticate/selectors";
import { EditModal } from "./EditModal";

const Edit = () => {
  const [openModal, setOpenModal] = useState(false);
  const selectedCustomer = useAppSelector(getCustomerInfo);

  return (
    <Box mb={3}>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          padding: 2.5,
          borderRadius: 2.5,
        }}
      >
        <Avatar sx={{ width: 50, height: 50 }}>
          {selectedCustomer?.name?.charAt(0)}
        </Avatar>

        <Stack sx={{ justifyContent: "center", alignItems: "left", ml: 3 }}>
          <Typography variant="h6">{selectedCustomer.name}</Typography>

          <Stack sx={{ flexDirection: "row" }}>
            <Phone fontSize="small" />
            <Typography variant="body2" ml={1}>
              {selectedCustomer.phone}
            </Typography>
          </Stack>

          {selectedCustomer.name_changes != 2 && (
            <Button
              onClick={() => setOpenModal(true)}
              sx={{
                fontWeight: "bold",
                textTransform: "none",
              }}
              startIcon={<EditIcon fontSize={"small"} />}
            >
              Мэдээлэл өөрчлөх
            </Button>
          )}
        </Stack>
      </Paper>

      <EditModal open={openModal} onClose={() => setOpenModal(false)} />
    </Box>
  );
};

export { Edit };
