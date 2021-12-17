import { useRouter } from "next/router";
import React from "react";
import FAQ from "../../components/FAQ/FAQ";
import { Box, Heading, Button } from "theme-ui";
import { rgba } from "polished";

function QandAPage() {
  const router = useRouter();
  const back = ">";

  const data = {
    product: [
      {
        question: "מזה קונקריט שופ?",
        answer:
          "אנחנו חנות מקוונת שמוכרת פרטי נוי ואקססוריז בעבודת יד. אנחנו המקום המושלם לפרטי נוי ייחודים ומתנות מקוריות בשיא הסטייל!",
        open: true,
        id: "1",
      },
      {
        question: "ממה המוצרים שלכם עשויים?",
        answer:
          "כל המוצרים בחנות עשויים מתערובות בטון שונות. אנו משתמשים בחומרי הגלם האיכותיים ביותר. בחרנו בבטון בגלל חוזקו מצד אחד, והמראה הייחודי והאסתטי מצד שני.",
        open: false,
        id: "2",
      },
      {
        question: "למה למוצר שלי יש בועות אויר?",
        answer:
          "בתהליך יצירת תערובת הבטון ויציקתה, נלכד אוויר. בעקבות כך נוצרות בועות אוויר בתוך הבטון, מה שנותן את הטקסטורה הייחודית שאנחנו כל כך אוהבים.",
        open: false,
        id: "3",
      },
      {
        question: "מדוע הצבע או הדוגמה יכולים להיות שונים?",
        answer:
          "כל המוצרים מיוצרים בעבודת יד ובשל אופי החומר עשויים להתרחש שינויים קלים בגוונים ובטקסטורות בין מוצר למוצר. זה הוא היתרון בעבודת יד, כל מוצר הוא ייחודי ואינו דומה לאחר.",
        open: false,
        id: "4",
      },
      {
        question: "איך עליי לטפל במוצר שלי?",
        answer:
          "הפריט אטום וניתן לניקוי עם מטלית לחה או מגבון. שימוש בכל מוצרי ניקוי קשים או קרצוף קשה, יפגע במוצר. אנו ממליצים לנגב כל נוזל כמו יין או קפה בהקדם האפשרי.",
        open: false,
        id: "5",
      },
      {
        question: "האם המוצרים מתאימים לשימוש במדיח כלים או במיקרוגל?",
        answer: "לא.",
        open: false,
        id: "6",
      },
      {
        question: "האם המוצר עמיד במים?",
        answer: "כן, כל המוצרים שלנו מצופים בשכבת הגנה מפני מים.",
        open: false,
        id: "7",
      },
    ],
    deliveries: [
      {
        question: "האם ניתן לבצע הזמנות מותאמות אישית?",
        answer:
          "כמובן! אם את רואה משהו שאת אוהבת אבל מעדיפה אותו בצבע מותאם אישית שיתאים יותר לסטייל שלך, אנחנו יותר מנשמח לנסות ולעשות אותו בשבילך. צרי איתנו קשר באחת האפשרויות הקיימות ושתפי אותנו ברעיון שלך. הזמנות אישיות אינן נכללות בהנחות ו/או מבצעים. ",
        open: false,
        id: "1",
      },
      {
        question: "האם ניתן לבצע הזמנות גדולות?",
        answer:
          "בטח! אנחנו מקבלים הזמנות גדולות. ייתכן שזמני האספקה יתארכו בהתאם לכמויות.",
        open: false,
        id: "2",
      },
      {
        question: "מה הן עלויות המשלוח?",
        answer:
          "עלויות המשלוח משתנות מעיר לעיר. ניתן לבחור באיסוף עצמי ללא עלות מהסטודיו במרכז הארץ.",
        open: false,
        id: "3",
      },
      {
        question: "איך מקבלים משלוח חינם?",
        answer:
          "בקניה מעל 250₪ ניתן לקבל משלוח ללא עלות. מבצע זה עלול להשתנות או להיפסק בכל עת.",
        open: false,
        id: "4",
      },
      {
        question: "מתי אקבל את ההזמנה שלי?",
        answer:
          "המוצר מיוצר לפי הזמנה וזמן אספקת המוצרים הוא עד 10 ימי עסקים. אם את צריכה את ההזמנה בדחיפות אנא צרי איתנו קשר ונעשה הכל כדי לעזור לך.",
        open: false,
        id: "5",
      },
      {
        question: "איך אני יכולה לשנות את ההזמנה שלי?",
        answer:
          "אם את רוצה לבצע שינויים בהזמנה קיימת שלך זה אפשרי כל עוד המוצר עוד לא הוכן. צרי איתנו קשר כמה שיותר מהר.",
        open: false,
        id: "6",
      },
    ],
  };

  return (
    <Box sx={styles.qanda} dir="rtl">
      <Heading as="h1" sx={styles.heading}>
        שאלות נפוצות
      </Heading>
      {router.pathname !== "/" && (
        <Button onClick={() => router.back()} sx={styles.buttonBack}>
          לעמוד הקודם {back}
        </Button>
      )}
      <p style={styles.title}>כללי</p>
      <FAQ data={data?.product} />
      <p style={styles.title}>הזמנות ומשלוחים</p>
      <FAQ data={data?.deliveries} />
    </Box>
  );
}

export default QandAPage;

const styles = {
  qanda: {
    mb: "5rem",
  },
  buttonBack: {
    float: "left",
    bg: "transparent",
    color: "#141414",
    fontSize: [15, 20],
    borderRadius: 0,
    fontWeight: "bold",
    ":hover": {
      bg: "transparent",
    },
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    mt: "7rem",
    bg: rgba("#6A7B76", 0.6),
    p: "5rem",
    "@media only screen and (max-width: 760px)": {
      mt: 0,
      pr: "1.5rem",
    },
  },
  title: {
    paddingRight: "10%",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 0,
  },
};
