import { useState } from "react";

// MUI
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, TextField, Typography } from "@mui/material";

// Components
import { DBEventModel, IEventLink } from "../type";
import { CustomTextFieldLabel } from "../../../components/form";

export default function Links({
  formData,
  setFormData,
}: {
  formData: DBEventModel;
  setFormData: React.Dispatch<React.SetStateAction<DBEventModel>>;
}) {
  const { postEvent_links } = formData;
  const [newLink, setNewLink] = useState({ title: "", link: "" });

  const handleAddLink = () => {
    if (newLink.link.trim() && newLink.title.trim()) {
      const newEventLink: IEventLink = {
        title: newLink.title.trim(),
        link: newLink.link.trim(),
      };

      setFormData((prev) => ({
        ...prev,
        postEvent_links: [...(prev.postEvent_links || []), newEventLink],
      }));

      setNewLink({ title: "", link: "" });
    }
  };

  const handleRemoveLink = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      postEvent_links:
        prev.postEvent_links?.filter((_, i) => i !== index) || [],
    }));
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={8}>
        <Box>
          <CustomTextFieldLabel title="כותרת לקישור" />

          <TextField
            fullWidth
            value={newLink.title}
            onChange={(e) =>
              setNewLink((prev) => ({ ...prev, title: e.target.value }))
            }
            sx={{ mb: 1 }}
          />

          <CustomTextFieldLabel title="קישור לתמונות או סרטונים" />
          <TextField
            fullWidth
            value={newLink.link}
            onChange={(e) =>
              setNewLink((prev) => ({ ...prev, link: e.target.value }))
            }
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              height: "3em",
              mt: 3,
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.light",
              },
              borderRadius: "100px",
            }}
            onClick={handleAddLink}
            disabled={!newLink.title || !newLink.link}
          >
            <Typography variant="subtitle1" color="common.white">
              הוספת קישור
            </Typography>
          </Button>
        </Box>
      </Grid>

      {(formData?.postEvent_links?.length || 0) > 0 && (
        <Grid xs={12}>
          <Typography variant="subtitle1">קישורים שהוספו:</Typography>
          <Box>
            {(postEvent_links || []).map((link, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle1">
                    {index + 1}. &nbsp;
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="primary.main"
                    component="a"
                    href={
                      link?.link?.startsWith("http")
                        ? link.link
                        : `https://${link.link}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textDecoration: "none",
                      cursor: "pointer",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {link.title}
                  </Typography>

                  <Button
                    sx={{
                      ml: 1,
                      padding: 0,
                      minWidth: "auto",
                      color: "error.main",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "error.dark",
                      },
                    }}
                    onClick={() => handleRemoveLink(index)}
                  >
                    מחיקה
                  </Button>
                </Box>
              );
            })}
          </Box>
        </Grid>
      )}
    </Grid>
  );
}
