import { useState } from "react";

// MUI
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export default function RulesGridBreach() {
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
          Breach
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
              סרטי סימון או אמצעי סימון לקבוצות, מתחם סגור\שטח בנוי, קופסא או
              חפץ אחר ברור אחר בגודל בינוני כדי לדמות אובייקט
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
              במשחק זה ישנו צד אחד ש"מתבצר" וצד אחד ש"פורץ" ומטרתו לחדור למתחם
              ולחלץ ממנו חפץ מסויים.
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
                  במשחקים מסוג זה נהוג לתת רק לצד הפורץ כמות מסויימת של respawn
                  על מנת לאזן את היתרון שיש לצד המתבצר, יש להגדיר לפני תחילת
                  המשחק כמה respawn יש לכל קבוצה, ומהו משך הזמן המקסימלי של
                  המשחק.
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
                >
                  -
                </Typography>
                <Typography variant="body2">
                  הצד המתבצר יכנס לזירה 3-5 דקות לפני הצד הפורץ, ויערוך את
                  כוחותיו להגנה.
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
                >
                  -
                </Typography>
                <Typography variant="body2">
                  הצד הפורץ יכנס לזירה לאחר התבצרות הקבוצה היריבה וינסה לחדור את
                  המתחם.
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
                >
                  -
                </Typography>
                <Typography variant="body2">
                  בדר"כ ישנו אובייקט ברור שמוסכם על כולם, והוא הobjective
                  לפריצה, מטרת הקבוצה הפורצת לחדור למתחם ולחלץ ממנו את
                  הobjective וזה בעדיפות על להרוג את כל שחקני הקבוצה היריבה.
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
                >
                  -
                </Typography>
                <Typography variant="body2">
                  בתום הסיבוב הקבוצות מתחלפות בתפקיד וקבוצה שפרצה במהירות גבוהה
                  יותר מקבלת ניקוד גבוה יותר.
                </Typography>
              </Box>
            </Box>

            <Box mt={"5px"}>
              <Typography variant="subtitle1" color={"success.light"}>
                תנאי ניצחון אפשריים:
              </Typography>

              <Box>
                <Typography variant="subtitle2" color={"gray.dark"}>
                  1. קבוצה מתבצרת:
                </Typography>
                <Stack mr={"10px"}>
                  <Typography variant="body2">
                    - כל הלוחמים בקבוצה הפורצת מתים.
                  </Typography>
                  <Typography variant="body2">
                    - נגמר הזמן המקסימלי לסיבוב והobjective עוד לא חולץ מהמתחם.
                  </Typography>
                </Stack>
              </Box>

              <Box>
                <Typography variant="subtitle2" color={"gray.dark"}>
                  2. קבוצה פורצת:
                </Typography>
                <Stack mr={"10px"}>
                  <Typography variant="body2">
                    - כל הלוחמים בקבוצה המתבצרת מתים.
                  </Typography>
                  <Typography variant="body2">
                    - הobjective חולץ מהמתחם בהצלחה.
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Paper>
    </Accordion>
  );
}
