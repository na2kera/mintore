import { createClient } from "@/utils/supabase/server";
import { Post } from "../types/post";
import { User } from "../types/user";
import { Video } from "../types/video";
import { Link } from "@mui/material";
import Image from "next/image";

type Props = {
  posts: Post[];
  userData: User[];
};
const MyPageThumbNail: React.FC<Props> = async ({ posts, userData }) => {
  const supabase = createClient();

  let { data: Videos, error } = await supabase.from("Videos").select("*");
  console.log(Videos);

  const isMatchFound = posts.some(
    (post) =>
      Videos &&
      Videos.some((video: Video) => post.movie_path === video.youtube_url)
  );
  console.log(isMatchFound);

  if (isMatchFound) {
    return (
      <>
        {/* <Link href={post.movie_path}>
          <Image
            src={video.thumbnail}
            width={350}
            height={350}
            alt="thumbnail"
          />
        </Link> */}
      </>
    );
  }
};

export default MyPageThumbNail;
