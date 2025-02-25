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

export default function RulesGridCaptureTheFlag() {
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
          Capture The Flag
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
              סרטי סימון או אמצעי סימון לקבוצות, שני דגלים, אחד לכל קבוצה.
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
              תיאור המשחק:
            </Typography>

            <Typography variant="body2">
              לכל קבוצה יש "בסיס" ובו נמצא הדגל שלה במקום גלוי ונגיש, מטרת המשחק
              היא לגנוב את הדגל של הקבוצה היריבה ולהביא אותו לרחבת הדגל שבבסיס
              הקבוצתי.
            </Typography>

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
                  לפני תחילת המשחק יש לבחור האם שחקן מת חוזר למשחק או לא
                  (respawn), ובמידה וכן - האם יש הגבלה על כמות הrespawn ומהי.
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
                >
                  -
                </Typography>
                <Typography variant="body2">
                  כמו"כ רצוי לבחור כמה סיבובים משחקים או כמה נקודות מזכות קבוצה
                  בניצחון.
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
                >
                  -
                </Typography>
                <Typography variant="body2">
                  לכל קבוצה יש בסיס והוא גם נקודת ההתחלה והspawn שלה, שחקנים
                  יוצאים מהבסיס הקבוצתי וחודרים לבסיס האויב על מנת לקחת את דגלו
                  אליהם.
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
                >
                  -
                </Typography>
                <Typography variant="body2">
                  שחקן אינו רשאי לגעת בדגל של הקבוצה שלו או להזיזו מהבסיס, אלא
                  אם למטרת החזרתו לבסיס בדרך המהירה ביותר, כלומר, אסור לשחק עם
                  הדגל ביד על מנת למנוע מהקבוצה היריבה לגנוב אותו!
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
                >
                  -
                </Typography>
                <Typography variant="body2">
                  הקבוצה זוכה בנקודה\בסיבוב כאשר היא מביאה את דגל היריב אליה
                  לבסיס רק אם הדגל שלה נמצא במקומו בבסיס - לא ניתן לצבור נקודות
                  אם הדגל הקבוצתי לא במקומו או אצל היריב! במשחק מרובה נקודות,
                  לאחר קבלת נקודה - מחזירים את הדגלים ומתחילים סיבוב חדש.
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
                >
                  -
                </Typography>
                <Typography variant="body2">
                  שחקן שנפגע בזמן שהוא מחזיק דגל - משאיר את הדגל במקום שבו הוא
                  נפגע באופן גלוי וברור, והולך לבסיס הקבוצתי או לנקודת הspawn
                  המוסכמת.
                </Typography>
              </Box>
            </Box>

            <Box mt={"5px"}>
              <Typography variant="subtitle1" color={"success.light"}>
                תנאי ניצחון אפשריים:
              </Typography>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
              >
                -
              </Typography>
              <Typography variant="body2">
                הקבוצה שצברה כמות נקודות המזכה בניצחון כפי שסוכם לפני המשחק -
                מנצחת.
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Paper>
    </Accordion>
  );
}
