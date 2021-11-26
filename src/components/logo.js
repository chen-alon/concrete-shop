/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import logo from "assets/images/logo_website_trans.png";
import logoWhite from "assets/images/logo_website_white.png";

export default function Logo({ white }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
      }}
    >
      <Image src={white ? logoWhite : logo} alt="concrete-shop" />
    </Link>
  );
}
