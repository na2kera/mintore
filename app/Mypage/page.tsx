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

  }

  const posts = await fetchPosts(userData.id);


  !userData && redirect("/protected");

  return (
    <>
      <Header />
      <Box>
        <Box
          paddingLeft={0}
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          gap={2}
        >
          <Box
            border={"1px solid #ccc"}
            padding={2}
            width={"100%"}
            maxWidth={300}
            sx={{
              textAlign: "center",
            }}
          >
            <Typography mt={15} variant="h4">
              {userData.name}
            </Typography>
            <Typography my={15} variant="h3">
              {userData.height}cm
            </Typography>
            <Typography variant="h3">{userData.weight}kg</Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            flex={1}
            marginLeft={2}
          >
            {posts && <MyPageList posts={posts} />}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MyPage;
