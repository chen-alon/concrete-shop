/** @jsx jsx */
import { jsx, Box, Container, Flex } from "theme-ui";
import SectionHeading from "components/section-heading";
import Feature from "components/cards/feature";
import { rgba } from "polished";
import mail from "../assets/images/icons/icon-mail.png";
import whatsapp from "../assets/images/icons/icon-whatsapp.png";
import phone from "../assets/images/icons/icon-phone.png";
import instagram from "../assets/images/icons/icon-instagram.svg";

const OurCustomer = () => {
  const desc =
    "הצוות שלנו כאן בשבילכם לכל שאלה או בקשה.\nישנן מספר דרכים ליצור איתנו איתנו קשר.\nבחרו את אחת האפשרויות הבאות:";

  const data = {
    contact: [
      {
        id: 1,
        icon: whatsapp,
        link: "https://api.whatsapp.com/send?phone=+972526020358",
      },
      {
        id: 2,
        icon: mail,
        link: "mailto:concrete.and.more0609@gmail.com",
      },

      {
        id: 3,
        icon: phone,
        link: "tel:+972526020358",
      },
      {
        id: 4,
        icon: instagram,
        link: "https://www.instagram.com/concrete_shop_il/",
      },
    ],
  };

  return (
    <Box id="contact" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="צור קשר"
          title="מחפשים אותנו או צריכים עזרה?"
          dir="rtl"
        />
        <Flex sx={styles.contentWrapper} dir="rtl">
          <SectionHeading sx={styles.heading} description={desc} />
          <Box sx={styles.featureWrapper}>
            {data?.contact?.map((link) => (
              <Box key={link.id}>
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
    flexDirection: "row",
    m: 0,
    // flexWrap: ["wrap", null, null, "unset"],
    justifyContent: ["center"],
    a: {
      textDecoration: "none",
      color: "#6A7B76",
      pr: "1rem",
      pl: "1rem",
      display: "inline-block",
      "@media only screen and (max-width: 500px)": {
        pr: "0.5rem",
        pl: "0.5rem",
      },
    },
  },
};
