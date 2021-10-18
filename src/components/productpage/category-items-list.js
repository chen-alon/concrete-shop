import classes from "./category-items-list.module.css";
import CategoryItem from "../../components/productpage/category-item";

function CategoryList(props) {
  const { categoryProductsList } = props;
  const { category_id } = props;

  return (
    <ul className={classes.list}>
      {categoryProductsList.map((product) => (
          <CategoryItem
            key={product.product_id}
            title={product.label}
            imagePath={product.image_path}
            path={`/${category_id}/${product.product_id}`}
          />
      ))}
    </ul>
  );
}

export default CategoryList;
