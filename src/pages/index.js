import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Banner from "sections/banner";
import Clients from "sections/clients";
import FeaturedSpace from "sections/featured-space";
import OurCustomer from "sections/our-customer";
import Gallery from "sections/gallery";
import Blog from "sections/blog";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Concrete Shop" />
      <Banner />
      <Gallery />
      <FeaturedSpace />
      <Clients />
      <OurCustomer />
      <Blog />
    </ThemeProvider>
  );
}
