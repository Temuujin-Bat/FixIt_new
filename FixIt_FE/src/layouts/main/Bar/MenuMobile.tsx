import { useState } from "react";

// MUI
import {
  Menu,
  Clear,
  ExpandMore,
  KeyboardBackspace,
} from "@mui/icons-material";
import {
  MenuItem,
  Typography,
  Box,
  IconButton,
  Drawer,
  Icon,
  Collapse,
} from "@mui/material";

// Third party
import { useNavigate } from "react-router-dom";

export default function MenuMobile() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleToggleSubMenu = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  const handleNavigation = (url: string) => {
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
      setTimeout(() => {
        navigate(url);
      }, 500);
    } else {
      navigate(url);
    }
  };

  return (
    <Box sx={{ display: { xs: "flex", lg: "none" } }}>
      <IconButton
        onClick={() => {
          setIsDrawerOpen(!isDrawerOpen);
          setOpenSubMenu(null);
        }}
        sx={{
          color: "common.white",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <Menu sx={{ fontSize: "1.8em" }} />
      </IconButton>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{
          sx: { backgroundColor: "grey.200", width: 350, boxShadow: 3 },
        }}
        closeAfterTransition={false}
      >
        <Icon
          onClick={() => setIsDrawerOpen(false)}
          sx={{ p: 3, "&:hover": { cursor: "pointer" } }}
        >
          <Clear />
        </Icon>

        <Box sx={{ p: 3 }}>
          {pages.map((page) =>
            page?.subDrawer ? (
              <Box key={page.name}>
                <MenuItem
                  onClick={() => handleToggleSubMenu(page.name)}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 2,
                    borderBottom: "1px solid",
                    borderColor: "grey.400",
                    transition: "border-color 0.3s ease",
                    "&:hover": {
                      borderBottom: "2px solid",
                      borderBottomColor: "primary.main",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "text.primary",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {page.name}
                  </Typography>
                  <ExpandMore
                    sx={{
                      transform:
                        openSubMenu === page.name
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      color: "primary.main",
                      fontSize: "1.7em",
                    }}
                  />
                </MenuItem>

                <Collapse
                  in={openSubMenu === page.name}
                  timeout="auto"
                  unmountOnExit
                  sx={{ backgroundColor: "white" }}
                >
                  {services.map((service) => (
                    <MenuItem
                      key={service.name}
                      sx={{
                        borderBottom: "1px solid",
                        borderColor: "grey.400",
                        transition: "border-color 0.3s ease",
                        "&:hover": {
                          borderBottom: "2px solid",
                          borderBottomColor: "primary.main",
                        },
                      }}
                      onClick={() => handleNavigation(service.url)}
                    >
                      <Box sx={{ p: "5px" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            variant="subtitle2"
                            color={"common.black"}
                          >
                            {service.name}
                          </Typography>
                          <KeyboardBackspace
                            sx={{
                              fontSize: "1.5em",
                              mr: "5px",
                              fontWeight: "bold",
                              color: "primary.main",
                            }}
                          />
                        </Box>
                        <Typography color={"grey.500"} variant="subtitle2">
                          {service?.description}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Collapse>
              </Box>
            ) : (
              <MenuItem
                key={page.name}
                onClick={() => handleNavigation(page.url)}
                sx={{
                  py: 2,
                  borderBottom: "1px solid",
                  borderColor: "grey.400",
                  transition: "border-color 0.3s ease",
                  "&:hover": {
                    borderBottom: "2px solid",
                    borderBottomColor: "primary.main",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "text.primary",
                    transition: "color 0.3s ease, border-color 0.3s ease",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {page.name}
                </Typography>
              </MenuItem>
            )
          )}
        </Box>
      </Drawer>
    </Box>
  );
}

const pages = [
  // { url: "/", name: "בית" },
  { url: "/events", name: "לוח אירועים" },
  { url: "/stores", name: "חנויות" },
  { url: "/arenas", name: "זירות" },
  { url: "#", name: "שרותים", subDrawer: true },
  // { url: "/marketplace", name: "יד שנייה" },
  { url: "/game-types", name: "סוגי משחקים" },
  { url: "/faq", name: "שאלות נפוצות" },
  { url: "/contact-us", name: "צור קשר" },
];

const services = [
  {
    name: "טכנאים",
    url: "/technicians",
    description: "כאן תוכלו למצוא את הטכנאים הכי מקצועים",
  },
  {
    name: "השכרת כלים",
    url: "/rentals",
    description: "כאן תוכלו למצוא כלים וציוד להשכרה",
  },
];
