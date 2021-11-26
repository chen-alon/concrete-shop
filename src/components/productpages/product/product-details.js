import { size } from "polished";
import classes from "./product-details.module.css";

function ProductDetails(props) {
  const { description, colors, price, more, sizes, discount } = props;

  const coasters_desc = "";

  // const prices_formatted = prices
  //   .map((price) => `${price.desc}: ${price.reg_price} ש\"ח`)
  //   .join("\n");

  const cleaning_desc =
    "הפריט אטום וניתן לניקוי עם מטלית לחה. שימוש בכל מוצרי ניקוי קשים או קרצוף קשה יפגע בפני השטח של היצירה שלך.\nאנו ממליצים לנגב כל מזהם חזק כמו יין או קפה בהקדם האפשרי.";

  const contact_desc =
    "ניתן ליצור קשר בכל נושא בווטסאפ שמספרו 0525991183\n@concrete_shop_il או דרך עמוד האינסטגרם שלנו"; // add link to instagram

  return (
    <div className={classes.text} dir="rtl">
      {/* {discount ? (
        <div>
          <p style={{ textDecoration: "line-through" }}>{prices_formatted}</p>
          <h3>מבצע</h3>
          <p>{discount_formatted}</p>
        </div>
      ) : (
        <div>
          <p>{prices_formatted}</p>
        </div>
      )} */}
      {/* <p>{prices_formatted}</p> */}
      <h1>תיאור</h1>

      {description ? <p>{description}</p> : null}

      {colors ? (
        <p>
          <strong>צבע:</strong> {colors}
        </p>
      ) : null}
      {more ? <p>{more}</p> : null}
      {sizes ? (
        <div>
          <strong>מידות:</strong> אורך: {sizes.h} ס"מ, רוחב: {sizes.w} ס"מ,
          עומק: {sizes.d} ס"מ
          <p style={{ marginRight: "3.2rem", fontSize: "0.8rem" }}>
            * ייתכנו סטיות קטנות בגודל המוצר בפועל של עד 1 ס"מ
          </p>
        </div>
      ) : null}
      {/* {path === "candles" ? <p>ddd</p> : null} */}
      <p>
        <strong>ניקיון המוצר:</strong> {cleaning_desc}
      </p>

      <h1>צריכים עזרה</h1>
      <p>{contact_desc}</p>
      {/* <a
        href="https://www.instagram.com/concrete_shop_israel/"
        target="_blank"
        rel="noreferrer"
      >
        instegram
      </a> */}
    </div>
  );
}

export default ProductDetails;
