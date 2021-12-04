import React from "react";
import { Box, Heading, Button } from "theme-ui";
import { rgba } from "polished";
import { useRouter } from "next/router";

function Policy() {
  const router = useRouter();
  const back = ">";

  return (
    <Box dir="rtl" sx={styles.policy}>
      <Heading as="h1" sx={styles.heading}>
        מדיניות ביטולים והחזרות
      </Heading>
      {router.pathname !== "/" && (
        <Button onClick={() => router.back()} sx={styles.buttonBack}>
          חזרה לעמוד הקודם {back}
        </Button>
      )}
      <Box sx={styles.text}>
        <p>
          <strong>
            בהתאם לתקנות הגנת הצרכן (ביטול עסקה) להלן: תקנות הגנת הצרכן, רשאי
            לקוח לבטל עסקת רכישה שהתבצעה מחברת Concrete-Shop במקרים הבאים:
          </strong>
        </p>
        <ul>
          <li>בקשת ביטול העסקה בוצעה בתוך 14 ימים ממועד אספקת ההזמנה.</li>
          <li>ערך המוצר הנרכש עולה על 50₪.</li>
          <li>המוצר לא נפגם והרוכש לא עשה בו כל שימוש.</li>
          <li>
            המוצר הוחזר באריזתו המקורית על ידי הלקוח (ועל חשבונו בלבד), לסטודיו
            Concrete-Shop ברמת גן, הראשונים 19.
          </li>
        </ul>
        <p>
          <strong>
            במקרים אלו, תבוטל העסקה והלקוח יחוייב ב דמי ביטול העסקה בשיעור 5%
            ממחיר המוצר, ועד 100₪ הנמוך מבין השניים.
          </strong>
        </p>
        <p>
          <strong>
            לא יוחזרו תשלומים בגין הובלה, סבלות, תשלום שנגבה בהתאם למיקום
            גיאוגרפי, ותשלומים נוספים כיוצ"ב.
          </strong>
        </p>
      </Box>
    </Box>
  );
}

export default Policy;

const styles = {
  policy: {
    mb: "5rem",
  },
  buttonBack: {
    float: "left",
    bg: "transparent",
    color: "#141414",
    fontSize: "1.5rem",
    borderRadius: 0,
    fontWeight: "bold",
    "@media only screen and (max-width: 900px) ": {
      fontSize: "1.3rem",
    },
    ":hover": {
      backgroundColor: "transparent",
    },
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    mt: "7rem",
    backgroundColor: rgba("#de7c5a", 0.6),
    p: "5rem",
    "@media only screen and (max-width: 760px)": {
      mt: 0,
      pr: "1.5rem",
    },
  },
  text: { fontSize: [20, 25], pr: "5%", pl: "4%", mt: "7rem" },
};
