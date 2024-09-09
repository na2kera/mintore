import React from "react";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

const page = async () => {
  let { data: Videos, error } = await supabase.from("Videos").select("*");
  console.log(Videos);
  return <div>page</div>;
};

export default page;
