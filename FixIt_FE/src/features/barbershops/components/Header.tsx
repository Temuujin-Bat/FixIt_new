// MUI
import {
  Avatar,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Close,
  Facebook,
  Instagram,
  LocationOn,
  Phone,
} from "@mui/icons-material";

// Components
import { TBarbershops } from "../../../types";

const Header = ({
  barber,
  onClose,
}: {
  barber: TBarbershops | null;
  onClose: () => void;
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: 4,
        borderRadius: 10,
        mb: 3,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "60%",
          backgroundImage: `url(${barber?.gallery[0].image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopRightRadius: isMobile ? 0 : 40,
          borderTopLeftRadius: isMobile ? 0 : 40,
          zIndex: 1,
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "50%",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,1) 100%)",
          },
        }}
      />

      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: { xs: 20, sm: 10 },
          right: { xs: 20, sm: 10 },
          color: "secondary.darker",
          backgroundColor: "white",
          border: "1px solid",
          borderColor: "secondary.light",
          zIndex: 100,
        }}
      >
        <Close fontSize="large" />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          src={barber?.logo}
          sx={{
            width: 100,
            height: 100,
            mt: 15,
            mb: 4,
            zIndex: 100,
            borderRadius: 5,
            border: "5px solid",
            borderColor: "white",
          }}
        />
        <Typography variant="h4">{barber?.name}</Typography>

        <Box
          component="a"
          href={`https://www.google.com/maps?q=${barber?.location?.XCoordinates},${barber?.location?.YCoordinates}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            color: "secondary.dark",
            alignItems: "center",
            mb: 3,
            mt: 1,
            textDecoration: "none",
          }}
        >
          <LocationOn fontSize="small" />
          <Typography variant="body1">{barber?.location?.address}</Typography>
        </Box>
        <Box>
          <IconButton
            component="a"
            href={`tel:${barber?.phone}`}
            sx={{
              backgroundColor: "secondary.lighter",
              color: "secondary.darker",
              borderRadius: 4,
            }}
          >
            <Phone fontSize="large" />
          </IconButton>

          {barber?.instagramLink && (
            <IconButton
              onClick={() => window.open(barber.instagramLink, "_blank")}
              sx={{
                backgroundColor: "secondary.lighter",
                color: "secondary.darker",
                ml: 2,
                borderRadius: 4,
              }}
            >
              <Instagram fontSize="large" />
            </IconButton>
          )}

          {barber?.facebookLink && (
            <IconButton
              onClick={() => window.open(barber.facebookLink, "_blank")}
              sx={{
                backgroundColor: "secondary.lighter",
                color: "secondary.darker",
                borderRadius: 4,
                ml: 2,
              }}
            >
              <Facebook fontSize="large" />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export { Header };
