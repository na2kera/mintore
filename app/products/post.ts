import { createClient } from "@/utils/supabase/client";
import { Post } from "../types/post";

const supabase = createClient();

//投稿用のAPI
export const sendPostData = async ({ postData }: { postData: Post }) => {
  const { data, error } = await supabase
    .from("posts")
    .insert([
      {
        user_id: postData.user_id,
        activity_date: postData.activity_date,
        movie_path: postData.movie_path,
        activity_time: postData.activity_time,
        comment: postData.comment,
      },
    ])
    .select();
  if (error) {
    alert("投稿に失敗しました");
  }
  alert("投稿に成功しました");
};
