"use client";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Video } from "../types/video";

import {
  getAuthenticatedUser,
  isAuthenticated,
} from "../products/clientFetcher";

import BookmarkVideo from "./BookmarkVideo";
import { User } from "../types/user";

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
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      {videos?.map((video) => {
        return (
          user &&
          user?.bookmark_list?.includes(video.youtube_url) && (
            <Box
              key={video.id}
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              pt={5}
            >
              <Box width="80%" maxWidth="1000px">
                <BookmarkVideo video={video} userData={user} />
              </Box>
            </Box>
          )
        );
      })}
    </Box>
  );
};

export default MyMoviesPartsList;
