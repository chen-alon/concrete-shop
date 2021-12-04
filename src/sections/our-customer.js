/** @jsx jsx */
import { jsx, Box, Container, Flex, Image } from "theme-ui";
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
        text: "ווטסאפ",
      },
      {
        id: 2,
        icon: mail,
        link: "mailto:concrete.and.more0609@gmail.com",
        text: "מייל",
      },

      {
        id: 3,
        icon: phone,
        link: "tel:+972526020358",
        text: "טלפון",
      },
      {
        id: 4,
        icon: instagram,
        link: "https://www.instagram.com/concrete_shop_il/",
        text: "אינסטגרם",
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
              <Box sx={styles.icon}>
                <a
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Feature data={link}></Feature>
                </a>
                <span sx={styles.linkText}>{link.text}</span>
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
    boxShadow: [
      "0px 10px 16px rgba(52, 61, 72, 0.12)",
      null,
      null,
      null,
      "none",
    ],
    // background: `url(${bannerBg}) no-repeat center top / cover`,
    // backgroundSize: ["100%", null, null, null, "cover"],
  },
  contentWrapper: {
    textAlign: "center",
    justifyContent: "center",
    display: "grid",
  },
  heading: {
    textAlign: ["right", null, null, null, "right"],
    maxWidth: 580,
    p: {
      whiteSpace: "pre-wrap",
      fontSize: ["18px", null, null, "22px"],
      textAlign: "center",
    },
    // m: ["0 auto 27px", "0 auto 27px", "0 auto 27px", "0 0 30px"],
  },
  featureWrapper: {
    listStyle: "none",
    alignItems: "center",
    display: "flex",
    flexWrap: ["wrap", null, null, "unset"],
    justifyContent: ["center"],
    a: {
      color: "white",
      pr: "2rem",
      pl: "2rem",
      display: "inline-block",
      "@media only screen and (max-width: 400px)": {
        padding: "0.5rem",
      },
    },
  },
  icon: {
    flexDirection: "row",
    textAlign: "center",
    gap: ["40px 20px", null, null, null, "30px"],
    display: "grid",
    // gridTemplateColumns: [
    //   "repeat(1,1fr)",
    //   null,
    //   null,
    //   "repeat(2,180px)",
    //   "repeat(2,1fr)",
    // ],
    // justifyContent: ["unset", null, null, "center", "flex-end"],
  },
  linkText: {
    mt: 0,
    display: "inline-block",
    // fontWeight: "bold",
    fontSize: [15, 20],
    color: "#de7c5a",
  },
};
