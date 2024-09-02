import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const supabase = createClient();

export async function isAuthenticated() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
}
