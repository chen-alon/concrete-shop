import classes from "./category-item.module.css";
import Link from "next/link";
// import Image from 'next/image';

function CategoryItem(props) {
  const { title, imagePath, path } = props;

  return (
    <Link href={path}>
      <div>
        <div className={classes.item}>
          {/* <h1>{title}</h1> */}
          {/* <Image src={imagePath} alt={title} width={640} height={320} /> */}
          <img src={imagePath} alt={title} />
        </div>
        <div className={classes.content}>
          <h2>{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default CategoryItem;
