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

export default function RulesGridDomination() {
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
          Domination
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
              סרטי סימון או אמצעי סימון לקבוצות,שעון שחמט / שני סטופרים לכל
              נקודת שליטה
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
              בשטח המשחק יש נקודת שליטה אחת או יותר, מטרת הקבוצות היא להחזיק
              ולאבטח את נקודות השליטה.
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
                  יש לקבוע כמה זמן צריך להחזיק בנקודת השליטה כדי לנצח.
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
                >
                  -
                </Typography>
                <Typography variant="body2">
                  אפשר לקבוע זמן מוגדר מראש לסיבוב ולבדוק איזה קבוצה החזיקה
                  בנקודה יותר זמן, מצב זה יותר מתאים אם יש יותר מנקודת שליטה
                  אחת.
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
                >
                  -
                </Typography>
                <Typography variant="body2">
                  לכל קבוצה יש spawn מוגדר שלא ניתן לירות ממנו אל תוך נקודת
                  השליטה.
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
                >
                  -
                </Typography>
                <Typography variant="body2">
                  השחקנים נלחמים כלפי נקודת השליטה ומנסים לאבטח אותה, כאשר שחקן
                  מגיע אל הנקודה עליו להפעיל את השעון כדי שהזמן של הקבוצה שלו
                  יספר (במידה ומשתמשים בשני סטופרים צריך גם לעצור את הסטופר של
                  הקבוצה השניה כדי לעצור להם את ספירת הזמן).
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
                >
                  -
                </Typography>
                <Typography variant="body2">
                  במשחק מרובה נקודות שליטה, יסכמו הזמנים של הקבוצה מכל הנקודות.
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
                בשעון שחמט - הקבוצה שהגיעה לסוף הזמן מנצחת.
              </Typography>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
              >
                -
              </Typography>
              <Typography variant="body2">
                במצב שבו הזמן מוגדר מראש - סוכמים את הזמן שכל קבוצה החזיקה בכל
                נקודה.
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Paper>
    </Accordion>
  );
}
