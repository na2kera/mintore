import { Post } from "@/app/types/post";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
type Props = {
  post: Post;
  thumbnailUrl: string;
};

const PostCard = async ({ post, thumbnailUrl }: Props) => {
  const supabase = createClient();
  let { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", post.user_id).single();
  console.log(user);
  return (
    <Card
      key={post.id}
      sx={{
        display: "flex",
        mb: 2,
        maxWidth: "800px",
        width: "100%",
        marginLeft: 0,
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Box sx={{ display: "flex", mb: 2 }}>
          <Typography variant="body1" sx={{ mr: 2 }}>
            {user.name} {/* ユーザーIDを表示 */}
          </Typography>
          <Typography variant="body2">{post.activity_date}</Typography>
        </Box>
        <Typography variant="body2">{post.activity_time} minutes</Typography>
        <Typography variant="body1">{post.comment}</Typography>
        {/* サムネイルの画像 */}
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            width={320}
            height={180}
            alt="Movie Thumbnail"
          />
        ) : (
          <Typography variant="body2" color="textSecondary">
            No Thumbnail Available
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default PostCard;
