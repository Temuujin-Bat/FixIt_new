import { useState } from "react";

// MUI
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from "@mui/material";

export default function TeamDeathmatch() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Accordion
      square={true}
      expanded={isExpanded}
      sx={{ borderRadius: "10px" }}
      onChange={() => setIsExpanded((prev) => !prev)}
    >
      <AccordionSummary
        sx={{
          height: { xs: "60px", sm: "70px", md: "80px", lg: "90px" },
          position: "relative",
          background:
            "linear-gradient(90deg, rgba(26, 188, 156, 1), rgba(13, 102, 85, 1))",
          padding: "20px",
          borderRadius: !isExpanded ? "10px" : "10px 10px 0px 0px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "common.white",
            textShadow: "2px 2px 8px rgba(1, 1, 1, 1)",
            position: "absolute",
            left: "30px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          Team Deathmatch
        </Typography>
      </AccordionSummary>

      <Paper
        elevation={10}
        sx={{
          borderRadius: "0px 0px 10px 10px",
        }}
      >
        <AccordionDetails>
          <Box display={"flex"}>
            <Typography variant="subtitle1">ציוד נדרש:&nbsp;</Typography>
            <Typography variant="body1">
              סרטי סימון או אמצעי סימון לקבוצות
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Typography variant="subtitle1">מספר שחקנים:&nbsp;</Typography>
            <Typography variant="body1">2 ומעלה</Typography>
          </Box>
          <Box display={"flex"}>
            <Typography variant="subtitle1">נקודות התחלה:&nbsp;</Typography>
            <Typography variant="body1">2 ומעלה</Typography>
          </Box>

          <Box mt={"15px"}>
            <Typography
              variant="h4"
              sx={{ textDecoration: "underline", color: "primary.darker" }}
            >
              תיאור המשחק
            </Typography>
            <Typography variant="body2">Deathmatch, אבל בקבוצות...</Typography>
          </Box>

          <Box mt={"5px"}>
            <Typography variant="subtitle1" color={"success.light"}>
              מהלך המשחק:
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
              >
                -
              </Typography>
              <Typography variant="body2">
                אין שינוי משמעותי מחוקי הDeathmatch מלבד העובדה שכאן ישנן קבוצות
                ולכן שני דברים מתעדכנים: היות ומדובר בקבוצות יש לסמן כל שחקן
                בצבע או אמצעי זיהוי קבוצתי, שיהיה גלוי ובמיקום אחיד לכל השחקנים.
              </Typography>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
              >
                -
              </Typography>
              <Typography variant="body2">
                בשל ריבוי קבוצות יש לבחור נקודת התחלה\spawn לכל קבוצה, באופן
                שנקודת התחלה אינה חשופה לאש (ירי לתוך או מתוך הspawn אינו חוקי)
              </Typography>
            </Box>
          </Box>

          <Box mt={"5px"}>
            <Typography variant="subtitle1" color={"success.light"}>
              תנאי ניצחון אפשריים:
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
              >
                -
              </Typography>
              <Typography variant="body2">
                במידה ויש respawn ניתן להגדיר למשחק מסגרת זמנים, ובסופה לספור
                הריגות (עניין של אמינות).
              </Typography>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
              >
                -
              </Typography>
              <Typography variant="body2">
                במידה ואין respawn או שישנו respawn מוגבל - האחרון שנשאר עומד
                הוא המנצח.
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Paper>
    </Accordion>
  );
}
