/** @jsx jsx */
import { jsx, Box, Flex, Heading } from "theme-ui";
import Image from "next/image";
import Link from "next/link";

const BlogPost = ({ post }) => {
  return (
    <Box sx={styles.post}>
      <Flex as="figure" sx={styles.postImage}>
        <Link href={post.link}>
          <a href={post.link} rel="noreferrer">
            <Image
              loading="lazy"
              src={post?.thumb}
              alt={post?.title}
              height={300}
              width={410}
            />
            <Heading as="h4">{post?.title}</Heading>
          </a>
        </Link>
      </Flex>
    </Box>
  );
};

export default BlogPost;

const styles = {
  post: {
    textAlign: "center",
    figure: {
      // alignItems: "center",
    },
    h4: {
      mt: "1rem",
      mb: "1rem",
      fontWeight: 500,
      fontSize: [14, 16, 20],
      lineHeight: 1.5,
      position: "relative",
      fontWeight: "bold",
      color: "#6A7B76",
      cursor: "pointer",
    },
    a: {
      textDecoration: "none",
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
