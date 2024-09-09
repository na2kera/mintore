import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Box, Container, Typography } from "@mui/material";
import { getAuthenticatedUser, isAuthenticated } from "../products/fetcher";
import MyPageList from "../components/MyPageList";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

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
