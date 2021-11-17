/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Feature from "components/cards/feature";
import handmade from "assets/images/icons/handmade.png";
import roller from "assets/images/icons/roller.png";
import home from "assets/images/icons/home.png";

//⋐
const facts = [
  {
    id: 1,
    icon: handmade,
    title: "עבודת יד",
    description:
      "כל המוצרים מיוצרים בעבודת יד עשויים מבטון ייצור כחול לבן, מה שהופך כל פריט לבלעדי וייחודי באמת",
  },
  {
    id: 2,
    icon: roller,
    title: "ניתן להתאמה אישית",
    description: "כל המוצרים ניתנים להתאמה אישית כדי להתאים את הצבעים לבית שלך",
  },
  {
    id: 3,
    icon: home,
    title: "השלמת האווירה בבית",
    // description: "עסק קטן שמעצב ויוצר קישוטים יפים עבורך להשלמת הבית שלך",
    // description: "אביזרים משלימים שישדרגו כל חלק בבית",
    description:
      "עסק קטן שמעצב ויוצר אוסף של פריטים עיצוביים שיעניקו תחושה ייחודית של בית מעוצב ומושקע ויעזרו להשלמת האווירה בבית",
  },
];

const Clients = () => {
  return (
    <Box id="clients" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="מי אנחנו"
          title="כמה עובדות שיעשו לכם קצת סדר"
        />
        <Box sx={styles.featureWrapper} dir="rtl">
          {facts?.map((fact) => (
            <Feature key={fact.id} data={fact} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Clients;

const styles = {
  section: {
    pt: [50, 50, 50, 70, 60, 80],
    pb: [30, 40, 50, 60, 50, 80],
  },
  text: {
    display: "flex !important",
    justifyContent: "center",
  },
  featureWrapper: {
    textAlign: "center",
    gap: ["40px 20px", null, null, null, "30px"],
    display: "grid",
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      null,
      "repeat(3,180px)",
      "repeat(3,1fr)",
    ],
    justifyContent: ["unset", null, null, "center", "flex-end"],
  },
};
