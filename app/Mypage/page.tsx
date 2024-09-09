import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Box, Container, Link, Typography, colors } from "@mui/material";
import { getAuthenticatedUser, isAuthenticated } from "../products/fetcher";
import MyPageList from "../components/MyPageList";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import { relative } from "path";

const supabase = createClient();

const MyPage: React.FC = async () => {
  const user = await isAuthenticated();
  const userData = await getAuthenticatedUser(user.id);

  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .eq("user_id", userData.id);
  if (error) {
    console.error(error);
  }

  !userData && redirect("/protected");

  return (
    <>
      <Header />
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
