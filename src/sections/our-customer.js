/** @jsx jsx */
import { jsx, Box, Container, Flex, Image, Link } from "theme-ui";
import { RiArrowRightSLine } from "react-icons/ri";
import SectionHeading from "components/section-heading";
import customer from "assets/images/customer.png";

const OurCustomer = () => {
  const desc =
    "הצוות שלנו כאן בשבילך לכל שאלה או בקשה.\nישנם דרכים שונות ליצור איתנו איתנו קשר.\nבחרו את אחת האפשרויות";

  return (
    <Box id="contact" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="צור קשר"
          title="מחפשים אותנו או צריכים עזרה?"
          dir="rtl"
        />
        <Flex sx={styles.contentWrapper}>
          <Flex as="figure" sx={styles.illustration}>
            <Image loading="lazy" src={customer} alt="customer" />
          </Flex>
          <Box sx={styles.rightContent} dir="rtl">
            <SectionHeading sx={styles.heading} description={desc} />

            {/* <Box sx={{ textAlign: ["center", "center", "center", "left"] }}>
              <Link variant="links.learnMore" sx={styles.link} href="#!">
                Learn more <RiArrowRightSLine size="20px" />
              </Link>
            </Box> */}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default OurCustomer;

const styles = {
  section: {
    pt: [60, 60, 60, 60, 80, 9],
    pb: [30, 30, 6],
  },
  contentWrapper: {
    display: ["flex", null, null, null, "grid"],
    flexDirection: ["column", null, null, null, null],
    alignItems: "center",
    flexDirection: [
      "column-reverse",
      "column-reverse",
      "column-reverse",
      "row",
    ],
    gap: [null, null, null, null, "30px"],
    gridTemplateColumns: ["unset", null, null, null, "repeat(2,1fr)"],
  },
  illustration: {
    alignItems: ["flex-start"],
    maxWidth: ["none", "none", "none", "none", 480, 530, 760],
    m: ["50px 0 0", "50px 0 0", "50px 0 0", 0, "0 20px 0 0", "0 48px 0 0"],
  },
  rightContent: {
    m: [0, 0, 0, 0, "0px 48px 0px 0px", "0px 95px 0px 0px"],
  },
  heading: {
    textAlign: ["right", null, null, null, "right"],
    maxWidth: 580,
    margin: ["0 auto 40px", null, null, null, "0 0 80px"],
    h2: {
      fontSize: [22, null, null, 30, null, 36, 46],
      lineHeight: [1.6, null, null, 1.41],
      fontWeight: [500, null, null, 400],
    },
    p: {
      whiteSpace: "pre-wrap",
      fontSize: ["18px", null, null, "22px"],
      textAlign: "center",
    },
    // m: ["0 auto 27px", "0 auto 27px", "0 auto 27px", "0 0 30px"],
  },
  link: {
    svg: {
      transition: "margin-left 0.3s ease-in-out 0s",
    },
    ":hover": {
      svg: {
        ml: "5px",
      },
    },
  },
};
