import classes from "./product-details.module.css";

function ProductDetails(props) {
  const { label, description, colors, concrete_desc, prices } = props;
  // const prices_formatted = prices.map((price) => `${price.desc}: ${price.reg_price} ש\"ח`)
  //   .join("\n");

  const cleaning_desc =
    ".על מנת לנקות פשוט העבירו סמרטוט רך\nהמוצרים שלנו עמידים בפני נוזלים אך אנו ממליצים לנקות נוזלים וכתמים כמה שיותר מהר\n.על מנת למנוע שינוי באיכות המשטח";

  const contact_desc =
    "ניתן ליצור קשר בכל נושא בווטסאפ שמספרו 0525991183\n@concrete_shop_isreal או דרך עמוד האינסטגרם שלנו"; // add link to instagram

  const shipping_desc =
    '.משלוחים באיזור המרכז וירושלים בעלות של 30 ש"ח. משלוח חינם בהזמנה מעל 250 שקלים';

  return (
    <div className={classes.text}>
      <h1>{label}</h1>
      {/* <p>{prices_formatted}</p> */}
      <h3>פירוט</h3>
      <p>{description}</p>
      <p>{concrete_desc}</p>
      <p>{colors}</p>
      <h3>ניקוי</h3>
      <p>{cleaning_desc}</p>
      <h3>משלוחים</h3>
      <p>{shipping_desc}</p>
      <h3>?צריכים עזרה</h3>
      <p>{contact_desc}</p>
    </div>
  );
}

export default ProductDetails;
