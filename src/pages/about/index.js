import React from "react";
import { Box, Heading, Image, Button } from "theme-ui";
import customer from "../../assets/images/customer.png";

import { rgba } from "polished";

import { useRouter } from "next/router";

function QandAPage() {
  const router = useRouter();

  return (
    <Box sx={{ pb: "5rem" }} dir="rtl">
      <Heading as="h1" sx={styles.headingWrapper}>
        קצת עלינו...
      </Heading>
      {router.pathname !== "/" && (
        <Button onClick={() => router.back()} sx={styles.buttonBack}>
          חזרה לעמוד הקודם
        </Button>
      )}
      <Box sx={styles.bannerContent}>
        <Box sx={{ fontSize: [15, 20] }}>
          <p>
            <strong>נעים להכיר,</strong> <br />
            אנחנו חן ומתן בני זוג עם תשוקה משותפת ליצירה, אסתטיקה ואומנות. הרצון
            ליצור היה קיים בנו מאז ומתמיד.
          </p>
          <p>
            אם אתם אוהבים ייחודיות, עיצוב ואסתטיקה, אנחנו בטוחים שזה המקום
            בשבילכם.
          </p>
          <p>
            אנחנו מאמינים שהבית הוא המקום החשוב ביותר בחיינו ושהאווירה בו יכולה
            להשפיע עלינו בהרבה מישורים.
            <br />
            לכן הקמנו סטודיו קטן בישראל שמעצב ויוצר פריטים להשלמת האווירה בבית
            שלך. <br />
            המותג שלנו מציע פריטים ייחודים לעיצוב הבית שלכם או של האהובים שלכם.
            <br /> כל המוצרים שלנו עשויים מבטון בעבודת יד עם הקפדה על הפרטים
            הקטנים.
          </p>

          <p>
            האנרגיות שאנו מקבלים מתהליך הכנת המוצרים והפירגון מכם הוא הכוח שדוחף
            אותנו להמשיך לגדול וליצור עבורכם עוד.
            <br />
            תודה רבה לכם על התמיכה בעסקים קטנים.
          </p>

          <p>
            <strong>אוהבים</strong>
          </p>
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
      backgroundColor: "transparent",
    },
  },
  headingWrapper: {
    fontFamily: "Calibri Light",
    fontSize: 40,
    fontWeight: "bold",
    mt: "7rem",
    backgroundColor: rgba("#de7c5a", 0.6),
    p: "5rem",
    "@media only screen and (max-width: 760px)": {
      mt: 0,
    },
  },
  bannerContent: {
    width: "100%",
    display: ["grid", null, null, null, "flex"],
    mt: "2rem",
    alignItems: "center",
    border: `0.2px solid ${rgba("#de7c5a", 0.9)}`,
    p: "2rem",
    "@media only screen and (max-width: 760px)": {
      display: "inline-Block",
      mt: 70,
      padding: "80px 40px 80px 60px",
      // p: "0.6rem",
    },
  },
};
