// MUI
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Box,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Stadium } from "@mui/icons-material";

// Components
import { DBEventModel } from "../type";
import { CustomTextFieldLabel } from "../../../components/form";
import { openArenas } from "../../../data/arenasData/data";
import { BasicInformationDate } from "..";

export default function ArenaDetails({
  formData,
  setFormData,
}: {
  formData: DBEventModel;
  setFormData: React.Dispatch<React.SetStateAction<DBEventModel>>;
}) {
  const {
    isArena,
    arena,
    arenaName,
    address_addressString,
    address_guidance,
    address_wazeLink,
  } = formData;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          ml: 1,
          "&:hover": {
            borderColor: "primary.main",
            cursor: "pointer",
          },
        }}
        onClick={() =>
          setFormData((prev) => ({
            ...prev,
            isArena: !prev.isArena,
            arena: !prev.isArena ? undefined : prev.arena,
          }))
        }
      >
        <Typography
          variant={isArena ? "subtitle1" : "subtitle1"}
          color={isArena ? "primary.main" : "text.secondary"}
        >
          {isArena
            ? "מתקיים בזירה ציבורית ומוכרת"
            : "האם אירוע מתקיים בזירה ציבורית ומוכרת?"}
        </Typography>

        <Switch checked={isArena} color="primary" />
      </Box>

      <Grid container spacing={1}>
        {isArena && (
          <Grid xs={12} md={6}>
            <CustomTextFieldLabel title="זירה" />

            <FormControl fullWidth>
              <Select
                value={arena?.name ?? ""}
                displayEmpty
                startAdornment={
                  <InputAdornment position="start">
                    <Stadium />
                  </InputAdornment>
                }
                onChange={(event) => {
                  const selectedArena = openArenas.find(
                    (arena) => arena.name === event.target.value
                  );

                  setFormData((prev) => ({
                    ...prev,
                    arena: selectedArena,
                    address_addressString:
                      selectedArena?.location?.addressString || "",
                    address_guidance: selectedArena?.location?.guidance || "",
                  }));
                }}
              >
                <MenuItem value="" disabled>
                  בחר זירה
                </MenuItem>
                {openArenas.map((arena) => (
                  <MenuItem key={arena.name} value={arena.name}>
                    {arena.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        )}

        <Grid xs={12} mt={3} mb={2}>
          <Box flexGrow={1} borderBottom={1} borderColor="divider" />
        </Grid>

        <Grid xs={12}>
          <CustomTextFieldLabel title="שם המקום" />

          <TextField
            fullWidth
            placeholder="הקלד שם המקום"
            value={isArena ? arena?.name ?? "" : arenaName}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                isArena: false,
                arena: undefined,
                arenaName: e.target.value,
              }))
            }
          />
        </Grid>

        <Grid xs={12}>
          <CustomTextFieldLabel title="כתובת מלאה" />

          <TextField
            fullWidth
            placeholder="הקלד כתובת מלאה"
            value={
              isArena ? arena?.location?.addressString : address_addressString
            }
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                isArena: false,
                arena: undefined,
                address_addressString: e.target.value,
              }))
            }
          />
        </Grid>

        <Grid xs={12}>
          <CustomTextFieldLabel title="תיאור דרכי הגעה" />

          <TextField
            multiline
            rows={2}
            fullWidth
            placeholder="הקלד תיאור דרכי הגעה, הנחיות מיוחדות והכוונה"
            value={isArena ? arena?.location?.guidance : address_guidance}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                isArena: false,
                address_guidance: e.target.value,
                arena: undefined,
              }))
            }
          />
        </Grid>

        <BasicInformationDate formData={formData} setFormData={setFormData} />

        <Grid xs={12} md={6}>
          <Box>
            <Typography variant="subtitle2" ml={"10px"}>
              קישור לwaze
            </Typography>

            <TextField
              type="text"
              fullWidth
              placeholder="הקלד קישור לwaze"
              value={address_wazeLink}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  address_wazeLink: e.target.value,
                }))
              }
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
