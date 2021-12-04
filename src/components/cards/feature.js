/** @jsx jsx */
import Image from "components/image";
import { jsx, Box, Heading, Text } from "theme-ui";

const Feature = ({ data: feature }) => {
  return (
    <Box key={feature.id} sx={styles.featureItem}>
      <Image loading="lazy" src={feature.icon} alt={feature.title} />
      <Heading as="h3">{feature.title}</Heading>
      <Text as="p">{feature.description}</Text>
    </Box>
  );
};

export default Feature;

const styles = {
  featureItem: {
    textAlign: ["center", null, null, null, "center"],
    h3: {
      lineHeight: 2.5,
      fontWeight: 500,
      letterSpacing: "heading",
      fontSize: [20, null, null, null, null, 22],
    },
    p: {
      fontSize: [null, null, null, null, 14, 17],
      lineHeight: 1.47,
    },
  },
};
