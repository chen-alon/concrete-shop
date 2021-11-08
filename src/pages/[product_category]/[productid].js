import path from "path";
import fs from "fs/promises";
import { useRouter } from "next/router";
import { Button } from "theme-ui";
import SlideShow from "components/productpages/product/slideshow";
import ProductDetails from "components/productpages/product/product-details";

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

      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "static",
        }}
      > */}
      <div>
        <SlideShow images_paths={currentProduct.product_images_paths} />
      </div>
      <div sx={{ marginRight: "5rem" }}>
        <ProductDetails
          label={currentProduct.label}
          description={currentProduct.description}
          colors={currentProduct.colors}
          concrete_desc={currentProduct.concrete_desc}
          prices={currentProduct.prices}
        />
        <Button sx={styles.contact} variant="primaryMd">
          <a
            href="whatsapp://send?text=היי אשמח לבצע הזמנה.&phone=+972526020358"
            target="_blank"
            rel="noreferrer"
          >
            להזמנה
          </a>
        </Button>
      </div>
      {/* </div> */}
    </div>
  );
}

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
  // we create all possible paths. Structure:
  // { params: { product_category: 'coasters', productid: 'coaster1' } },
  // { params: { product_category: 'coasters', productid: 'coaster2' } },
  // { params: { product_category: 'fire_bowls', productid: 'fire_bowl1' }},
  // etc...

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
    marginLeft: "auto",
    backgroundColor: "#DE7C5A",
    borderRadius: 0,
    fontSize: "1.3rem",
    pt: "1rem",
    pb: "1rem",
    pl: "3rem",
    pr: "3rem",
    a: {
      color: "#fff",
      textDecoration: "none",
    },
  },
};
