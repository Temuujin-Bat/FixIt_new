// MUI
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { TextField, Box, Typography, Switch, Checkbox } from "@mui/material";
import { CheckCircle, PanoramaFishEye } from "@mui/icons-material";

// Components
import { DBEventModel } from "../type";

export default function PaymentDetails({
  formData,
  setFormData,
}: {
  formData: DBEventModel;
  setFormData: React.Dispatch<React.SetStateAction<DBEventModel>>;
}) {
  const {
    isPaid,
    payment_amount,
    payment_paymentLink,
    payment_description,
    payment_payInPlace,
    payment_registerInPlace,
  } = formData;

  return (
    <Grid container spacing={1}>
      <Grid xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "&:hover": {
              borderColor: "primary.main",
              cursor: "pointer",
            },
          }}
          onClick={() =>
            setFormData((prev) => ({ ...prev, isPaid: !prev.isPaid }))
          }
        >
          <Typography
            variant={isPaid ? "subtitle1" : "subtitle1"}
            color={isPaid ? "primary.main" : "text.secondary"}
          >
            {isPaid ? "אירוע בתשלום" : "האם הארוע בתשלום?"}
          </Typography>
          <Switch checked={isPaid} color="primary" />
        </Box>
      </Grid>

      {isPaid && (
        <>
          <Grid xs={12}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="subtitle2" ml={"10px"}>
                    עלות להשתתפות
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color={"error"}
                    marginLeft={"1px"}
                  >
                    *
                  </Typography>
                </Box>

                <TextField
                  type="text"
                  fullWidth
                  placeholder="הקלד מחיר למשתתף"
                  value={payment_amount === 0 ? "" : payment_amount}
                  onChange={(e) => {
                    const numericValue = e.target.value.replace(/[^0-9]/g, "");
                    setFormData((prev) => ({
                      ...prev,
                      payment_amount: numericValue ? Number(numericValue) : 0,
                    }));
                  }}
                />
              </Grid>

              <Grid xs={12} sm={6}>
                <Box>
                  <Typography variant="subtitle2" ml={"10px"}>
                    קישור לביט/פייבוקס
                  </Typography>
                  <TextField
                    type="text"
                    fullWidth
                    placeholder="הקלד קישור"
                    value={payment_paymentLink}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        payment_paymentLink: e.target.value,
                      }))
                    }
                  />
                </Box>
              </Grid>

              <Grid xs={12}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="subtitle2" ml={"10px"}>
                    פרטים נוספים על תשלום והרשמה
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color={"error"}
                    marginLeft={"1px"}
                  >
                    *
                  </Typography>
                </Box>

                <TextField
                  multiline
                  rows={4}
                  fullWidth
                  placeholder="הקלד פרטים נוספים על תשלום ועל הרשמה"
                  value={payment_description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      payment_description: e.target.value,
                    }))
                  }
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={12}>
            <Typography
              variant="h5"
              color={"primary.darker"}
              sx={{ textDecoration: "underline", mt: "10px" }}
            >
              פרטים נוספים על תשלום:
            </Typography>

            <Grid container spacing={1}>
              {[
                {
                  label: "לשלם במקום",
                  checked: payment_payInPlace,
                  field: "payment_payInPlace",
                },
                {
                  label: "להירשם במקום",
                  checked: payment_registerInPlace,
                  field: "payment_registerInPlace",
                },
              ].map((item) => (
                <Grid xs={6} sm={4} key={item.label}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                      borderRadius: "30px",
                      backgroundColor: item.checked
                        ? "primary.lighter"
                        : "transparent",
                      "&:hover": {
                        borderColor: "primary.main",
                        cursor: "pointer",
                      },
                    }}
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        [item.field]: !item.checked,
                      }))
                    }
                  >
                    <Checkbox
                      icon={<PanoramaFishEye />}
                      checkedIcon={
                        <CheckCircle sx={{ color: "primary.main" }} />
                      }
                      checked={item.checked}
                      onChange={() =>
                        setFormData((prev) => ({
                          ...prev,
                          [item.field]: !item.checked,
                        }))
                      }
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 20,
                        },
                      }}
                    />
                    <Typography
                      variant={item.checked ? "subtitle1" : "body1"}
                      color="primary.darker"
                    >
                      {item.checked
                        ? `ניתן ${item.label}`
                        : `ניתן ${item.label}?`}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
}
