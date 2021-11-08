/** @jsx jsx */
import { jsx, Box, Flex, Image } from "theme-ui";
// import classes from "../category-item.module.css";
import Link from "next/link";
import image from "../../../public/images/logo.png";

const CategoryGalleryCard = (props) => {
  const { item, path } = props;

  return (
    <Link href={path}>
      <Flex as="figure" sx={styles.figure}>
        <div style={{ flexDirection: "column" }}>
          <Image
            loading="lazy"
            src={item.category_image_path ? item.category_image_path : image}
            alt={item?.label}
          />
          <div style={{ margin: "0" }} dir="rtl">
            {item?.label}
            <br />
            {item?.one_piece_price} ש"ח
          </div>
        </div>
      </Flex>
    </Link>
  );
};

export default CategoryGalleryCard;

const styles = {
  figure: {
    position: "relative",
    overflow: "hidden",
    mb: 30,
    mx: 15,
    width: [
      "calc(100% - 30px)",
      "calc(100% - 30px)",
      "calc(50% - 30px)",
      "calc(50% - 30px)",
      "calc(33.3333% - 30px)",
    ],
    ":before": {
      opacity: 0.7,
      content: `''`,
      position: "absolute",
      width: "100%",
      height: "100%",
      right: 0,
      top: 0,
      zIndex: 1,
    },
    img: {
      transform: "scale(1)",
      transition: "all 0.3s ease-in-out 0s",
    },
    ":hover": {
      img: {
        opacity: "60%",
      },
    },
  },
};
