import { Post } from "../types/post";
import { User } from "../types/user";
import Image from "next/image";

type Props = {
  post: Post;
  userData: User[];
};
const MyPageThumbNail: React.FC<Props> = async ({ post, userData }) => {
  const watchUrl = post.movie_path.split("watch?v=")[1];

  return (
    <>
      <Image
        src={`https://img.youtube.com/vi/${watchUrl}/0.jpg`}
        width={350}
        height={180}
        alt="thumbnail"
        style={{
          objectFit: "cover",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s ease-in-out",
        }}
        className="hover:transform hover:scale-105"
      />
    </>
  );
};

export default MyPageThumbNail;
