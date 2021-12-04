import { size } from "polished";
import classes from "./product-details.module.css";

function ProductDetails(props) {
  const { id, description, colors, more, sizes } = props;

  const cleaning_desc =
    "הפריט אטום וניתן לניקוי עם מטלית לחה.\nשימוש בכל מוצרי ניקוי קשים או קרצוף קשה יפגע בפני השטח של המוצר.\nאנו ממליצים לנגב כל נוזל כמו יין או קפה בהקדם האפשרי.";

  const exstra = "המוצר מצופה בשכבת הגנה מפני מים וכתמים.";

  const coasters_supply = "ניתן גם להוסיף תחתיות נוספות לפי דרישה.";

  const fireBowl =
    "קערת אש דקורטיבית המתאימה לפנים וחוץ הבית, תדאג לכם לאווירה חמימה ונעימה.\nמגיעה עם פחית בתוספת ציטרונלה להרחקת יתושים המתאימה לחוץ בלבד.\nניתן להחליף לפחית המתאימה לפנים הבית בתוספת 30₪.\nפחית הלהבה מחזיקה עד 5 שעות בעירה. כשהפחית נגמרת ניתן להחליף אותה בחדשה.\nניתן לרכוש פחיות בעירה בנפרד.";

  return (
    <div className={classes.text} dir="rtl">
      <h1>תיאור</h1>
      {description ? <p>{description}</p> : null}
      {id === "fire_bowls" ? <p>{fireBowl}</p> : null}
      {id === "coasters" ? <p>{coasters_supply}</p> : null}
      {id != "candles" ? <p>{exstra}</p> : null}
      {colors ? (
        <p>
          <strong>צבע:</strong> {colors}
        </p>
      ) : (
        <p>
          <strong>צבע:</strong> מגוון צבעים
        </p>
      )}
      {more ? <p>{more}</p> : null}
      {sizes && sizes.h ? (
        <div>
          <strong>מידות:</strong> אורך: {sizes.h} ס"מ, רוחב: {sizes.w} ס"מ,
          עומק: {sizes.d} ס"מ
          <p style={{ marginRight: "2.6rem", fontSize: "0.8rem" }}>
            ייתכנו סטיות קטנות בגודל המוצר בפועל של עד 1 ס"מ
          </p>
        </div>
      ) : sizes ? (
        <div>
          <strong>מידות:</strong> {sizes}
        </div>
      ) : null}
      {id != "candles" ? (
        <p>
          <strong>ניקיון המוצר:</strong> {cleaning_desc}
        </p>
      ) : null}
      {/* <h1>צריכים עזרה</h1> */}
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
