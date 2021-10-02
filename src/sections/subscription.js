/** @jsx jsx */
import { jsx, Box, Flex, Text, Container, Input, Button } from "theme-ui";
import { Link } from "components/link";
import facebook from "assets/images/icons/facebook.png";
import instagram from "assets/images/icons/instagram.png";
import whatsapp from "assets/images/icons/whatsapp.png";
import Feature from "components/cards/feature";

const data = {
  links: [
    {
      id: 1,
      icon: facebook,
      link: "https://www.facebook.com/Concrete-Shop-Israel-100319059077860/",
    },
    {
      id: 2,
      icon: instagram,
      link: "https://www.instagram.com/concrete_shop_israel/",
    },{
      id:3,
      icon: whatsapp,
      link: "#!"
    }
  ],
  navItems: [
    {
      id: 1,
      link: "#!",
      title: "אודות",
    },
    {
      id: 2,
      link: "#!",
      title: "תקנון",
    },
    {
      id: 3,
      link: "#!",
      title: "שאלות ותשובות",
    },
    {
      id: 4,
      link: "#!",
      title: "מדיניות משלוחים והחזרות",
    },
    {
      id: 5,
      link: "#!",
      title: "צור קשר",
    },
  ],
};
const Subscription = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Box sx={styles.featureWrapper}>
        {data?.links?.map((link) => (
          <a key={link.id} href={link.link} target="_blank" rel="noreferrer">
            <Feature data={link}></Feature>
          </a>
        ))}
      </Box>

      <Flex as="ul" sx={styles.nav} dir="rtl">
        {data?.navItems?.map((item) => (
          <li key={item.id}>
            <Link path={item.link}>{item.title}</Link>
          </li>
        ))}
      </Flex>
    </Box>
  );
};

export default Subscription;

const styles = {
  section: {
    backgroundColor: "#D5573B",
    pt: "3rem",
    pb: "3rem",
  },
  featureWrapper: {
    // gap: ["40px 20px", null, null, null, "30px"],
    // display: "grid",
    listStyle: "none",
    alignItems: "center",
    display: "flex",
    flexWrap: ["wrap", null, null, "unset"],
    justifyContent: ["center", null, null, null],
    a: {
      color: "white",
      display: "inline-flex",
    },
  },
  nav: {
    listStyle: "none",
    alignItems: "center",
    display: "flex",
    flexWrap: ["wrap", null, null, "unset"],
    justifyContent: ["center", null, null, null],
    mt: [5, null, null, null, 0],
    li: {
      margin: [3],

      "@media only screen and (max-width: 400px)": {
        mb: 4,
        display: "block",
      },
      a: {
        color: "white",
        display: "inline-flex",
        textAlign: "right",
        textDecoration: "none",
        "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ":
          {
            fontSize: "1.5rem",
          },
      },
    },
  },
};