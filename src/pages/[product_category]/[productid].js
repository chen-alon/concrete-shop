import path from "path";
import fs from "fs/promises";
import { useRouter } from "next/router";
import { Button } from "theme-ui";
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
    <div style={{ marginTop: "11rem", marginBottom: "11rem" }}>
      <div sx={styles.button}>
        {router.pathname !== "/" && (
          <Button onClick={() => router.back()} sx={styles.buttonBack}>
            חזרה לעמוד הקודם
          </Button>
        )}
      </div>

      <div>
        <SlideShow images_paths={currentProduct.product_images_paths} />
      </div>
      <ProductDetails
        label={currentProduct.label}
        description={currentProduct.description}
        colors={currentProduct.colors}
        prices={currentProduct.prices}
        more={currentProduct.more}
        size={currentProduct.size}
      />
      <Button sx={styles.contact} variant="secondary">
        <a
          href="whatsapp://send?text=היי אשמח לבצע הזמנה.&phone=+972526020358"
          target="_blank"
          rel="noreferrer"
        >
          להזמנה לחצו כאן
        </a>
      </Button>
    </div>
  );
}

export default ProductIdPage;

const styles = {
  button: {
    pt: "0.8rem",
    pb: "0.8rem",
    pl: "1.5rem",
    pr: "1.5rem",
    float: "left",
  },
  buttonBack: {
    // marginLeft: "18rem",
    backgroundColor: "#DE7C5A",
    fontSize: "1rem",
    borderRadius: 0,
    fontWeight: 300,
  },
  contact: {
    ml: "2rem",
    border: "3px solid #DE7C5A",
    ":hover": {
      border: "3px solid #141414",
    },
    fontWeight: "bold",
    bg: "#fff",
    fontSize: "1.3rem",
    a: {
      color: "#DE7C5A",
      textDecoration: "none",
      ":hover": {
        color: "#141414",
      },
    },
  },
};
