import { Box, Card, CardContent, Typography } from "@mui/material";
import { Post } from "../types/post";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { Video } from "../types/video";
import MyPageThumbNail from "./MyPageThumbNail ";
import { User } from "../types/user";
import { use } from "react";

type MyPageListProps = {
  posts: Post[];
  userData: User[];
};

const MyPageList: React.FC<MyPageListProps> = ({ posts, userData }) => {
  return (
    <Box mt={2}>
      <Typography variant="h6">MyPosts</Typography>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Card
            key={post.id}
            sx={{
              mb: 2,
              width: 950,
              height: 300,
            }}
          >
            <CardContent
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 80,
              }}
            >
              <Box
                display={"flex"}
                alignItems={"flex-strat"}
                flexDirection={"column"}
                gap={2}
              >
                <Box bgcolor={"#d9d9d9"} width={350} height={180}>
                  <MyPageThumbNail posts={posts} userData={userData} />
                </Box>
                <Typography fontSize={30}>Movie Title</Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"flex-strat"}
                flexDirection={"column"}
                gap={2}
              >
                <Box
                  bgcolor={"#d9d9d9"}
                  width={350}
                  height={180}
                  borderRadius={10}
                >
                  <Typography variant="h6" component="div" pt={3} ml={3}>
                    Comment: <br />
                    {post.comment}
                  </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <WatchLaterIcon style={{ width: 50, height: 50 }} />
                  <Typography fontSize={30}>
                    {post.activity_time} minutes
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>No posts available.</Typography>
      )}
    </Box>
  );
};

export default MyPageList;
