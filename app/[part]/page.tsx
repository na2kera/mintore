import React from "react";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

const page = async () => {
  let { data: Videos, error } = await supabase.from("Videos").select("*");
  console.log(Videos);
  return (
    <>
      {Videos?.map((video) => {
        return (
          <div key={video.id}>
            <h1>{video.title}</h1>
            <p>{video.description}</p>
            <video controls>
              <source src={video.video_path} type="video/mp4" />
            </video>
          </div>
        );
      })}
    </>
  );
};

export default page;
