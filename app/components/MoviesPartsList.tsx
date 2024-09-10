"use client";
import { usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Video } from "../types/video";
import { User } from "../types/user";
import MoviePartsList from "./MoviePartsList";

type Props = {
  userData: User;
};

const MoviesPartsList = ({ userData }: Props) => {
  const pathname = usePathname();

  const supabase = createClient();

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
        return <MoviePartsList video={video} userData={userData} />;
      })}
    </>
  );
};

export default MoviesPartsList;
