/** @jsx jsx */
import { jsx, Box, Container, MenuButton, Flex, Button, Text } from "theme-ui";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { rgba } from "polished";
import Sticky from "react-stickynode";
import Logo from "components/logo";
import { NavLink } from "components/link";
import menuItems from "./header.data";
import productMenuItems from "../productpages/header.data";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  const router = useRouter();

  const navigationBar = menuItems.map(({ path, label }, i) => (
    <li key={i}>
      <NavLink path={path} label={label} onClick={closeMobileMenu} />
    </li>
  ));

  const navigationBarNotMain = productMenuItems.map(({ path, label }, i) => (
    <li key={i}>
      <Link href={`/${path}`}>
        <a onClick={closeMobileMenu}>{label}</a>
      </Link>
    </li>
  ));

  const currentPageNavigationLabels =
    Object.keys(router.query).length === 0
      ? navigationBar
      : navigationBarNotMain;

  return (
    <Box sx={styles.headerWrapper}>
      <Box as="footer" sx={styles.top}>
        <Flex sx={styles.copyright}>
          <Text as="span">משלוחים חינם ברכישה מעל 250₪</Text>
        </Flex>
      </Box>
      <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={10}>
        <Box
          as="header"
          sx={styles.header}
          className={mobileMenu ? "is-mobile-menu" : ""}
        >
          <Container>
            <Box sx={styles.headerInner}>
              <Logo />

              <Flex
                as="nav"
                sx={styles.navbar}
                className={mobileMenu ? "navbar active" : "navbar"}
              >
                <Box
                  as="ul"
                  sx={styles.navList}
                  className={mobileMenu ? "active" : ""}
                  dir="rtl"
                >
                  {currentPageNavigationLabels}
                </Box>
                <Button sx={styles.contact} variant="primaryMd">
                  <a
                    href="https://api.whatsapp.com/send?phone=+972526020358"
                    target="_blank"
                    rel="noreferrer"
                  >
                    להזמנה
                  </a>
                </Button>
              </Flex>

              {mobileMenu ? (
                <Button variant="text" sx={styles.closeButton}>
                  <GrClose onClick={closeMobileMenu} size="20px" />
                </Button>
              ) : (
                <MenuButton
                  aria-label="Toggle Menu"
                  onClick={toggleMobileMenu}
                />
              )}
            </Box>
          </Container>
        </Box>
      </Sticky>
    </Box>
  );
}

const styles = {
  top: {
    backgroundColor: "#141414",
  },
  copyright: {
    textAlign: "center",
    pt: "1rem",
    pb: "1rem",
    alignItems: "center",
    justifyContent: "center",
    span: {
      fontSize: "1.5rem",
      color: rgba("#FFFFFF", 0.7),
      display: "inline-flex",
      "@media only screen and (max-width: 700px)": {
        fontSize: "1rem",
      },
    },
  },
  headerWrapper: {
    backgroundColor: "transparent",
    ".is-sticky": {
      header: {
        backgroundColor: "#fff",
        boxShadow: "0 6px 13px rgba(38, 78, 118, 0.1)",
        py: [20],
      },
    },
  },
  header: {
    position: "fixed",
    left: 0,
    right: 0,
    py: [10],
    transition: "all 0.3s ease-in-out 0s",
    "&.is-mobile-menu": {
      backgroundColor: "#fff",
    },
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media only screen and (max-width: 768px)": {
      ".navbar": {
        position: "absolute",
        top: "100%",
        backgroundColor: "#fff",
        width: "100%",
        left: 0,
        p: "20px 30px",
        display: "block",
        boxShadow: "0 6px 13px rgba(38,78,118,0.1)",
        opacity: 0,
        visibility: "hidden",
        transition: "all 0.3s ease-in-out 0s",
        "&.active": {
          opacity: 1,
          visibility: "visible",
        },
        ul: {
          display: "block",
          "li + li": {
            marginTop: 5,
          },
        },
        button: {
          marginTop: 8,
          width: "100%",
        },
      },
    },
  },
  navbar: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  navList: {
    display: ["flex"],
    listStyle: "none",
    marginLeft: "auto",
    p: 0,
    ".nav-item": {
      cursor: "pointer",
      fontWeight: 400,
      padding: 0,
      margin: "0 20px",
      "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ":
        {
          fontSize: "1.5rem",
        },
    },
    a: {
      cursor: "pointer",
      fontWeight: 400,
      padding: 0,
      margin: "0 20px",
      color: "#141414",
      textDecoration: "none",
      "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ":
        {
          fontSize: "1.5rem",
        },
    },
    ".active": {
      color: "#DE7C5A",
    },
  },
  contact: {
    marginLeft: "auto",
    backgroundColor: "#141414",
    fontSize: "1.3rem",
    pt: "1rem",
    pb: "1rem",
    pl: "3rem",
    pr: "3rem",
    a: {
      color: rgba("#FFFFFF", 0.7),
      textDecoration: "none",
    },
  },
  closeButton: {
    height: "32px",
    padding: "4px",
    minHeight: "auto",
    width: "32px",
    ml: "3px",
  },
};
