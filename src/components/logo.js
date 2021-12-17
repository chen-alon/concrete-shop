/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import logo from "assets/images/logo_black.png";
import logoWhite from "assets/images/logo_white.png";

export default function Logo({ white }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
      }}
    >
      <Image
        src={white ? logoWhite : logo}
        alt="concrete-shop"
        sx={{ height: "53px", width: "164px", cursor: "pointer" }}
      />
    </Link>
  );
}
