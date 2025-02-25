// MUI
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Box, Paper } from "@mui/material";
import { TaskAlt, WarningAmber } from "@mui/icons-material";

// Components
import { getOpenArenasData } from "../../../store/arenas/selectors";

export default function DetailsInformation() {
  const { singleOpenArena } = getOpenArenasData();

  return (
    <Grid container spacing={2} sx={{ mt: "5px" }}>
      <Grid xs={12} sm={6} md={6} lg={6}>
        <Paper
          elevation={10}
          sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            height: "100%",
          }}
        >
          <Typography variant="h5" color={"primary.darker"}>
            {singleOpenArena?.subtitle}
          </Typography>

          <Typography variant="body1">
            {singleOpenArena?.description}
          </Typography>

          <Box mt={"15px"}>
            <Grid container spacing={2}>
              {singleOpenArena?.type?.map((arena, index) => (
                <Grid xs={6} sm={6} md={4} lg={4} key={index}>
                  <Paper
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "14px 0px",
                      justifyContent: "space-around",
                      backgroundColor: "grey.50",
                      borderRadius: "12px",
                      border: "1px solid",
                      borderColor: "grey.300",
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    <Typography
                      fontWeight="bold"
                      variant="caption"
                      color="text.primary"
                    >
                      {arena}
                    </Typography>
                    <TaskAlt
                      sx={{
                        color: "primary.main",
                        ml: "10px",
                        fontSize: "20px",
                      }}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Grid>

      <Grid xs={12} sm={6} md={6} lg={6}>
        <Paper
          elevation={10}
          sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            height: "100%",
          }}
        >
          <Typography variant="h5" color={"primary.darker"}>
            דברים שחובה לדעת על הזירה:
          </Typography>

          {singleOpenArena?.notes?.map((item, index) => (
            <Box sx={{ display: "flex" }} key={index}>
              <Typography ml={"10px"} variant="subtitle1">
                {index + 1}.
              </Typography>
              <Typography variant="body1">{item}</Typography>
            </Box>
          ))}

          <Box sx={{ mt: "15px" }}>
            <Grid container spacing={2}>
              {singleOpenArena?.tags?.map((arena, index) => (
                <Grid xs={6} sm={6} md={6} lg={6} key={index}>
                  <Paper
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "14px 0px",
                      justifyContent: "space-around",
                      backgroundColor: "grey.50",
                      borderRadius: "12px",
                      border: "1px solid",
                      borderColor: "grey.300",
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    <Typography
                      fontWeight="bold"
                      variant="caption"
                      color="text.primary"
                    >
                      {arena}
                    </Typography>
                    {arena === "לא מתוחזק" ? (
                      <WarningAmber
                        sx={{
                          color: "error.main",
                          ml: "10px",
                          fontSize: "20px",
                        }}
                      />
                    ) : (
                      <TaskAlt
                        sx={{
                          color: "primary.main",
                          ml: "10px",
                          fontSize: "20px",
                        }}
                      />
                    )}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
