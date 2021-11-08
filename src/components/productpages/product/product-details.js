import classes from "./product-details.module.css";

function ProductDetails(props) {
  const { label, description, colors, prices, more, size, discount } = props;

  // const prices_formatted = prices
  //   .map((price) => `${price.desc}: ${price.reg_price} ש\"ח`)
  //   .join("\n");

  const cleaning_desc =
    ".על מנת לנקות פשוט העבירו סמרטוט לח\nהמוצרים שלנו עמידים בפני נוזלים אך אנו ממליצים לנקות נוזלים וכתמים כמה שיותר מהר\n.על מנת למנוע שינוי באיכות ובגוון המשטח";

  const contact_desc =
    "ניתן ליצור קשר בכל נושא בווטסאפ שמספרו 0525991183\n@concrete_shop_isreal או דרך עמוד האינסטגרם שלנו"; // add link to instagram

  const shipping_desc =
    '.משלוחים באיזור המרכז וירושלים בעלות של 30 ש"ח. משלוח חינם בהזמנה מעל 250 שקלים';

  return (
    <div className={classes.text}>
      <h1>{label}</h1>
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
      {colors ? (
        <div>
          <h3>צבע, גוון</h3>
          <p>{colors}</p>
        </div>
      ) : null}
      {description ? (
        <div>
          <h3>פירוט</h3>
          <p>{description}</p>
        </div>
      ) : null}
      {size ? (
        <div>
          <h3>מידות</h3> <p>{size}</p>
        </div>
      ) : null}
      {more ? (
        <div>
          <h3>מידע נוסף</h3> <p>{more}</p>
        </div>
      ) : null}
      <h3>ניקוי</h3>
      <p>{cleaning_desc}</p>
      <h3>משלוחים</h3>
      <p>{shipping_desc}</p>
      <h3>?צריכים עזרה</h3>
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
