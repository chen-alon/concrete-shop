import path from "path";
import fs from "fs/promises";
import CategoryList from "../../components/productpage/category-items-list";

function ProductCategoryPage(props) {
  const { currentProductCategory } = props;

  return (
    <div>
      <CategoryList
        categoryProductsList={currentProductCategory.products_list}
        category_id={currentProductCategory.category_id}
      />
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
