/** @jsx jsx */
import { jsx, Box, Container, Button } from "theme-ui";
import Slider from "react-slick";
import SectionHeading from "components/section-heading";
import BlogPost from "components/cards/blog-card";
import thumb1 from "assets/images/blog/blog_bedroom.png";
import thumb2 from "assets/images/blog/blog_console.png";
import thumb3 from "assets/images/blog/blog_salon.png";
import thumb4 from "assets/images/blog/blog_balcon.png";

const data = [
  {
    id: 1,
    thumb: thumb1,
    commentCount: 22,
    link: "#!",
    title: `חדרי שינה`,
  },
  {
    id: 2,
    thumb: thumb2,
    commentCount: 15,
    link: "#!",
    title: `קונסולה`,
  },
  {
    id: 3,
    thumb: thumb3,
    commentCount: 18,
    link: "#!",
    title: `סלון`,
  },
  {
    id: 4,
    thumb: thumb4,
    commentCount: 18,
    link: "#!",
    title: `מרפסת`,
  },
  {
    id: 5,
    thumb: thumb3,
    commentCount: 18,
    link: "#!",
    title: `מטבח`,
  },
  {
    id: 6,
    thumb: thumb2,
    commentCount: 18,
    link: "#!",
    title: `חדרי שינה`,
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
  section: { mr: "2rem", ml: "2rem", pb: [50, 50, 50, 100, 8, 9] },
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
