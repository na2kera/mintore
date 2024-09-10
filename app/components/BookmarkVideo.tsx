import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Video } from "../types/video";
import { createClient } from "@/utils/supabase/client";
import { User } from "../types/user";
import { sendBookmarkData } from "../products/post";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Link from "next/link";
import Image from "next/image";

type VideoCardProps = {
  video: Video;
  userData: User;
};

const BookmarkVideo: React.FC<VideoCardProps> = ({ video, userData }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const supabase = createClient();

  //ブックマークの状態を変更する関数
  const toggleBookmark = async (youtubeUrl: string) => {
    if (userData.bookmark_list?.includes(youtubeUrl)) {
      setIsBookmarked(!isBookmarked);
      //ブックマークを削除する
      userData.bookmark_list = userData.bookmark_list?.filter(
        (bookmark) => bookmark !== youtubeUrl
      );
      await sendBookmarkData({
        userData,
        bookmarkData: userData.bookmark_list ?? [],
      });
    } else {
      setIsBookmarked(!isBookmarked);
      //ブックマークを追加する
      userData.bookmark_list = userData.bookmark_list
        ? [...userData.bookmark_list, youtubeUrl]
        : [youtubeUrl];
      await sendBookmarkData({
        userData,
        bookmarkData: userData.bookmark_list ?? [],
      });
    }
  };
  return (
    <Box
      key={video.id}
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={5}
    >
      <Box
        display="flex"
        alignItems="center"
        gap={4}
        bgcolor="#f5f5f5"
        width="80%"
        maxWidth="1000px"
        height="auto"
        p={4}
        borderRadius={2}
        boxShadow={2}
      >
        <Box position="relative">
          <Link href={video.youtube_url}>
            <Image
              src={video.thumbnail}
              width={250}
              height={140}
              alt="thumbnail"
              style={{ borderRadius: "8px" }}
            />
          </Link>
          <Box
            position="absolute"
            top={8}
            left={8}
            bgcolor="rgba(255, 255, 255, 0.8)"
            borderRadius="50%"
            p={0.5}
          >
            {userData.bookmark_list?.includes(video.youtube_url) ? (
              <BookmarkIcon
                onClick={() => toggleBookmark(video.youtube_url)}
                sx={{
                  cursor: "pointer",
                  color: "blue",
                  fontSize: "1.5rem",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              />
            ) : (
              <BookmarkBorderIcon
                onClick={() => toggleBookmark(video.youtube_url)}
                sx={{
                  cursor: "pointer",
                  color: "blue",
                  fontSize: "1.5rem",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              />
            )}
          </Box>
        </Box>
        <Box flexGrow={1}>
          <Typography fontSize={20} fontWeight="bold" mb={2}>
            {video.title}
          </Typography>
          <Link href={`/post/${video.youtube_url.split("/")[3]}`}>
            <Button
              variant="contained"
              size="small"
              color="success"
              sx={{
                backgroundColor: "#4CAF50",
                "&:hover": {
                  backgroundColor: "#45a049",
                },
              }}
            >
              投稿
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default BookmarkVideo;
