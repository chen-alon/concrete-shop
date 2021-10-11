import { useRouter } from "next/router";
// import data from "../data/products-data";
import path from "path";
import fs from "fs/promises";

function ProductIdPage(props) {
  const { currentProduct } = props;

  return (
    <div>
      <h1>{currentProduct.label}</h1>
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

  const data = await getData();

  const product = data.products.find(
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
  const productsIds = data.products.map((product) => product.product_id);
  const productsInParams = productsIds.map((product) => ({
    params: { productid: product },
  }));

  return {
    paths: productsInParams,
    fallback: false,
  };
}

export default ProductIdPage;
