import path from "path";
import fs from "fs/promises";

function ProductIdPage(props) {
  const { currentProduct } = props;
  // const { currentCategory } = props;
  // console.log(props);

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