import {Box, Stack, Typography} from "@mui/material";

const GameTypes = [
  {
    id: 0,
    value: `panel1`,
    heading: 'Deathmatch / Battle Royale',
    detail: (
      <Stack spacing={2}>
        <Box display={"flex"}>
          <Typography variant="subtitle1">ציוד נדרש:&nbsp;</Typography>
          <Typography variant="body1">אין</Typography>
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
          <Typography variant="body2">
            בעברית פשוטה - "כולם על כולם וכל אחד לעצמו", במשחק זה כל שחקן הוא
            זאב בודד, ונלחם כנגד כל שאר השחקנים האחרים עד לסוף הזמן שהוגדר
            למשחק.
          </Typography>
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
              כל השחקנים נכנסים לזירה (ביחד או לחוד) ולאחר זמן התארגנות קצרצר
              של דקה-שתיים מתחיל המשחק.
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
      </Stack>
    )
  },
  {
    id: 1,
    value: `panel2`,
    heading: 'Team Deathmatch',
    detail: (
      <Stack spacing={2}>
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
      </Stack>
    )
  },
  {
    id: 2,
    value: `panel3`,
    heading: 'Breach',
    detail: (
      <Stack spacing={2}>
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
      </Stack>
    )
  },
  {
    id: 3,
    value: `panel4`,
    heading: 'VIP',
    detail: (
      <Stack spacing={2}>
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
      </Stack>
    )
  },
  {
    id: 4,
    value: `panel5`,
    heading: 'Capture the Flag',
    detail: (
      <Stack spacing={2}>
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
      </Stack>
    )
  },
  {
    id: 5,
    value: `panel6`,
    heading: 'Domination',
    detail: (
      <Stack spacing={2}>
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
      </Stack>
    )
  }
]

export {
  GameTypes
}
