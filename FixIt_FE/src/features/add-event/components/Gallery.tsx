// MUI
import Grid from "@mui/material/Unstable_Grid2";
import { Box, IconButton, Typography } from "@mui/material";
import { AddPhotoAlternate, Delete } from "@mui/icons-material";

// Components
import { DBEventModel } from "../type";
import { convertToBase64 } from "../../../utils/helpers/ConvertToBase64";

export default function Gallery({
  formData,
  setFormData,
}: {
  formData: DBEventModel;
  setFormData: React.Dispatch<React.SetStateAction<DBEventModel>>;
}) {
  const numberOfBoxes = 3;

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const base64Photo = await convertToBase64(file);

      setFormData((prev) => {
        const updatedGallery = [...(prev.event_gallery ?? [])];
        updatedGallery[index] = base64Photo;
        return { ...prev, event_gallery: updatedGallery };
      });

      event.target.value = "";
    }
  };

  const handleImageDelete = (index: number) => {
    setFormData((prev) => {
      const updatedGallery = [...(prev.event_gallery ?? [])];

      updatedGallery[index] = null;

      return { ...prev, event_gallery: updatedGallery };
    });
  };

  return (
    <Grid container spacing={3} mt={1}>
      {Array.from({ length: numberOfBoxes }).map((_, index) => (
        <Grid xs={6} sm={4} md={4} key={index}>
          <Box
            sx={{
              border: "2px dashed #ccc",
              borderRadius: "20px",
              height: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease-in-out",
              backgroundColor: "#f9f9f9",
              position: "relative",
              "&:hover": {
                borderColor: "primary.main",
                cursor: "pointer",
              },
            }}
          >
            <Box
              component="label"
              sx={{
                position: "absolute",
                inset: 0,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component={"input"}
                type="file"
                accept="image/*"
                style={{
                  display: "none",
                }}
                onChange={(e) => handleImageUpload(e, index)}
              />

              {!formData.event_gallery?.[index] ? (
                <>
                  <AddPhotoAlternate
                    sx={{ color: "primary.main", zIndex: 1, ml: 1 }}
                  />
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    zIndex={1}
                  >
                    הוספת תמונה
                  </Typography>
                </>
              ) : null}
            </Box>

            {formData.event_gallery?.[index] && (
              <>
                <Box
                  component={"img"}
                  src={formData.event_gallery[index] as string}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                    padding: 1,
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                />

                <IconButton
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    backgroundColor: "error.main",
                    color: "white",
                    transition:
                      "transform 0.2s, background-color 0.2s, color 0.2s",
                    "&:hover": {
                      transform: "scale(1.2)",
                      backgroundColor: "white",
                      color: "error.main",
                      border: "1px solid",
                    },
                  }}
                  onClick={() => handleImageDelete(index)}
                >
                  <Delete fontSize="small" />
                </IconButton>
              </>
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
