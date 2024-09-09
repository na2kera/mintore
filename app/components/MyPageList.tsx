import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Post } from "../types/post";

type MyPageListProps = {
  posts: Post[];
};

const MyPageList: React.FC<MyPageListProps> = ({ posts }) => {
  return (
    <Box>
      <Typography variant="h6">Posts:</Typography>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Card
            key={post.id}
            sx={{
              mb: 2,
            }}
          >
            <CardContent>
              <Typography variant="h6" component="div">
                Comment: {post.comment}
              </Typography>
              <Typography>
                Activity Time: {post.activity_time} minutes
              </Typography>
              <Typography>Movie Path: {post.movie_path}</Typography>
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
