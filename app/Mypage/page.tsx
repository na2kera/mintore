import React from "react";
import Header from "../components/Header";
import { Box, Link, Typography } from "@mui/material";
import {
  fetchPosts,
  getAuthenticatedUser,
  isAuthenticated,
} from "../products/fetcher";
import MyPageList from "../components/MyPageList";
import { redirect } from "next/navigation";
import Image from "next/image";

const MyPage = async () => {
  const user = await isAuthenticated();
  const userData = await getAuthenticatedUser(user.id);

  const posts = await fetchPosts(userData.id);

  !userData && redirect("/protected");

  return (
    <>
      <Box position={"fixed"} pl={170} pt={70}>
        <Link href={"/Mypage/Kinnikun"} color="#000000">
          <Box position={"relative"}>
            <Box>
              <Image
                src={"/kinnikimage.png"}
                width={200}
                height={200}
                alt={"kinnikimage"}
                style={{ position: "relative" }}
              />
            </Box>
            <Box
              position={"absolute"}
              top={0}
              left={0}
              right={0}
              bottom={0}
              display="flex"
              alignItems="center"
              justifyContent="center"
              pt={15}
            >
              <Typography align="center" fontWeight={"bold"}>
                ブックマーク
                <br />
                きんに君
              </Typography>
            </Box>
          </Box>
        </Link>
      </Box>

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
