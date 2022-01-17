import React from "react";
import { Box, Image, Container } from "theme-ui";
import customer from "../../assets/images/customer.png";
import SectionHeading from "components/section-heading";

function About() {
  return (
    <Box id="about" sx={styles.section} dir="rtl">
      <Container>
        <SectionHeading sx={styles.heading} slogan="אודות" title="הסיפור שלי" />
        <Box sx={styles.bannerContent}>
          <Box sx={styles.text}>
            <p>
              נעים מאוד! שמי חן אלון, מעצבת ויוצרת אקססוריז ופריטים דקורטיביים
              לבית. מגיל צעיר הייתי מלאת תשוקה לעיצוב, אסתטיקה ואומנות. הרצון
              ליצור היה קיים בי מאז ומתמיד. בשנה האחרונה הקמתי את הסטודיו שלי
              שנקרא Concrete Shop שנותן ליצירתיות שלי מקום לפרוח.
            </p>
            <p>
              אני מאמינה שהבית הוא המקום החשוב ביותר בחיינו ושהאווירה בו יכולה
              להשפיע עלינו בהרבה מישורים. לכן, ב-Concrete Shop אני מעצבת ויוצרת
              פרטי נוי ייחודים בהזמנה אישית לפי בקשתכם במטרה להתאים את המוצר
              לבית שלכם ולאווירה שתרצו ליצור בו. במותג שלי תמצאו סוגים שונים של
              אקססוריז מבטון ונרות בשלל צורות וצבעים, מתנות לכם ולאהובים שלכם,
              לעיצוב חלל הבית, המשרד ועוד.
              <br /> כל המוצרים בחנות נעשים בעבודת יד 100% ייצור כחול לבן עם
              הקפדה על הפרטים הקטנים.
            </p>
            <p>
              <strong>
                תודה שאתם אוהבים את מה שאני עושה.
                <br /> האנרגיות שאני מקבלת מתהליך הכנת המוצרים והפירגון מכם הוא
                הכוח שדוחף אותי להמשיך לגדול וליצור עבורכם עוד ❤️
                <br />
              </strong>
            </p>
          </Box>
          <Image loading="lazy" src={customer} alt="customer" />
        </Box>
      </Container>
    </Box>
  );
}

export default About;

const styles = {
  section: {
    pt: 30,
    pb: [30, null, null, 50, 60],
  },
  heading: {
    mb: [30, 30, 40, 60],
    textAlign: "center",
  },
  bannerContent: {
    width: "100%",
    display: ["grid", null, null, null, "flex"],
    alignItems: "center",
    "@media only screen and (max-width: 760px)": {
      display: "inline-Block",
    },
  },
  text: {
    fontSize: ["17px", null, null, "20px"],
    width: "60%",
    lineHeight: [1.6, null, null, 1.41],
    "@media only screen and (max-width: 900px) ": {
      width: "100%",
      pr: "1rem",
      pl: "1rem",
      textAlign: "center",
    },
  },
};
