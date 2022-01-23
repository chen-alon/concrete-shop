import { size } from "polished";
import classes from "./product-details.module.css";

function ProductDetails(props) {
  const { id, description, colors, more, sizes } = props;

  const cleaning_desc =
    "הפריט אטום וניתן לניקוי עם מטלית לחה.\nשימוש בכל מוצרי ניקוי קשים או קרצוף קשה יפגע בפני השטח של המוצר.\nמומלץ לנגב כל נוזל כמו יין או קפה בהקדם האפשרי.";

  const exstra = "המוצר מצופה בשכבת הגנה מפני מים וכתמים.";

  const coasters_supply = "ניתן להוסיף תחתיות בודדות נוספות לפי דרישה.";

  const fireBowl =
    "קערת אש דקורטיבית המתאימה לפנים וחוץ הבית, תדאג לכם לאווירה חמימה ונעימה.\nמגיעה עם פחית להבה בתוספת ציטרונלה להרחקת יתושים.\nפחית הלהבה מחזיקה עד 6 שעות בעירה.\nמגיעה בצבעי להבה אדום, צהוב, ירוק או כתום, ניתן לבחור לפי המלאי הקיים בחנות.\nכשהפחית נגמרת ניתן להחליף אותה בחדשה. ניתן לרכוש פחיות בעירה בנפרד.";

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
        <div>
          <h1>ניקיון המוצר</h1>
          <p>{cleaning_desc}</p>
        </div>
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
