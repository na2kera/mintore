import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { getAllPosts } from "../products/fetcher";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CreateIcon from "@mui/icons-material/Create";
import Link from "next/link";

// YouTubeの動画IDをURLから抽出
const extractYouTubeId = (url: string) => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|v\/|e\/|watch\?v=|embed\/|user\/\S+\/)?|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// YouTubeのサムネイルURLを生成
const getYouTubeThumbnailUrl = (videoId: string) => {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

export type Post = {
  user_id: string;
  activity_date: string;
  movie_path: string;
  activity_time: number;
  comment: string;
  id: number;
  thumbnail: string | null;
};

const TimeLine = async () => {
  const allPosts = await getAllPosts();
  return (
    <Box display="flex" bgcolor="#f5f5f5">
      {/* サイドバー */}
      <Box
        width="20%"
        bgcolor="#fff3b0"
        padding={2}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <Link href="/">
          <Typography variant="h5" gutterBottom>
            みんトレ
          </Typography>
        </Link>
        <List>
          {/* トップページリンク */}
          <Link href="/">
            <ListItem component={"div"}>
              <ListItemIcon>
                <FitnessCenterIcon />
              </ListItemIcon>
              <ListItemText primary="top" />
            </ListItem>
          </Link>

          {/* タイムラインリンク */}
          <Link href="/timeline">
            <ListItem component={"div"}>
              <ListItemIcon>
                <TimelineIcon />
              </ListItemIcon>
              <ListItemText primary="timeline" />
            </ListItem>
          </Link>

          {/* マイページリンク */}
          <Link href="/mypage">
            <ListItem component={"div"}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="mypage" />
            </ListItem>
          </Link>
        </List>
        {/* 投稿リンク */}
        <Link href="/post">
          <ListItem component={"div"}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="post" />
          </ListItem>
        </Link>
      </Box>

      {/* タイムライン */}
      <Box
        flexGrow={1}
        bgcolor="#fff9c4"
        padding={2}
        sx={{
          marginLeft: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // 左寄せ
        }}
      >
        <Typography variant="h4" gutterBottom>
          timeline
        </Typography>

        {/* 投稿 */}
        {allPosts?.map((post) => {
          const videoId = extractYouTubeId(post.movie_path);
          const thumbnailUrl = videoId
            ? getYouTubeThumbnailUrl(videoId)
            : post.thumbnail;

          return (
            <Card
              key={post.id}
              sx={{
                display: "flex",
                mb: 2,
                maxWidth: "800px",
                width: "100%", // カードが横幅を全て使う
                marginLeft: 0, // 左寄せ
              }}
            >
              <Avatar sx={{ bgcolor: "purple", m: 2 }}>
                {post.user_id.slice(0, 2)}
              </Avatar>
              <CardContent sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", mb: 2 }}>
                  <Typography variant="body1" sx={{ mr: 2 }}>
                    {post.user_id}
                  </Typography>
                  <Typography variant="body2">{post.activity_date}</Typography>
                </Box>
                <Typography variant="body2">
                  {post.activity_time} minutes
                </Typography>
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
        })}
      </Box>

      {/* 投稿ボタン */}
      <Box
        position="fixed"
        bottom={0}
        width="100%"
        bgcolor="#a1887f"
        padding={1}
        display="flex"
        justifyContent="center"
      >
        <Link href="/post">
          <Button variant="contained" color="primary">
            投稿
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default TimeLine;
