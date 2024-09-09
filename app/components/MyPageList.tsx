import React from "react";
import { Box, Typography } from "@mui/material";
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
          <Box key={post.id}>
            <Typography>Comment: {post.comment}</Typography>
            <Typography>Activity Time: {post.activity_time} minutes</Typography>
            <Typography>Movie Path: {post.movie_path}</Typography>
          </Box>
        ))
      ) : (
        <Typography>No posts available.</Typography>
      )}
    </Box>
  );
};

export default MyPageList;
