"use client";
import { usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Video } from "../types/video";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { User } from "@supabase/supabase-js";
import {
  getAuthenticatedUser,
  isAuthenticated,
} from "../products/clientFetcher";

const supabase = createClient();

const MyMoviesPartsList = () => {
  const pathname = usePathname();

  const [videos, setVideos] = useState<Video[]>([]);
  const [user, setUser] = useState<User>();

  const result = location.href.split("/");
  const bodyparts = result[result.length - 1];

  useEffect(() => {
    const fetchUser = async () => {
      const user = await isAuthenticated();
      setUser(user);
      if (user) {
        const userData = await getAuthenticatedUser(user.id);
        setUser(userData);
        console.log(userData);
      }
    };

    const fetchBodyPartsVideos = async () => {
      let { data: Videos, error } = await supabase
        .from("Videos")
        .select("*")
        .eq("body_parts", bodyparts);

      Videos && setVideos(Videos);
    };
    fetchBodyPartsVideos();
    fetchUser();
  }, []);

  return (
    <>
      {videos?.map((video) => {
        return (
          <Box
            key={video.id}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            pt={5}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={3}
              bgcolor={"#F8EFA0"}
              width={"70%"}
              height={"25vh"}
              pl={30}
              position={"relative"}
            >
              <Box>
                <Link href={video.youtube_url}>
                  <Image
                    src={video.thumbnail}
                    width={350}
                    height={350}
                    style={{ objectFit: "cover" }}
                    alt="thumbnail"
                  />
                </Link>
              </Box>
              <Box maxWidth={"50%"}>
                <Typography
                  fontSize={25}
                  style={{
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  {video.title}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default MyMoviesPartsList;
