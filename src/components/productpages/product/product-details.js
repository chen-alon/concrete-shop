import classes from "./product-details.module.css";

function ProductDetails(props) {
  const { label, description, colors, concrete_desc, prices } = props;
  console.log(prices);
  const prices_formatted = prices.map(
    (price) =>
      `${price.desc}: ${price.reg_price} ש\"ח`
  ).join("\n");

  return (
    <div className={classes.text}>
      <div>
        <h1>{label}</h1>
      </div>
      <div>
        <p>{description}</p>
        <p>{concrete_desc}</p>
        <p>{colors}</p>
        <p>{prices_formatted}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
