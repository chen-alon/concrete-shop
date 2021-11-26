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

  const navigationBarProducts = productMenuItems.map(({ path, label }, i) => (
    <li key={i}>
      <Link href={`/${path}`}>
        <a onClick={closeMobileMenu}>{label}</a>
      </Link>
    </li>
  ));

  const returnMainAndCloseMobileMenu = () => {
    router.back();
    setMobileMenu(false);
  };

  const navigationBarDetails = (
    <li>
      <Link href={`/`}>
        <a onClick={closeMobileMenu}>חזור לדף הבית</a>
      </Link>
    </li>
  );

  const currentPageNavigationLabels =
    router.pathname === "/"
      ? navigationBar
      : router.pathname === "/about" ||
        router.pathname === "/policy" ||
        router.pathname === "/qanda"
      ? navigationBarDetails
      : navigationBarProducts;

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
                <Button sx={styles.contact}>
                  <a
                    href="https://api.whatsapp.com/send?phone=+972526020358"
                    target="_blank"
                    rel="noreferrer"
                  >
                    לחצו פה להזמנה
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
      "@media only screen and (max-width: 760px)": {
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
    "@media only screen and (max-width: 760px)": {
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
      "@media only screen and (max-width: 760px)": {
        fontSize: "1.2rem",
      },
    },
    a: {
      cursor: "pointer",
      fontWeight: 400,
      padding: 0,
      margin: "0 20px",
      color: "#141414",
      textDecoration: "none",
      "@media only screen and (max-width: 760px) ": {
        fontSize: "1.2rem",
      },
    },
    ".active": {
      color: "#DE7C5A",
    },
  },
  contact: {
    marginLeft: "auto",
    // bg: "#fff",
    bg: "transparent",
    fontSize: "1.2rem",
    borderRadius: 0,
    p: "1rem",
    pb: "1rem",
    pl: "2rem",
    pr: "2rem",
    a: {
      // color: "#141414",
      color: "#de7c5a",
      textDecoration: "none",
      textAlign: "center",
    },
    ":hover": {
      a: {
        color: rgba("#FFFFFF", 0.7),
      },
      transform: "scale(1.1)",
      bg: "#141414",
      opacity: "0.9",
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
