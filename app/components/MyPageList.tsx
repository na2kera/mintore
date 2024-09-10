import { Box, Card, CardContent, Typography } from "@mui/material";
import { Post } from "../types/post";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import MyPageThumbNail from "./MyPageThumbNail ";
import { User } from "../types/user";
import Link from "next/link";
import Grid from "@mui/material/Grid";

type MyPageListProps = {
  posts: Post[];
  userData: User[];
};

const MyPageList: React.FC<MyPageListProps> = ({ posts, userData }) => {
  return (
    <Box mt={4} mx="auto" maxWidth={1000}>
      <Typography variant="h4" fontWeight="bold" mb={4} color="primary.main">
        My Posts
      </Typography>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Card
            key={post.id}
            sx={{
              mb: 4,
              width: "100%",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Grid container>
                <Grid item xs={12} md={6} sx={{ p: 3 }}>
                  <Box
                    sx={{
                      bgcolor: "grey.100",
                      borderRadius: 2,
                      overflow: "hidden",
                      mb: 2,
                      height: 200,
                    }}
                  >
                    <Link
                      href={`/watch?v=${post.movie_path}`}
                      style={{ display: "block", height: "100%" }}
                    >
                      <MyPageThumbNail post={post} userData={userData} />
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ p: 3, bgcolor: "grey.50" }}>
                  <Typography variant="h6" fontWeight="bold" mb={2}>
                    Comment
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      height: 100,
                      overflow: "auto",
                      bgcolor: "white",
                      p: 2,
                      borderRadius: 1,
                    }}
                  >
                    {post.comment}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={2}>
                    <WatchLaterIcon
                      sx={{ color: "secondary.main", width: 30, height: 30 }}
                    />
                    <Typography variant="h6" color="text.secondary">
                      {post.activity_time} minutes
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body1" color="text.secondary">
          No posts available.
        </Typography>
      )}
    </Box>
  );
};

export default MyPageList;
