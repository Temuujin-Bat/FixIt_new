// MUI
import { Facebook, Public, Directions } from "@mui/icons-material";
import { Box, Link, Paper, Typography } from "@mui/material";

// Components
import { getStoresData } from "../../../store/stores/selectors";

const DetailsLinks = () => {
  const { singleStore } = getStoresData();

  return (
    <Paper
      elevation={10}
      sx={{
        padding: "20px",
        borderRadius: "20px",
        height: "100%",
      }}
    >
      <Typography variant="h5" color="primary.darker">
        מידע נוסף וניווט:
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          mt: "10px",
          flexDirection: { xs: "row", md: "column" },
        }}
      >
        {singleStore?.facebookLink && (
          <Link
            target="_blank"
            component="a"
            href={
              singleStore?.facebookLink?.startsWith("http")
                ? singleStore?.facebookLink
                : `https://${singleStore?.facebookLink}`
            }
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flex: 1,
              border: "1px solid #1877F2",
              borderRadius: "20px",
              padding: "5px",
              width: "100%",
              "&:hover": {
                backgroundColor: "gray.light",
              },
            }}
            underline="none"
          >
            <Typography variant="subtitle1" color="#1877F2">
              פייסבוק
            </Typography>
            <Facebook fontSize="medium" sx={{ mr: "5px", color: "#1877F2" }} />
          </Link>
        )}

        {singleStore?.websiteLink && (
          <Link
            target="_blank"
            component="a"
            href={
              singleStore?.websiteLink?.startsWith("http")
                ? singleStore?.websiteLink
                : `https://${singleStore?.websiteLink}`
            }
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flex: 1,
              border: "1px solid #333333",
              borderRadius: "20px",
              padding: "5px",
              width: "100%",
              "&:hover": {
                backgroundColor: "gray.light",
              },
            }}
            underline="none"
          >
            <Typography variant="subtitle1" color="#333333">
              אתר
            </Typography>
            <Public fontSize="medium" sx={{ mr: "5px", color: "#333333" }} />
          </Link>
        )}

        {singleStore?.address?.XCoordinate && (
          <Link
            target="_blank"
            component="a"
            href={`https://waze.com/ul?ll=${singleStore?.address?.XCoordinate},${singleStore?.address?.YCoordinate}&navigate=yes`}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flex: 1,
              border: "1px solid #00BFFF",
              borderRadius: "20px",
              padding: "5px",
              width: "100%",
              "&:hover": {
                backgroundColor: "gray.light",
              },
            }}
            underline="none"
          >
            <Typography color="#00BFFF" variant="subtitle1">
              וייז
            </Typography>
            <Directions
              fontSize="medium"
              sx={{ mr: "5px", color: "#00BFFF" }}
            />
          </Link>
        )}
      </Box>
    </Paper>
  );
};

export { DetailsLinks };
