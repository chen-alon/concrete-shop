/** @jsx jsx */
import { jsx, Box, Container, Flex } from "theme-ui";
import SectionHeading from "components/section-heading";
import Feature from "components/cards/feature";
import { rgba } from "polished";
import mail from "../assets/images/icons/icon-mail.svg";
import whatsapp from "../assets/images/icons/icon-whatsapp.svg";
import phone from "../assets/images/icons/icon-phone.svg";
import instagram from "../assets/images/icons/icon-instagram.svg";

const OurCustomer = () => {
  const desc =
    "הצוות שלנו כאן בשבילך לכל שאלה או בקשה.\nישנם דרכים שונות ליצור איתנו איתנו קשר.\nבחרו את אחת האפשרויות הבאות:";

  const data = {
    contact: [
      {
        id: 1,
        icon: whatsapp,
        link: "whatsapp://send?phone=+972526020358",
        description: "ווטסאפ",
      },
      {
        id: 2,
        icon: mail,
        link: "mailto:concrete.and.more0609@gmail.com",
        description: "מייל",
      },

      {
        id: 3,
        icon: phone,
        link: "tel:+972526020358",
        description: "טלפון",
      },
      {
        id: 4,
        icon: instagram,
        link: "https://www.instagram.com/concrete_shop_il/",
        description: "אינסטגרם",
      },
    ],
  };

  return (
    <Box id="contact" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          // slogan="צור קשר"
          title="מחפשים אותנו או צריכים עזרה?"
          dir="rtl"
        />
        <Flex sx={styles.contentWrapper} dir="rtl">
          <SectionHeading sx={styles.heading} description={desc} />
          <Box sx={styles.featureWrapper}>
            {data?.contact?.map((link) => (
              <Box sx={styles.icon} key={link.id}>
                <a href={link.link} target="_blank" rel="noreferrer">
                  <Feature data={link}></Feature>
                </a>
              </Box>
            ))}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default OurCustomer;

const styles = {
  section: {
    pt: [30, null, null, null, 60],
    pb: [30, null, null, 50, 60],
    backgroundColor: rgba("#000", 0.1),
  },
  contentWrapper: {
    textAlign: "center",
    justifyContent: "center",
    display: "grid",
  },
  heading: {
    p: {
      whiteSpace: "pre-wrap",
      fontSize: ["18px", null, null, "22px"],
      textAlign: "center",
    },
  },
  featureWrapper: {
    display: "flex",
    m: 0,
    flexWrap: ["wrap", null, null, "unset"],
    justifyContent: ["center"],
    a: {
      textDecoration: "none",
      color: "#de7c5a",
      pr: "2rem",
      pl: "2rem",
      display: "inline-block",
      "@media only screen and (max-width: 400px)": {
        p: "1rem",
      },
    },
  },
  icon: {
    pt: "1rem",
    flexDirection: "row",
    textAlign: "center",
    "@media only screen and (max-width: 490px)": {
      p: "1.8rem",
    },
  },
};
