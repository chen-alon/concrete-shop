/** @jsx jsx */
import { jsx, Box, Flex, Heading } from "theme-ui";
import Image from "next/image";
import Link from "next/link";

const BlogPost = ({ post }) => {
  return (
    <Box sx={styles.post}>
      <Flex as="figure" sx={styles.postImage}>
        <Image
          loading="lazy"
          src={post?.thumb}
          alt={post?.title}
          height={300}
          width={410}
        />
      </Flex>
      <Box sx={styles.meta}>
        <Heading as="h4">
          <Link href={post.link}>{post?.title}</Link>
        </Heading>
      </Box>
    </Box>
  );
};

export default BlogPost;

const styles = {
  post: {
    textAlign: "center",
    figure: {
      alignItems: "center",
    },
    h4: {
      mt: "1rem",
      mb: "1rem",
      fontWeight: 500,
      fontSize: [14, 16, 20],
      lineHeight: 1.5,
      position: "relative",
      a: {
        cursor: "pointer",
        color: "text",
        textDecoration: "none",
      },
    },
  },
  postImage: {
    display: "flex !important",
    justifyContent: "center",
    margin: "0.5rem",
    alignItems: "center",
    justifyItems: "center",
  },
};
