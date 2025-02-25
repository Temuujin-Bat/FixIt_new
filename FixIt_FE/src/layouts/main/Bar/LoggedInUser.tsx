import { useState } from "react";

// MUI
import {
  MenuItem,
  Avatar,
  Menu,
  Typography,
  Box,
  IconButton,
  Badge,
} from "@mui/material";

// Third party
import { Link, useNavigate } from "react-router-dom";

// Components
import { getUserData } from "../../../store/authenticate/selectors";
import { persistor } from "../../../store";
import { Iconify } from "../../../components";
import { getCheckoutData } from "../../../store/products/selectors";
import { PROFILE_PHOTOS_URL } from "../../../data/constants";

// Hooks
import { useAppSelector } from "../../../hooks/useAppStore";

export default function LoggedInUser() {
  const navigate = useNavigate();
  const { userInfo } = getUserData();
  const checkout = useAppSelector(getCheckoutData);

  const [isMenuOpen, setIsMenuOpen] = useState<null | HTMLElement>(null);

  const handleNavigation = (url: string) => {
    if (isMenuOpen) {
      setIsMenuOpen(null);
      setTimeout(() => {
        navigate(url);
      }, 500);
    } else {
      navigate(url);
    }
  };

  const logoutHandler = async () => {
    await persistor.purge();
    sessionStorage.clear();
    localStorage.clear();

    navigate("/");
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box px={2}>
          <Badge badgeContent={checkout.cart?.length || 0} color="error">
            <IconButton
              component={Link}
              to="/checkout/cart"
              size="small"
              color="inherit"
              sx={{
                p: 0,
              }}
            >
              <Iconify color="white" icon="carbon:shopping-cart" width={24} />
            </IconButton>
          </Badge>
        </Box>

        <Typography color={"common.white"} variant="subtitle1">
          היי, {userInfo?.displayName}!
        </Typography>

        <IconButton
          onClick={(event) => setIsMenuOpen(event.currentTarget)}
          sx={{
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          {userInfo?.avatarFile ? (
            <Avatar
              alt="profile pic"
              src={`${PROFILE_PHOTOS_URL}${userInfo?.avatarFile}`}
            />
          ) : (
            <Avatar
              sx={{
                backgroundColor: "common.white",
                height: 35,
                width: 35,
              }}
            >
              <Typography variant="h5" color="#212B36">
                {userInfo?.name?.charAt(0).toUpperCase()}
              </Typography>
            </Avatar>
          )}
        </IconButton>
      </Box>

      <Menu
        sx={{ mt: "45px" }}
        anchorEl={isMenuOpen}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(isMenuOpen)}
        onClose={() => setIsMenuOpen(null)}
      >
        {[
          { label: "פרופיל", url: "/profile" },
          { label: "האירועים שלי", url: "/my-events" },
        ].map((page) => (
          <MenuItem key={page.label} onClick={() => handleNavigation(page.url)}>
            <Typography
              variant="h6"
              sx={{
                color: "common.black",
                my: "5px",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              {page.label}
            </Typography>
          </MenuItem>
        ))}

        <MenuItem onClick={logoutHandler}>
          <Typography
            variant="h6"
            sx={{
              color: "error.main",
              my: "5px",
            }}
          >
            התנתק
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
