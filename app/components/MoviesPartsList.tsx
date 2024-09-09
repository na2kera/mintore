"use client";
import { usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Video } from "../types/video";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const supabase = createClient();

const MoviesPartsList = () => {
  const pathname = usePathname();

  const [videos, setVideos] = useState<Video[]>([]);

  const result = location.href.split("/");
  const bodyparts = result[result.length - 1];

  useEffect(() => {
    const fetchBodyPartsVideos = async () => {
      let { data: Videos, error } = await supabase
        .from("Videos")
        .select("*")
        .eq("body_parts", bodyparts);

      Videos && setVideos(Videos);
    };
    fetchBodyPartsVideos();
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

              <Link href={video.youtube_url}>
                <Image
                  src={video.thumbnail}
                  width={350}
                  height={350}
                  alt="thumbnail"
                />
              </Link>
              <Box>
                <Typography fontSize={25}>{video.title}</Typography>
                <Link href={`/post/${video.youtube_url.split("/")[3]}`}>
                  <Button variant="contained" color="primary">
                    投稿
                  </Button>
                </Link>
              </Box>

            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default MoviesPartsList;
