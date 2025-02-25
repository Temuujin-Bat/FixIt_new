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

export default function VIP() {
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
          VIP
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
              סרטי סימון או אמצעי סימון לקבוצות, אפוד זוהר\אמצעי סימון בולט -
              לשחקן אחד שהוא הVIP.
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Typography variant="subtitle1">מספר שחקנים:&nbsp;</Typography>
            <Typography variant="body1">3 ומעלה</Typography>
          </Box>
          <Box display={"flex"}>
            <Typography variant="subtitle1">נקודות התחלה:&nbsp;</Typography>
            <Typography variant="body1">בדרך כלל לא</Typography>
          </Box>

          <Box mt={"15px"}>
            <Typography
              variant="h4"
              sx={{ textDecoration: "underline", color: "primary.darker" }}
            >
              תיאור המשחק:
            </Typography>

            <Typography variant="body2">
              מטרת המשחק לאבטח תנועה של VIP לאורך הזירה, על הקבוצה היריבה להרוג
              את הVIP על מנת לנצח במשחק.
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
                  במשחקים מסוג זה בדר"כ אין respawn
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
                >
                  -
                </Typography>
                <Typography variant="body2">
                  ניתן להחליט על מסלול ידוע מראש שמחייב מעבר במספר נקודות בזירה.
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
                >
                  -
                </Typography>
                <Typography variant="body2">
                  לשחקן הVIP בדר"כ יש כלי קצר חצי אוטומטי בלבד, הוא אינו חלק
                  מכוח האבטחה.
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
                >
                  -
                </Typography>
                <Typography variant="body2">
                  הקבוצה המחסלת נכנסת לזירה 3-5 דק לפני הקבוצה המאבטחת, בדומה
                  למשחקי Breach.
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ ml: "5px", fontWeight: "bold", color: "success.light" }}
                >
                  -
                </Typography>
                <Typography variant="body2">
                  הקבוצה המאבטחת נכנסת לזירה ומתחילה לנוע אל עבר נקודת היעד.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box mt={"5px"}>
            <Typography variant="subtitle1" color={"success.light"}>
              תנאי ניצחון אפשריים:
            </Typography>

            <Box>
              <Typography variant="subtitle2" color={"gray.dark"}>
                1. קבוצה מחסלת:
              </Typography>
              <Typography mr={"10px"} variant="body2">
                - חיסול של שחקן הVIP
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2" color={"gray.dark"}>
                2. קבוצה מאבטחת:
              </Typography>
              <Typography mr={"10px"} variant="body2">
                - הגעה לנקודת היעד הסופית עם הVIP בחיים.
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Paper>
    </Accordion>
  );
}
