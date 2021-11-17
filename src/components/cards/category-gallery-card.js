/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";
import Image from "next/image";
import Link from "next/link";
import image1 from "../../../public/images/soon1.png";

const CategoryGalleryCard = (props) => {
  const { item, path } = props;

  return (
    <Link href={path}>
      <Flex as="figure" sx={styles.figure}>
        <Box sx={styles.container}>
          <Image
            src={item.category_image_path ? item.category_image_path : image1}
            alt={item?.label}
            height={746}
            width={840}
            layout="responsive"
          />
          <Box sx={item.category ? styles.category : null}>
            {item.category ? item.category : null}
          </Box>
        </Box>
        <div
          style={{ margin: "0", fontWeight: "bold", fontSize: "1.2rem" }}
          dir="rtl"
        >
          {item?.label}
          <br />
          {item?.one_piece_price} ש"ח
        </div>
      </Flex>
    </Link>
  );
};

export default CategoryGalleryCard;

const styles = {
  figure: {
    flexDirection: "column",
    // position: "relative",
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
        opacity: "0.6",
      },
    },
  },
  container: {
    position: "relative",
    textAlign: "center",
  },
  category: {
    position: "absolute",
    backgroundColor: "#de7c5a",
    color: "#141414",
    fontWeight: "bold",
    padding: "1rem",
    opacity: 0.8,
    borderRadius: 10,
    top: "20px",
    left: "20px",
  },
};
