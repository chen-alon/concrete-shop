import classes from "./product-details.module.css";

function ProductDetails(props) {
  const { label, description, colors, concrete_desc } = props;

  return (
    <div className={classes.text}>
      <div>
        <h1>{label}</h1>
      </div>
      <div>
          <p>{description}</p>
          <p>{concrete_desc}</p>
          <p>{colors}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
