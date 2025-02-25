import {useState} from "react";

// MUI
import { MenuItem, Typography, Box, Popover } from "@mui/material";
import { ExpandMore, KeyboardBackspace } from "@mui/icons-material";

// Third party
import { useLocation, useNavigate } from "react-router-dom";

export default function MenuDesktop() {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const [popoverState, setPopoverState] = useState<{
    anchorEl: HTMLElement | null;
    openSubNav: boolean;
  }>({
    anchorEl: null,
    openSubNav: false,
  });

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    hasSubDrawer: boolean
  ) => {
    if (hasSubDrawer) {
      setPopoverState((prev) => ({
        anchorEl: prev.anchorEl ? null : event.currentTarget,
        openSubNav: !prev.openSubNav,
      }));
    }
  };

  const handleClose = () => {
    setPopoverState({
      anchorEl: null,
      openSubNav: false,
    });
  };

  return (
    <Box sx={{ display: { xs: "none", lg: "flex" } }}>
      {pages.map((page) =>
        page?.subDrawer ? (
          <Box key={page.name}>
            <MenuItem onClick={(event) => handleClick(event, true)}>
              <Typography
                variant="subtitle1"
                sx={{
                  color:
                    page.url === "/" && currentPath === "/"
                      ? "primary.main"
                      : page.url !== "/" && currentPath.startsWith(page.url?.split('?')?.[0])
                      ? "primary.main"
                      : "common.white",
                }}
              >
                {page.name}
              </Typography>

              <ExpandMore
                sx={{
                  color: "white",
                  mr: "3px",
                  transform: popoverState.openSubNav
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              />
            </MenuItem>

            <Popover
              open={popoverState.openSubNav && Boolean(popoverState.anchorEl)}
              anchorEl={popoverState.anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              disableRestoreFocus
              sx={{ mt: "15px", borderRadius: "-10px" }}
            >
              <Box>
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
                    onClick={() => {
                      handleClose();
                      setTimeout(() => navigate(service.url), 200);
                    }}
                  >
                    <Box sx={{ p: "5px" }}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="subtitle2" color={"common.black"}>
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
              </Box>
            </Popover>
          </Box>
        ) : (
          <MenuItem
            key={page.name}
            onClick={() => setTimeout(() => navigate(page.url), 200)}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color:
                  page.url === "/" && currentPath === "/"
                    ? "primary.main"
                    : page.url !== "/" && currentPath.startsWith(page.url?.split('?')?.[0])
                    ? "primary.main"
                    : "common.white",
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
  { url: "/privacy?type=web", name: "תקנון" },
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
