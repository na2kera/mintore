//データベースから読み取る用の関数を書いておく
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const supabase = createClient();

//ユーザーがログインしているかを判定する関数
export async function isAuthenticated() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return user;
}

// ログイン済のユーザーの情報を取得する関数
export async function getAuthenticatedUser(userId: string) {
  let { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();
  if (!user) {
    console.error(error);
  }
  return user;
}

// ユーザーが投稿したデータを取得する関数
export async function fetchPosts(userId: string) {
  let { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  console.log(posts);
  if (!posts) {
    console.error(error);
  }
  return posts;
}

//全体の投稿を取得する関数
export async function getAllPosts() {
  let { data: posts, error } = await supabase.from("posts").select("*");
  if (error) {
    console.error(error);
  }
  return posts;
}
