// MUI
import { Typography, Box, IconButton, Badge } from "@mui/material";

// Hooks
import { useAppSelector } from "../../../hooks/useAppStore";

// Third party
import { Link } from "react-router-dom";

// Components
import { getCheckoutData } from "../../../store/products/selectors";
import { Iconify } from "../../../components";

export default function NotLoggedIn() {
  const checkout = useAppSelector(getCheckoutData);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box px={2}>
        <Badge badgeContent={checkout.cart?.length || 0} color="error">
          <IconButton
            component={Link}
            to="/checkout/cart"
            size="small"
            color="inherit"
            sx={{ p: 0 }}
          >
            <Iconify color="white" icon="carbon:shopping-cart" width={24} />
          </IconButton>
        </Badge>
      </Box>

      <Typography variant="subtitle1" color="common.white">
        היי אורח!
      </Typography>

      <Box
        component={Link}
        to="/login"
        sx={{
          display: "flex",
          alignItems: "center",
          ml: "10px",
          textDecoration: "none",
        }}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            borderRadius: "20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
            padding: "8px 16px",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          <Typography variant="subtitle2" color="common.white">
            התחבר/הירשם
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
