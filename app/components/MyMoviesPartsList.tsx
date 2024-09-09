"use client";
import { usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Video } from "../types/video";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const supabase = createClient();

const MyMoviesPartsList = () => {
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
