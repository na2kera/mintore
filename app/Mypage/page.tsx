import React from "react";
import Header from "../components/Header";
import { Box, Container, Typography } from "@mui/material";
import {
  fetchPosts,
  getAuthenticatedUser,
  isAuthenticated,
} from "../products/fetcher";
import MyPageList from "../components/MyPageList";
import { redirect } from "next/navigation";

const MyPage = async () => {
  const user = await isAuthenticated();
  const userData = await getAuthenticatedUser(user.id);
  const posts = await fetchPosts(userData.id);

  !userData && redirect("/protected");

  return (
    <>
      <Header />
      <Container>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-start"}
        >
          <Typography>{userData.name}</Typography>
          <Typography>{userData.height}</Typography>
          <Typography>{userData.weight}</Typography>

          {posts && <MyPageList posts={posts} />}
        </Box>
      </Container>
    </>
  );
};

export default MyPage;
