import path from "path";
import fs from "fs/promises";
import { useRouter } from "next/router";
import { Button, Container, Box, Flex } from "theme-ui";
import SlideShow from "components/productpages/product/slideshow";
import ProductDetails from "components/productpages/product/product-details";
import { rgba } from "polished";
import { logEvent} from "analytics";

async function getData() {
  const dataFilePath = path.join(process.cwd(), "data", "products-data.json");
  const jsonData = await fs.readFile(dataFilePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.productid;
  const categorytId = params.product_category;
  const data = await getData();
  const currentCategory = data.products.find(
    (category) => category.category_id === categorytId
  );

  const product = currentCategory.products_list.find(
    (product) => product.product_id === productId
  );
  return {
    props: {
      currentProduct: product,
      currentCategory: currentCategory,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const pathsList = [];
  const amountOfCatrgories = data.products.length;

  for (var categoryId = 0; categoryId < amountOfCatrgories; categoryId++) {
    const categoryPaths = data.products[categoryId].products_list.map(
      (product) => ({
        params: {
          product_category: data.products[categoryId].category_id,
          productid: product.product_id,
        },
      })
    );

    pathsList.push(...categoryPaths);
  }

  return {
    paths: pathsList,
    fallback: false,
  };
}

function ProductIdPage(props) {
  const { currentProduct, currentCategory } = props;
  const router = useRouter();
  const whatsAppMessage =
    "https://api.whatsapp.com/send?phone=+972526020358&text=היי אשמח לבצע הזמנה של המוצר " +
    currentProduct.label;

  return (
    <Box id="products" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        {router.pathname !== "/" && (
          <Button onClick={() => router.back()} sx={styles.buttonBack}>
            חזרה לעמוד הקודם
          </Button>
        )}

        <Flex sx={styles.contentWrapper} dir="rtl">
          <Box sx={styles.rightContent}>
            <Box>
              <div style={styles.name}>{currentProduct.label}</div>
              <div style={styles.price}>
                <div style={currentProduct?.discount ? styles.sale : null}>
                  {currentProduct.price} ₪
                </div>
                {currentProduct?.discount ? (
                  <div> &nbsp;&nbsp;&nbsp;{currentProduct.discount} ₪</div>
                ) : null}
              </div>
            </Box>
            <Button sx={styles.order} variant="secondary" onClick={logEvent.bind(this, "Order", "Product: " + currentProduct.product_id)}>
              <a href={whatsAppMessage} target="_blank" rel="noreferrer">
                להזמנת המוצר לחצו כאן
              </a>
            </Button>
            <ProductDetails
              id={currentCategory.category_id}
              description={currentProduct.description}
              colors={currentProduct.colors}
              more={currentProduct.more}
              sizes={currentProduct.sizes}
            />
          </Box>
          <Flex as="figure" sx={styles.illustration}>
            <SlideShow
              images_paths={
                currentProduct.product_images_paths[0].image_path
                  ? currentProduct.product_images_paths
                  : null
              }
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default ProductIdPage;

const styles = {
  section: {
    pt: [50, 60, 80],
    pb: [60, 60, 60, 90, 80, 120],
  },
  container: {
    mt: "5rem",
    "@media only screen and (max-width: 900px) ": {
      mt: "3rem",
    },
  },
  contentWrapper: {
    justifyContent: "center",
    display: ["flex", null, null, null, "grid"],
    flexDirection: [
      "column-reverse",
      "column-reverse",
      "column-reverse",
      "row",
    ],
    mt: "2rem",
    gap: [null, null, null, null, "30px"],
    gridTemplateColumns: ["unset", null, null, null, "4fr 4fr"],
  },
  illustration: {
    flexDirection: "column",
    display: ["flex", null, null, null, "grid"],
    flexDirection: ["column", null, null, null, null],
    alignItems: "center",
  },
  rightContent: {
    textAlign: "center",
  },

  buttonBack: {
    bg: rgba("#6A7B76", 0.6),
    fontSize: "1rem",
    fontWeight: 300,
    "@media only screen and (max-width: 900px) ": {
      fontSize: "0.8rem",
    },
    ":hover": {
      bg: "#6A7B76",
      opacity: "0.8",
    },
  },
  order: {
    bg: rgba("#6A7B76", 0.6),
    fontSize: [15, 20],
    width: "50%",
    p: "1rem",
    a: {
      color: "#fff",
      textDecoration: "none",
      fontWeight: "bold",
    },
    ":hover": {
      opacity: "0.8",
      transform: "scale(1.1)",
      bg: "#6A7B76",
    },
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: "0.8rem",
  },
  price: {
    fontSize: 25,
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "2rem",
  },
  sale: {
    textDecoration: "line-through",
  },
};
