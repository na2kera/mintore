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
