// MUI
import { Box, Modal } from "@mui/material";

// Components
import { BarberSelection } from "./BarberSelection";
import {
  Footer,
  Gallery,
  Header,
  RegisterBusinessAction,
  Reviews,
} from "../components";
import { TBarbershops } from "../../../types";

const style = {
  height: "100%",
  overflowY: "auto",
  padding: 4,
  boxSizing: "border-box",
  "&::-webkit-scrollbar": { width: "8px" },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#f1f1f1",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb:hover": { backgroundColor: "#555" },
};

const DashboardModal = ({
  open,
  onClose,
  barber,
}: {
  open: boolean;
  onClose: () => void;
  barber: TBarbershops | null;
}) => {
  return (
    <Modal
      open={open}
      onClose={(_, reason) => {
        if (reason === "backdropClick") return;
        onClose();
      }}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          backgroundColor: "secondary.lighter",
          borderRadius: 10,
          boxShadow: 24,
          minWidth: 300,
          width: 550,
          maxWidth: 600,
          height: "85vh",
          overflow: "hidden",
        }}
      >
        <Box sx={style}>
          <Header barber={barber} onClose={onClose} />

          <BarberSelection barber={barber} />

          <Gallery barber={barber} />

          <RegisterBusinessAction />

          <Reviews barber={barber} />

          <Footer />
        </Box>
      </Box>
    </Modal>
  );
};

export { DashboardModal };
