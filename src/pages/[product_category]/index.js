import path from "path";
// import fs from "fs/promises";
import CategoryGallery from "sections/category-gallery";
import { products } from "../../../data/products-data.json";
// import { useRouter } from "next/router";
// import { Button, Box } from "theme-ui";
import { rgba } from "polished";

function ProductCategoryPage(props) {
  const { currentProductCategory } = props;
  // const router = useRouter();

  return (
    // <Box sx={{ mt: "5rem", mb: "1rem" }} dir="rtl">
    //     <Button onClick={() => router.push("/")} sx={styles.buttonBack}>
    //       חזרה לעמוד הראשי
    //     </Button>


      <CategoryGallery
        categoryProductsList={currentProductCategory.products_list}
        category_id={currentProductCategory.category_id}
      />
    // </Box>
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

// const styles = {
//   buttonBack: {
//     bg: rgba("#6A7B76", 0.6),
//     fontSize: "1rem",
//     fontWeight: 300,
//     "@media only screen and (max-width: 900px) ": {
//       fontSize: "0.8rem",
//     },
//     ":hover": {
//       bg: "#6A7B76",
//       opacity: "0.8",
//     },
//   },
// };
