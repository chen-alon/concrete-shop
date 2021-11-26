import path from "path";
// import fs from "fs/promises";
import CategoryGallery from "sections/category-gallery";
import { products } from "../../../data/products-data.json";

function ProductCategoryPage(props) {
  const { currentProductCategory } = props;

  return (
    <CategoryGallery
      categoryProductsList={currentProductCategory.products_list}
      category_id={currentProductCategory.category_id}
    />
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
  const productCategoryId = params.product_category;

  // const data = await getData();

  const productCategory = products.find(
    (product) => product.category_id === productCategoryId
  );
  
  return {
    props: {
      currentProductCategory: productCategory,
    },
  };
}

export async function getStaticPaths() {
  // const data = await getData();
  const productsCategoryIds = products.map((product) => product.category_id);
  const productsInParams = productsCategoryIds.map((product) => ({
    params: { product_category: product },
  }));

  return {
    paths: productsInParams,
    fallback: false,
  };
}

export default ProductCategoryPage;
