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
            src={
              item?.product_images_paths[0].image_path
                ? item.product_images_paths[0].image_path
                : image1
            }
            key={item.product_images_paths.image_id}
            alt={item?.label}
            height={746}
            width={840}
            layout="responsive"
          />
          <Box sx={item.category ? styles.category : null}>
            {item.category ? item.category : null}
          </Box>
        </Box>
        <Box sx={styles.details} dir="rtl">
          <Box style={{ fontWeight: "bold" }}>
            {item?.label}
            <hr width="20%" style={{ backgroundColor: "#141414" }} />
          </Box>
          <Box sx={styles.prices}>
            <div style={item?.discount ? styles.sale : null}>
              {item?.price} ₪
            </div>
            {item.discount ? (
              <div> &nbsp;&nbsp;&nbsp;{item.discount} ₪</div>
            ) : null}
          </Box>
        </Box>
      </Flex>
    </Link>
  );
};

export default CategoryGalleryCard;

const styles = {
  figure: {
    flexDirection: "column",
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
    color: "#fff",
    backgroundColor: "#de7c5a",
    opacity: 0.9,
    borderRadius: 10,
    padding: "1rem",
    top: "20px",
    left: "20px",
  },
  details: {
    textAlign: "center",
    alignItems: "center",
    mt: "1rem",
    fontSize: [15, 19],
  },
  prices: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  sale: {
    textDecoration: "line-through",
  },
};
