// MUI
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography, Container, Box, Stack } from "@mui/material";

// Third party
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container maxWidth={"md"} sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={9} md={9} lg={9}>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: "5px",
              }}
            >
              על החברה
            </Typography>

            <Typography variant="body2">
              האתר נבנה באהבה למען קהילת האיירסופט בישראל, השקענו הרבה זמן וכסף
              כדי שתוכלו למצוא בקלות את כל המידע והמשאבים הנחוצים לשחקנים בכל
              רמה, אם יש לכם רעיונות, תיקונים או בקשות -{" "}
              <Box
                component={Link}
                to="/contact-us"
                sx={{
                  color: "inherit",
                  textDecoration: "underline",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "primary.darker",
                  },
                }}
              >
                דברו איתנו!
              </Box>
            </Typography>
          </Box>
        </Grid>

        <Grid xs={0} sm={3} md={3} lg={3}>
          <Box
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
            }}
          >
            <Stack sx={{ height: "80px", display: { xs: "none", sm: "flex" } }}>
              <Stack
                component={"img"}
                loading="lazy"
                decoding="async"
                sx={{ height: "100%", objectFit: "contain" }}
                src="/assets/Logo/logo.png"
              />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
