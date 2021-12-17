/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import Masonry from "react-masonry-component";
import SectionHeading from "components/section-heading";
import GalleryCard from "components/cards/gallery-card";
import gallery1 from "assets/images/gallery/1.png";
import gallery2 from "assets/images/gallery/2.png";
import gallery3 from "assets/images/gallery/3.png";
import gallery4 from "assets/images/gallery/4.png";
import gallery5 from "assets/images/gallery/5.png";
import gallery6 from "assets/images/gallery/6.png";

const data = [
  {
    id: 1,
    image: gallery1,
    title: "תחתיות",
    link: "coasters",
    height: "400",
    width: "420",
  },
  {
    id: 2,
    image: gallery2,
    title: "קערות אש",
    link: "fire_bowls",
    height: "530",
    width: "420",
  },
  {
    id: 3,
    image: gallery3,
    title: "נרות",
    link: "candles",
    height: "450",
    width: "420",
  },
  {
    id: 4,
    image: gallery4,
    title: "מגשים",
    link: "trays",
    height: "550",
    width: "420",
  },
  {
    id: 5,
    image: gallery5,
    title: "פמוטים",
    link: "candle_holders",
    height: "500",
    width: "420",
  },
  {
    id: 6,
    image: gallery6,
    title: "סטים ועוד",
    link: "sets",
    height: "420",
    width: "420",
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  return (
    <Box id="products" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="חנות"
          title="הפריטים שלנו"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {data?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    pt: [30],
    pb: [30, null, null, 50, 60],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: "-15px",
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: "100%",
    fontWeight: 500,
    svg: {
      transition: "margin-left 0.3s ease-in-out 0s",
    },
    ":hover": {
      backgroundColor: "#6A7B76",
      svg: {
        ml: "5px",
      },
    },
  },
};
