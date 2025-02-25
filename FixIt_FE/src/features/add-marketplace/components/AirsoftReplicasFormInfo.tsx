// MUI
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Typography,
  Box,
  Stack,
  InputAdornment,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// Components
import CustomDivider from "../../../components/Divider";
import { TAirsoftReplicas } from "../type";

export default function AirsoftReplicasFormInfo({
  formData,
  setFormData,
}: {
  formData: TAirsoftReplicas;
  setFormData: React.Dispatch<React.SetStateAction<TAirsoftReplicas>>;
}) {
  const {
    productName,
    gunCategory,
    customGunCategory,
    manufacturer,
    customManufacturer,
    gunType,
    description,
    condition,
    price,
  } = formData;
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack sx={{ gap: "16px" }}>
      {/* Product Name */}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle2" mr={"10px"}>
            שם מוצר
          </Typography>
          <Typography variant="subtitle2" color={"error"} marginRight={"1px"}>
            *
          </Typography>
        </Box>

        <TextField
          type="text"
          required
          placeholder="לדוגמא: UMAREX GLOCK 17"
          fullWidth
          value={productName}
          onChange={(e) =>
            setFormData({ ...formData, productName: e.target.value })
          }
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#c4c4c4",
              },
            },
          }}
        />
      </Box>

      {/* Subcategory  */}
      <Grid container spacing={2}>
        {/* Subcategory Selection */}
        <Grid xs={12} sm={6} md={6}>
          <FormControl sx={{ width: { xs: "100%" } }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle2" mr={"10px"}>
                קטגוריית נשק
              </Typography>
              <Typography
                variant="subtitle2"
                color={"error"}
                marginRight={"1px"}
              >
                *
              </Typography>
            </Box>

            <Select
              value={gunCategory}
              onChange={(e) =>
                setFormData({ ...formData, gunCategory: e.target.value })
              }
            >
              {subCategories.map((sub) => (
                <MenuItem key={sub} value={sub}>
                  <Typography variant="body1">{sub}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Custom Subcategory Input */}
        <Grid xs={12} sm={6} md={6}>
          {gunCategory === "אחר" && (
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="subtitle2" mr={"10px"}>
                  קטגוריית נשק שלא נמצאת ברשימה
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={"error"}
                  marginRight={"1px"}
                >
                  *
                </Typography>
              </Box>
              <TextField
                placeholder="יש להקליד קטגוריית נשק שלא נמצאת ברשימה"
                fullWidth
                value={customGunCategory}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    customGunCategory: e.target.value,
                  })
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: customGunCategory ? "#c4c4c4" : "red",
                    },
                  },
                }}
              />
            </Box>
          )}
        </Grid>
      </Grid>

      {/* Manufacturer */}
      <Grid container spacing={2}>
        {/* Manufacturer Selection */}
        <Grid xs={12} sm={6} md={6}>
          <FormControl sx={{ width: { xs: "100%" } }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle2" mr={"10px"}>
                שם יצרן
              </Typography>
              <Typography
                variant="subtitle2"
                color={"error"}
                marginRight={"1px"}
              >
                *
              </Typography>
            </Box>

            <Select
              value={manufacturer}
              onChange={(e) =>
                setFormData({ ...formData, manufacturer: e.target.value })
              }
            >
              {manufacturers.map((manu) => (
                <MenuItem key={manu} value={manu}>
                  <Typography variant="body1">{manu}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Custom Manufacturer Input */}
        <Grid xs={12} sm={6} md={6}>
          {manufacturer === "אחר" && (
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="subtitle2" mr={"10px"}>
                  שם יצרן שלא נמצא ברשימה
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={"error"}
                  marginRight={"1px"}
                >
                  *
                </Typography>
              </Box>
              <TextField
                placeholder="יש להקליד שם יצרן, אם היצרן אינו נמצא ברשימה"
                fullWidth
                value={customManufacturer}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    customManufacturer: e.target.value,
                  })
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: customManufacturer ? "#c4c4c4" : "red",
                    },
                  },
                }}
              />
            </Box>
          )}
        </Grid>
      </Grid>

      {/* Type Airsoft Replica Selection */}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: "-8px" }}>
          <Typography variant="subtitle2" mr={"10px"}>
            בחר סוג נשק
          </Typography>
          <Typography variant="subtitle2" color={"error"} marginRight={"1px"}>
            *
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {typeAirsoftReplicas.map((option) => (
            <Grid xs={4} key={option.value}>
              <Box
                onClick={() =>
                  setFormData({ ...formData, gunType: option.value })
                }
                sx={{
                  p: 1.2,
                  cursor: "pointer",
                  textAlign: "center",
                  border: "1px solid",
                  borderColor: "#ccc",
                  borderRadius: "20px",
                  boxShadow:
                    gunType === option.value
                      ? "0px 4px 12px rgba(0, 0, 0, 0.1)"
                      : "",
                  backgroundColor:
                    gunType === option.value ? "primary.lighter" : "",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Typography
                  variant="subtitle2"
                  fontWeight={gunType === option.value ? "bold" : "normal"}
                >
                  {option.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Condition */}
      <Box>
        <Box
          sx={{ display: "flex", alignItems: "center", mb: "-4px", mt: "-5px" }}
        >
          <Typography variant="subtitle2" mr={"10px"}>
            מצב מוצר
          </Typography>
          <Typography variant="subtitle2" color={"error"} marginRight={"1px"}>
            *
          </Typography>
        </Box>

        <Grid container spacing={1}>
          {conditions.map((option) => (
            <Grid xs={3} key={option}>
              <Box
                key={option}
                onClick={() => setFormData({ ...formData, condition: option })}
                sx={{
                  p: 1.2,
                  cursor: "pointer",
                  textAlign: "center",
                  border: condition === option ? "1px solid" : "1px solid",
                  borderColor: condition === option ? "primary.main" : "#ccc",
                  borderRadius: "20px",
                  boxShadow:
                    condition === option
                      ? "0px 4px 12px rgba(0, 0, 0, 0.2)"
                      : "",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <Typography
                  variant="subtitle2"
                  fontWeight={condition === option ? "bold" : "normal"}
                >
                  {option}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {isXsScreen ? (
        <Divider sx={{ my: 2 }} />
      ) : (
        <Box sx={{ mb: 2 }}>
          <CustomDivider />
        </Box>
      )}

      {/* Description */}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle2" mr={"10px"}>
            פרטים נוספים על המוצר
          </Typography>
          <Typography variant="subtitle2" color={"error"} marginRight={"1px"}>
            *
          </Typography>
        </Box>

        <TextField
          multiline
          rows={4}
          fullWidth
          required
          placeholder="הקלד פרטים נוספים על המוצר"
          value={description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#c4c4c4",
              },
            },
          }}
        />
      </Box>

      {/* Price */}
      <Box sx={{ width: { xs: "50%", sm: "30%" } }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle2" mr={"10px"}>
            מחיר
          </Typography>
          <Typography variant="subtitle2" color={"error"} marginRight={"1px"}>
            *
          </Typography>
        </Box>

        <TextField
          type="text"
          fullWidth
          placeholder="הקלד מחיר"
          value={price === 0 ? "" : price}
          onChange={(e) => {
            const value = e.target.value;
            const numericValue = value.replace(/[^0-9]/g, "");
            setFormData({
              ...formData,
              price: numericValue ? Number(numericValue) : 0,
            });
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Typography variant="h6" fontWeight={400}>
                  ₪
                </Typography>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#c4c4c4",
              },
            },
          }}
        />
      </Box>
    </Stack>
  );
}

const subCategories = [
  "רובה ארוך",
  "רובה קצר",
  "אקדח",
  "שוטגאן",
  "רובה צלפים",
  "אחר",
];

const manufacturers = [
  "ARES",
  "ASG",
  "CYMA",
  "Cybergun",
  "G&P",
  "G&G Armament",
  "GHK",
  "Inokatsu",
  "LCT",
  "Krytac",
  "RWA",
  "Specna Arms",
  "Tokyo Marui",
  "Umarex",
  "VFC",
  "WE Tech",
  "אחר",
];

const typeAirsoftReplicas = [
  { label: "חשמלי", value: "חשמלי" },
  { label: "גז ירוק", value: "גזירוק" },
  { label: "גז CO2", value: "CO2" },
];

const conditions = ["חדש", "כמו חדש", "משומש", "נדרש תיקון"];
