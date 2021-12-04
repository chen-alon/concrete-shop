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
    title: "התאמה אישית",
    description:
      "ניתן לבחור את הצבע או שילוב צבעים עבור כל מוצר שיתאימו בדיוק לבית שלך ולאווירה שאת רוצה ליצור בו",
  },
  {
    id: 3,
    icon: home,
    title: "השלמת האווירה בבית",
    description:
      "עסק קטן שמעצב ויוצר פרטי נוי בקפידה שיעניקו תחושה ייחודית של בית מעוצב ומושקע ויעזרו להשלמת האווירה בבית",
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
    pt: [30, null, null, null, 60],
    pb: [30, null, null, 50, 60],
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
