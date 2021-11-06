/** @jsx jsx */
import { jsx, Box, Container, Image } from "theme-ui";
import { RiArrowRightSLine } from "react-icons/ri";
import Masonry from "react-masonry-component";
import SectionHeading from "components/section-heading";
import CategoryGalleryCard from "components/cards/category-gallery-card";

const masonryOptions = {
  transitionDuration: 0,
};

const CategoryGallery = (props) => {
  const { categoryProductsList, category_id } = props;

  return (
    <Box id="products" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          // slogan="Working space"
          title="חנות"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {categoryProductsList?.map((item) => (
            <CategoryGalleryCard
              key={item.product_id}
              item={item}
              path={`/${category_id}/${item.product_id}`}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CategoryGallery;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: "-15px",
  },
};
