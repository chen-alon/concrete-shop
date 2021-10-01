/** @jsx jsx */
import { jsx, Box, Flex, Text, Container } from "theme-ui";
import Logo from "components/logo";
import { rgba } from "polished";

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container sx={styles.container}>
        <Flex sx={styles.content}>
          <Flex sx={styles.copyright}>
            <Text as="span">
              © 2021, Concrete Shop Israel. All rights reserved.
            </Text>
          </Flex>
          <Logo white />
        </Flex>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: "#D5573B",
  },
  content: {
    alignItems: "center",
    borderTop: `1px solid ${rgba("#fff", 0.15)}`,
    // display: ["block", null, null, null, "flex"],
    display: ["block", null, null, null, "block"],
    // justifyContent: "space-between",
    justifyContent: ["center", null, null, null],
    paddingTop: "20px",
    paddingBottom: "60px",
    textAlign: ["center", null, null, null],
    "@media only screen and (max-width: 400px)": {
      pb: 50,
    },
  },
  copyright: {
    display: ["block", "flex"],
    alignItems: "center",
    justifyContent: ["center", null, null, null],
    span: {
      fontSize: "14px",
      lineHeight: [1.8, null, null, 1.29],
      color: rgba("#FFFFFF", 0.7),
      marginTop: 1,
      display: "inline-flex",
    },
  },
};
