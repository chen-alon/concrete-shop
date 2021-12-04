/** @jsx jsx */
import { jsx, Box, Container, Button } from "theme-ui";
import Slider from "react-slick";
import SectionHeading from "components/section-heading";
import BlogPost from "components/cards/blog-card";
import dresser from "assets/images/blog/blog_bedroom.jpg";
import console from "assets/images/blog/blog_console.jpg";
import salon from "assets/images/blog/blog_salon.png";
import dresser_2 from "assets/images/blog/room_2.jpg";
import balcony from "assets/images/blog/balcony.jpg";
import side_dresser from "assets/images/blog/room_2_2.jpg";

const data = [
  {
    id: 1,
    thumb: dresser_2,
    link: "/trays/decorative_arch_fire",
    title: `שידה`,
  },
  {
    id: 2,
    thumb: balcony,
    link: "/fire_bowls",
    title: `מרפסת`,
  },
  {
    id: 3,
    thumb: side_dresser,
    link: "/trays/oval_tray_terazzo",
    title: `חדרי שינה`,
  },
  {
    id: 4,
    thumb: salon,
    link: "/coasters/coaster_terrazzo",
    title: `סלון`,
  },
  {
    id: 5,
    thumb: console,
    link: "/tray_marble_white_grey",
    title: `קונסולה`,
  },
  {
    id: 6,
    thumb: dresser,
    link: "#!",
    title: `שידת טואלט`,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 690,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
  // centerMode: true,
};

const Blog = () => {
  return (
    <Box id="customers" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          // slogan="תמונות"
          title="שילוב המוצרים שלנו בחלל הבית"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Slider {...settings} sx={styles.slider}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    mr: "2rem",
    ml: "2rem",
    pt: [30, null, null, null, 60],
    pb: [30, null, null, 50, 60],
  },
  slider: {
    ".slick-prev:before": {
      color: "#DE7C5A",
    },
    ".slick-next:before": {
      color: "#DE7C5A",
    },
    ".slick-dots li.slick-active button:before": {
      color: "#DE7C5A",
    },
  },
};
