import React from "react";
import { Box, Heading, Image, Button } from "theme-ui";
import customer from "../../assets/images/customer.png";
import { rgba } from "polished";
import { useRouter } from "next/router";

function QandAPage() {
  const router = useRouter();
  const back = ">";

  return (
    <Box sx={{ pb: "5rem" }} dir="rtl">
      <Heading as="h1" sx={styles.heading}>
        הסיפור שלי
      </Heading>
      {router.pathname !== "/" && (
        <Button onClick={() => router.back()} sx={styles.buttonBack}>
          חזרה לעמוד הקודם {back}
        </Button>
      )}
      <Box sx={styles.bannerContent}>
        <Box sx={styles.text}>
          <p>
            <strong>נעים מאוד, </strong>
          </p>
          <p>
            שמי חן אלון, מעצבת ויוצרת אקססוריז ופריטים דקורטיביים לבית. מגיל
            צעיר הייתי מלאת תשוקה לעיצוב, אסתטיקה ואומנות. הרצון ליצור היה קיים
            בי מאז ומתמיד. בשנה האחרונה הקמתי את הסטודיו שלי שנקרא Concrete Shop
            שנותן ליצירתיות שלי מקום לפרוח.
          </p>
          <p>
            אם את אוהבת ייחודיות, עיצוב ואסתטיקה, אני בטוחה שזה המקום בשבילך.
            <br />
            אני מאמינה שהבית הוא המקום החשוב ביותר בחיינו ושהאווירה בו יכולה
            להשפיע עלינו בהרבה מישורים. לכן, ב-Concrete Shop אני מעצבת ויוצרת
            פרטי נוי ייחודים בהזמנה אישית לפי בקשתך במטרה להתאים את המוצר לבית
            שלך ולאווירה שתרצי ליצור בו. במותג שלי תמצאי פריטי נוי דקורטיביים,
            סוגים שונים של אקססוריז מבטון ונרות בשלל צורות וצבעים, לעיצוב הבית שלך או של
            האהובים עלייך.
            <br /> כל המוצרים בחנות נעשים בעבודת יד 100% ייצור כחול לבן עם הקפדה
            על הפרטים הקטנים.
          </p>

          <p>
            תודה שאתן אוהבות את מה שאני עושה.
            <br /> האנרגיות שאני מקבלת מתהליך הכנת המוצרים והפירגון מכן הוא הכוח
            שדוחף אותי להמשיך לגדול וליצור עבורכן עוד.
            <br />
          </p>

          {/* <p>
            <strong>אוהבת אותכן.</strong>
          </p> */}
        </Box>
        <Image loading="lazy" src={customer} alt="customer" />
      </Box>
    </Box>
  );
}

export default QandAPage;

const styles = {
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
      bg: "transparent",
    },
  },
  text: {
    fontSize: [15, 20],
    width: "50%",
    "@media only screen and (max-width: 900px) ": {
      width: "100%",
      pr: "1rem",
      pl: "1rem",
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
  bannerContent: {
    width: "100%",
    display: ["grid", null, null, null, "flex"],
    mt: "2rem",
    alignItems: "center",
    // border: `0.2px solid ${rgba("#de7c5a", 0.9)}`,
    p: "2rem",
    "@media only screen and (max-width: 760px)": {
      display: "inline-Block",
      padding: "80px 40px 80px 60px",
      p: "1rem",
    },
  },
};
