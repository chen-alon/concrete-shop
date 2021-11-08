/** @jsx jsx */
import { jsx, Box, Flex, Image, Heading, Text } from "theme-ui";
import { Link } from "components/link";
import { rgba } from "polished";

const BlogPost = ({ post }) => {
  return (
    <Box sx={styles.post}>
      <Flex as="figure" sx={styles.postImage}>
        <Image loading="lazy" src={post?.thumb} alt={post?.title} />
      </Flex>
      <Box sx={styles.meta}>
        <Heading as="h4">
          <Link path={post.link}>{post?.title}</Link>
        </Heading>
        {/* <Text as="span" sx={styles.commentCount}>
          <Image loading="lazy" src={chat} alt="chat icon" />
          {post?.commentCount} Comments
        </Text> */}
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
    margin: "1rem",
    alignItems: "center",
    justifyItems: "center",
  },
  commentCount: {
    display: "flex",
    alignItems: "center",
    mt: ["10px", "10px", "10px", "15px", "20px"],
    fontWeight: 500,
    fontSize: [13, 14, 14, 16],
    lineHeight: 1.6,
    color: rgba("#343D48", 0.8),
    img: {
      mr: "8px",
    },
  },
};
