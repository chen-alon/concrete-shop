import path from "path";
import fs from "fs/promises";
import Link from "next/link";

function ProductCategoryPage(props) {
  const { currentProductCategory } = props;

  return (
    <ul>
      {currentProductCategory.products_list.map((product) => (
        <li key={product.product_id}>
          <Link
            href={`/${currentProductCategory.category_id}/${product.product_id}`}
          >
            {product.product_id}
          </Link>
        </li>
      ))}
    </ul>
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

  const data = await getData();

  const productCategory = data.products.find(
    (product) => product.category_id === productCategoryId
  );

  return {
    props: {
      currentProductCategory: productCategory,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const productsCategoryIds = data.products.map(
    (product) => product.category_id
  );
  const productsInParams = productsCategoryIds.map((product) => ({
    params: { product_category: product },
  }));

  return {
    paths: productsInParams,
    fallback: false,
  };
}

export default ProductCategoryPage;
