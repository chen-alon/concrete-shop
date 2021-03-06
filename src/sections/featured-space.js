/** @jsx jsx */
import { rgba } from "polished";
import { useState, useRef, useEffect } from "react";
import { jsx, Box, Container, Heading, Text } from "theme-ui";
import SectionHeading from "components/section-heading";
import Progressbar from "components/progressbar";
import Image from "next/image";
import slider1 from "assets/images/features/collection_basic.png";
import slider2 from "assets/images/features/collection_terrazzo_2.png";
import slider3 from "assets/images/features/collection_marble.png";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const data = {
  gallery: [
    {
      id: 1,
      image: slider1,
      title: "קולקציית נטורל",
      desc: "חלק, נקי, קלאסי",
    },
    {
      id: 2,
      image: slider2,
      title: "קולקציית טרצ'ו",
      desc: "צבעוני, פיגמנטים שונים",
    },
    {
      id: 3,
      image: slider3,
      title: "קולקציית מרבל",
      desc: "שילוב של לפחות שני צבעים",
    },
  ],
};

const FeaturedSpace = () => {
  const isPause = useRef(false);
  const swiperRef = useRef(null);
  const [togglePlay, setTogglePlay] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);

  let time = 3;
  let tick, percentTime;

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 10);
  }

  function interval() {
    if (isPause.current === false) {
      percentTime += 1 / (time + 0.1);
      setCurrentWidth(percentTime);
      if (percentTime >= 100) {
        swiperRef?.current?.swiper?.slideNext();
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    setCurrentWidth(0);
    clearTimeout(tick);
  }

  useEffect(() => {
    startProgressbar();
  }, []);

  const handleToggle = () => {
    isPause.current = !isPause.current;
    setTogglePlay((prev) => !prev);
  };

  const desc =
    "מתוך אהבה טהורה לאומנות ובטון יצרתי קולקציות מוקפדות של אקססוריז ופרטי נוי דקורטיביים לפנים וחוץ הבית במיוחד עבורכם ועבור האהובים שלכם.\nישנן שלוש קולקציות עיקריות:\n⋑ קולקציית נטורל - צבע אחיד\n⋑ קולקציית טרצ'ו - שומשום, פיגמנטים שונים\n⋑ קולקציית מרבל - דוגמת שיש, שילוב של מספר צבעים\nניתן לבצע הזמנות מותאמות אישית.";

  return (
    <Box id="collections" as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <SectionHeading
              sx={styles.heading}
              dir="rtl"
              slogan="קולקציות"
              title="איך נולדו הקולקציות שלנו?"
              description={desc}
            />
          </Box>
          <Box sx={styles.rightContent}>
            <Progressbar
              sx={styles.progressbar}
              togglePlay={togglePlay}
              handleClick={handleToggle}
              currentWidth={currentWidth}
            />
            <Swiper
              loop={true}
              effect="fade"
              ref={swiperRef}
              spaceBetween={0}
              slidesPerView={1}
              pagination={true}
            >
              {data?.gallery?.map((item) => (
                <SwiperSlide key={item.id}>
                  <Box as="figure" sx={styles.image}>
                    <Image src={item.image} alt="" height={650} width={650} />
                    <Box as="figcaption">
                      <Box>
                        <Heading as="h4">{item.title}</Heading>
                        <Text as="p">{item.desc}</Text>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedSpace;

const styles = {
  section: {
    pt: [30, null, null, null, 60],
    pb: [60, null, null, null, 120],
  },
  contentWrapper: {
    gap: [null, null, null, null, "30px"],
    display: ["flex", null, null, null, "grid"],
    alignItems: "center",
    flexDirection: ["column", null, null, null, null],
    gridTemplateColumns: ["unset", null, null, null, "repeat(2,1fr)"],
  },
  leftContent: {
    m: [0, "30px 0px 0", "30px 50px 0", 0],
  },
  heading: {
    textAlign: ["right", null, null, null, "right"],
    maxWidth: 490,
    margin: ["0 auto 40px", null, null, null, "0 0 80px"],
    h2: {
      fontSize: [22, null, null, 30, null, 36, 46],
      lineHeight: [1.6, null, null, 1.41],
      fontWeight: [500, null, null, 400],
      fontWeight: "bold",
    },
    p: {
      whiteSpace: "pre-wrap",
      fontSize: ["17px", null, null, "20px"],
      mt: [3, null, null, 5],
    },
    "@media only screen and (max-width: 900px) ": {
      width: "100%",
      pr: "1rem",
      pl: "1rem",
      textAlign: "center",
    },
  },
  rightContent: {
    position: "relative",
    maxWidth: "100%",
    ".swiper-pagination-bullets": {
      bottom: 20,
    },
    ".swiper-pagination-bullet": {
      backgroundColor: "#6A7B76",
      width: 10,
      height: 10,
      opacity: 1,
      mx: 5,
      ":focus": {
        outline: 0,
      },
    },
    ".swiper-pagination-bullet-active": {
      backgroundColor: "rgba(255,255,255,1)",
    },
  },
  progressbar: {
    position: "absolute",
    left: [15, 25],
    top: [46, 53],
    zIndex: 2,
    backgroundColor: "#6A7B76",
  },
  progressBar: {
    position: "relative",
    mr: 4,
  },
  image: {
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    "> img": {
      borderRadius: 10,
    },
    figcaption: {
      backgroundColor: "#6A7B76",
      display: "flex",
      alignItems: "center",
      position: "absolute",
      left: 0,
      top: 30,
      borderRadius: 5,
      color: "#fff",
      padding: ["20px 20px 20px 80px", "25px 25px 25px 90px"],
      h4: {
        lineHeight: 1,
        fontWeight: "bold",
        fontSize: [14, 18],
        letterSpacing: "heading",
      },
      p: {
        fontSize: [13, 16],
        fontWeight: 500,
        letterSpacing: "heading",
        color: rgba("#fff", 0.6),
        marginTop: [2],
      },
    },
  },
};
