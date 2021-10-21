import React, { useState } from "react";
import { jsx, Box, Container, Heading, Text } from "theme-ui";
import { rgba } from "polished";
import classes from "./slideshow.module.css";
import slider1 from "assets/images/features/1.png";
import slider2 from "assets/images/features/2.webp";
import slider3 from "assets/images/features/3.png";
import Image from "components/image";
import SwiperCore, {
  Autoplay,
  Pagination,
  EffectFade,
  Navigation,
  Thumbs,
} from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Thumbs]);

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
      title: "קולקציית טרזו",
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

function SlideShow(props) {
  const { images_paths } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <React.Fragment>
      <Swiper
        id="main"
        loop={false}
        thumbs={{ swiper: thumbsSwiper }}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        navigation={true}
        className={classes.swiper}
      >
        {images_paths?.map((image) => (
          <SwiperSlide key={image.image_id} style={{ listStyle: "none" }}>
            <Image loading="lazy" src={image.image_path} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        id="thumbs"
        effect="fade"
        spaceBetween={5}
        slidesPerView={5}
        className={classes.sub_swiper}
        // centeredSlides={true}
        centerInsufficientSlides={true}
        onSwiper={setThumbsSwiper}
      >
        {images_paths?.map((image) => (
          <SwiperSlide
            key={image.image_id}
            tag="li"
            style={{ listStyle: "none" }}
          >
            <Image loading="lazy" src={image.image_path} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
}

// return (
//     <Box id="collections" as="section" sx={styles.section}>
//       <Container>
//         <Box sx={styles.contentWrapper}>
//           <Box sx={styles.rightContent}>
//             <Swiper
//               loop={false}
//               thumbs={{ swiper: thumbsSwiper }}
//               effect="fade"
//               //   ref={swiperRef}
//               spaceBetween={0}
//               slidesPerView={1}
//               pagination
//               navigation
//             >
//               {data?.gallery?.map((item) => (
//                 <SwiperSlide key={item.id} style={{ listStyle: "none" }}>
//                   <Box as="figure" sx={styles.image}>
//                     <Image loading="lazy" src={item.image} alt="" />
//                   </Box>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </Box>
//         </Box>
//       </Container>
//       <Swiper id="thumbs" spacaeBetween={5} slidesPerView={3} onSwiper={setThumbsSwiper}>
//         {data?.gallery?.map((item) => (
//           <SwiperSlide key={item.id} tag="li" style={{ listStyle: "none" }}>
//             <Image loading="lazy" src={item.image} alt="" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );
// }

export default SlideShow;

const styles = {
  section: {
    pt: [30, null, null, null, 60],
    pb: [30, null, null, 50, 60],
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
    },
    p: {
      fontSize: ["15px", null, null, "17px"],
      mt: [3, null, null, 5],
    },
  },
  featureWrapper: {
    gap: ["40px 20px", null, null, null, "30px"],
    display: "grid",
    gridTemplateColumns: [
      "repeat(2,1fr)",
      null,
      null,
      "repeat(3,180px)",
      "repeat(3,1fr)",
    ],
    justifyContent: ["unset", null, null, "center", "flex-start"],
  },
  rightContent: {
    position: "relative",
    mt: [6, null, null, null, 0],
    maxWidth: "100%",
    ".swiper-pagination-bullets": {
      bottom: 20,
    },
    ".swiper-pagination-bullet": {
      backgroundColor: "#D5573B",
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
    backgroundColor: "#D5573B",
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
      backgroundColor: "#D5573B",
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
