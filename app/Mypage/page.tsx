import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Box, Container, Typography } from "@mui/material";
import { getAuthenticatedUser, isAuthenticated } from "../products/fetcher";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

const MyPage: React.FC = async () => {
  const user = await isAuthenticated();
  const userData = await getAuthenticatedUser(user.id);
  console.log(userData);
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
          <Typography>{userData.tall}</Typography>
          <Typography>{userData.weight}</Typography>
        </Box>
      </Container>
    </>
  );
};

export default MyPage;
