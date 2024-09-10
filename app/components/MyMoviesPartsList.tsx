"use client";
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
    <>
      {videos?.map((video) => {
        return (
          <>
            {" "}
            {user && user?.bookmark_list?.includes(video.youtube_url) && (
              <BookmarkVideo video={video} />
            )}{" "}
          </>
        );
      })}
    </>
  );
};

export default MyMoviesPartsList;
