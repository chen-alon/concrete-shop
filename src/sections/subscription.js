/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui";
import Link from "next/link";
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
      link: "https://www.instagram.com/concrete_shop_decor/",
    },
    {
      id: 3,
      icon: whatsapp,
      link: "https://api.whatsapp.com/send?phone=+972526020358",
      // link: "whatsapp://send?phone=+972526020358",
    },
  ],
  navItems: [
    // {
    //   id: 1,
    //   link: "about",
    //   title: "הסיפור שלי",
    // },
    {
      id: 2,
      link: "policy",
      title: "מדיניות ביטולים והחזרות",
    },
    {
      id: 3,
      link: "qanda",
      title: "שאלות נפוצות",
    },
    // {
    //   id: 4,
    //   link: "#!",
    //   title: "תקנון",
    // },

    // {
    //   id: 5,
    //   link: "#!",
    //   title: "צור קשר",
    // },
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
            <Link href={`/${item?.link}`}>{item.title}</Link>
          </li>
        ))}
      </Flex>
    </Box>
  );
};

export default Subscription;

const styles = {
  section: {
    backgroundColor: "#141414",
    pt: "3rem",
  },
  featureWrapper: {
    listStyle: "none",
    alignItems: "center",
    display: "flex",
    flexWrap: ["wrap", null, null, "unset"],
    justifyContent: ["center"],
    a: {
      color: "white",
      display: "inline-flex",
      padding: "2rem",
      "@media only screen and (max-width: 400px)": {
        padding: "0.5rem",
      },
    },
  },
  nav: {
    pr: "40px",
    pl: "40px",
    listStyle: "none",
    flexDiraction: "row",
    alignItems: "center",
    display: "flex",
    flexWrap: ["wrap", null, null, "unset"],
    justifyContent: "center",
    mt: [2, null, null, null, 0],
    li: {
      padding: "0.8rem",
      "@media only screen and (max-width: 400px)": {
        display: "block",
      },
      a: {
        color: "white",
        justifyContent: "center",
        textDecoration: "none",
      },
    },
  },
};
