import path from "path";
import fs from "fs/promises";
import { useRouter } from "next/router";
import { Button, Container, Box, Flex } from "theme-ui";
import SlideShow from "components/productpages/product/slideshow";
import ProductDetails from "components/productpages/product/product-details";

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
  const { currentProduct } = props;
  const router = useRouter();

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
              <p sx={styles.label}>{currentProduct.label}</p>
              <p sx={styles.price}>{currentProduct.price} ₪</p>
            </Box>
            <Button sx={styles.contact} variant="secondary">
              <a
                href="whatsapp://send?text=היי אשמח לבצע הזמנה.&phone=+972526020358"
                target="_blank"
                rel="noreferrer"
              >
                להזמנה לחצו כאן
              </a>
            </Button>
            <ProductDetails
              description={currentProduct.description}
              colors={currentProduct.colors}
              more={currentProduct.more}
              size={currentProduct.size}
            />
          </Box>
          <Flex as="figure" sx={styles.illustration}>
            <SlideShow images_paths={currentProduct.product_images_paths} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default ProductIdPage;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  contentWrapper: {
    justifyContent: "center",
    display: ["flex", null, null, null, "grid"],
    flexDirection: ["column", null, null, null, null],
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
  container: {
    mt: "5rem",
    "@media only screen and (max-width: 900px) ": {
      mt: "3rem",
    },
  },
  buttonBack: {
    backgroundColor: "#DE7C5A",
    fontSize: "1rem",
    borderRadius: 0,
    fontWeight: 300,
    "@media only screen and (max-width: 900px) ": {
      fontSize: "0.8rem",
    },
    ":hover": {
      backgroundColor: "#DE7C5A",
      opacity: "0.8",
    },
  },
  contact: {
    borderRadius: 0,
    bg: "#333333",
    fontSize: [15, 20],
    width: "50%",
    p: "1rem",
    a: {
      color: "#fff",
      textDecoration: "none",
    },
    ":hover": {
      opacity: "0.8",
    },
  },
  label: {},
  price: {},
};
