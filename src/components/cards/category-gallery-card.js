/** @jsx jsx */
import { jsx, Box, Flex, Image } from "theme-ui";
// import classes from "../category-item.module.css";
import Link from "next/link";

const CategoryGalleryCard = (props) => {
  const { item, path } = props;

  return (
    <Link href={path}>
      <Flex as="figure" sx={styles.figure}>
        <div style={{ flexDirection: "column" }}>
          <Image
            loading="lazy"
            src={item?.category_image_path}
            alt={item?.label}
          />
          <div style={{ margin: "0" }} dir="rtl">
            {item?.label}
            <br />
            {item?.one_piece_price}
          </div>
        </div>
        {/* <Box as="figcaption">{item?.label}</Box> */}
      </Flex>
    </Link>
  );
};

export default CategoryGalleryCard;

const styles = {
  figure: {
    // borderRadius: 5,
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
      // background: `linear-gradient(1.15deg, #020718 0.72%, rgba(255, 255, 255, 0) 41.15%)`,
      // borderRadius: 5,
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
      // borderRadius: 5,
      transform: "scale(1)",
      transition: "all 0.3s ease-in-out 0s",
    },
    ":hover": {
      img: {
        transform: "scale(1.2)",
      },
    },
    figcaption: {
      color: "#fff",
      position: "absolute",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.68,
      letterSpacing: "heading",
      right: 30,
      bottom: 20,
      zIndex: 1,
    },
  },
};
