import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const PartsAndAccessories = () => {
  const navigate = useNavigate();
  const [subCategory, setSubCategory] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [customManufacturer, setCustomManufacturer] = useState("");

  const subCategories = [
    "BBs",
    "Gases and CO2 Capsules",
    "Magazines",
    "Batteries",
    "Other",
  ];

  const manufacturers = [
    "Tokyo Marui",
    "G&G Armament",
    "Classic Army",
    "ICS",
    "Other",
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Add Parts and Accessories
      </Typography>

      {/* Subcategory Selection */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Subcategory</InputLabel>
        <Select
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
        >
          {subCategories.map((sub) => (
            <MenuItem key={sub} value={sub}>
              {sub}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Manufacturer Selection */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Manufacturer</InputLabel>
        <Select
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
        >
          {manufacturers.map((manu) => (
            <MenuItem key={manu} value={manu}>
              {manu}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Custom Manufacturer Input */}
      {manufacturer === "Other" && (
        <TextField
          fullWidth
          label="Custom Manufacturer"
          value={customManufacturer}
          onChange={(e) => setCustomManufacturer(e.target.value)}
          sx={{ mb: 2 }}
        />
      )}

      <Button
        variant="outlined"
        onClick={() => navigate(-1)} // Navigates back
      >
        Back to Categories
      </Button>

      {/* Submit Button */}
      <Button
        variant="contained"
        disabled={!subCategory || !manufacturer}
        onClick={() => alert("Part or Accessory Added!")}
      >
        Submit
      </Button>
    </Box>
  );
};

export default PartsAndAccessories;
