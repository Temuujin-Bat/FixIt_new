import { useState } from "react";

// MUI
import { Box, TextField, Typography, MenuItem } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { LoadingButton } from "@mui/lab";

// Components
import { getUserData } from "../../../store/authenticate/selectors";
import { CONTACT_CATEGORIES } from "../../../data/constants";
import { SuccessMessagesField } from "../../../components/form";

// Hooks
import { useContactUsAPI } from "../../../hooks/API";

// Third party
import { useLocation } from "react-router-dom";

const Form = () => {
  const { userInfo } = getUserData();
  const location = useLocation();
  const userCategory = location?.state?.category;

  const [name, setName] = useState(userInfo?.name || "");
  const [email, setEmail] = useState(userInfo?.email || "");
  const [phone, setPhone] = useState(userInfo?.phone || "");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState(userCategory || "General");

  const {
    mutate: addContact,
    isPending,
    isSuccess: contactUsSuccess,
  } = useContactUsAPI();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (category) {
      addContact({
        name,
        email,
        phone,
        category,
        message,
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: { xs: 0, md: 5 },
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          borderRadius: "20px",
        }}
      >
        <Box mb={10} position="relative">
          <Typography variant="h3" color="primary.dark">
            צור קשר
          </Typography>

          <Typography variant="subtitle1" color="text.secondary">
            אנחנו כאן כדי לעזור! מלאו את הטופס עם הפרטים שלכם,
            <br />
            ואנחנו נחזור אליכם בהקדם האפשרי.
          </Typography>

          <Box
            sx={{
              position: "absolute",
              zIndex: -1,
              top: "50%",
              left: "70%",
              transform: "translate(-50%, -50%)",
              display: "grid",
              gridTemplateColumns: "repeat(4, 20px)",
              gridTemplateRows: "repeat(4, 20px)",
              gap: 3,
            }}
          >
            {Array.from({ length: 16 }, (_, index) => (
              <Box
                key={index}
                sx={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "primary.lighter",
                  borderRadius: "50%",
                }}
              />
            ))}
          </Box>
        </Box>

        <SuccessMessagesField contactUsSuccess={contactUsSuccess} />

        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <TextField
              variant="standard"
              required
              placeholder="הקלד שם מלא"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              variant="standard"
              required
              placeholder="הקלד מייל"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              variant="standard"
              required
              fullWidth
              placeholder="05X-XXXXXXX"
              value={phone}
              onChange={(e) => {
                const { value } = e.target;
                if (/^\d*$/.test(value)) {
                  setPhone(value);
                }
              }}
              inputProps={{
                maxLength: 10,
              }}
            />
          </Grid>

          <Grid xs={12}>
            <TextField
              variant="standard"
              select
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              sx={{
                maxWidth: { xs: "370px", md: "500px" },
              }}
            >
              {CONTACT_CATEGORIES.map((option) => (
                <MenuItem
                  sx={{
                    whiteSpace: "normal",
                  }}
                  key={option.category}
                  value={option.category}
                >
                  {option.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid xs={12}>
            <TextField
              variant="standard"
              required
              multiline
              placeholder="הקלד טקסט חופשי"
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
        </Grid>

        <LoadingButton
          loading={isPending}
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            height: "3em",
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "primary.light",
            },
            borderRadius: "100px",
            mt: { xs: 2, sm: 3 },
          }}
        >
          <Typography variant="subtitle1" color="common.white">
            שליחה
          </Typography>
        </LoadingButton>
      </Box>
    </Box>
  );
};

export { Form };
