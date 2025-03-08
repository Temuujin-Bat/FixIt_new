import { useState } from "react";

// MUI
import { useMediaQuery, useTheme } from "@mui/material";

// Components
import { Barbershop, DashboardDialog, DashboardModal } from "./components";
import { TBarbershops } from "../../types";

const BarbershopPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);
  const [selectedBarber, setSelectedBarber] = useState<TBarbershops | null>(
    null,
  );

  return (
    <>
      <Barbershop setOpen={setOpen} setSelectedBarber={setSelectedBarber} />

      {isMobile ? (
        <DashboardDialog
          open={open}
          onClose={() => setOpen(false)}
          barber={selectedBarber}
        />
      ) : (
        <DashboardModal
          open={open}
          onClose={() => setOpen(false)}
          barber={selectedBarber}
        />
      )}
    </>
  );
};

export { BarbershopPage };
