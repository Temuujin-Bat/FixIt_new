// MUI
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

// Components
import { IRentalProvider } from "../../../data/rentalsData/data";

export default function RentalsCard({ rental }: { rental: IRentalProvider }) {
  return (
    <Paper
      elevation={10}
      sx={{
        height: "100%",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingX: 4,
          paddingY: 2,
          height: "140px",
        }}
      >
        <Box>
          <Typography variant="h6">{rental.title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {rental.description}
          </Typography>

          <Stack direction="row" alignItems="center">
            <Typography variant="subtitle2" color="text.primary">
              איש קשר:&nbsp;
            </Typography>
            <Typography variant="body2">{rental.contactName}</Typography>
          </Stack>

          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle2">טלפון:&nbsp;</Typography>
            <Typography
              variant="subtitle2"
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                "&:hover": {
                  color: "error.dark",
                },
              }}
              component="a"
              href={`tel:${rental.contactPhone}`}
            >
              {rental.contactPhone}
            </Typography>
          </Stack>

          {rental.contactEmail && (
            <Stack direction="row" alignItems="center">
              <Typography variant="subtitle2" color="text.primary">
                מייל:&nbsp;
              </Typography>
              <Typography variant="body2">{rental.contactEmail}</Typography>
            </Stack>
          )}
        </Box>

        <Avatar
          src={rental.picUrl}
          sx={{
            width: { xs: 80, md: 90 },
            height: { xs: 80, md: 90 },
          }}
          variant="rounded"
        />
      </Box>

      <Divider />

      <Box sx={{ paddingX: 4, paddingY: 2, height: "220px" }}>
        {/* Kit List */}
        <Typography variant="subtitle2" color="text.primary" mb={"5px"}>
          כלול בערכה:
        </Typography>

        <Stack spacing={0.5} mb={2}>
          {rental.kit.map((item, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              • {item}
            </Typography>
          ))}
        </Stack>

        {/* Price Info */}
        {rental?.price !== 0 && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingY: 1,
              paddingX: 2,
              borderRadius: "20px",
              mt: "10px",
              backgroundColor: "rgba(26, 188, 156, 0.1)",
            }}
          >
            <Typography variant="subtitle2" color="text.primary">
              מחיר:
            </Typography>
            <Typography variant="h6" color="primary.main">
              {rental?.price} ₪
            </Typography>
          </Box>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          flexWrap: "wrap",
          gap: 1,
          backgroundColor: "#f5f5f5",
          padding: 1,
          width: "100%",
        }}
      >
        {rental.regions.map((rent) => (
          <Chip
            key={rent}
            label={
              <Typography variant="subtitle2" fontWeight="bold">
                {rent}
              </Typography>
            }
            size="small"
            sx={{
              color: "primary.main",
              backgroundColor: "inherit",
            }}
          />
        ))}
      </Box>
    </Paper>
  );
}
