import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Link from "next/link";
import Image from "next/image";
import { Video } from "../types/video";
import { User } from "../types/user";
import { sendBookmarkData } from "../products/post";
import { createClient } from "@/utils/supabase/client";

type Props = {
  video: Video;
  userData: User;
};

const MoviePartsList = ({ video, userData }: Props) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const supabase = createClient();

  //ブックマークの状態を変更する関数
  const toggleBookmark = async (youtubeUrl: string) => {
    if (isBookmarked) {
      setIsBookmarked(false);
      //ブックマークを削除する
      userData.bookmark_list = userData.bookmark_list?.filter(
        (bookmark) => bookmark !== youtubeUrl
      );
      await sendBookmarkData({
        userData,
        bookmarkData: userData.bookmark_list ?? [],
      });
    } else {
      setIsBookmarked(true);
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
    <>
      <Box
        key={video.id}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        pt={5}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={3}
          bgcolor={"#F8EFA0"}
          width={"70%"}
          height={"25vh"}
          pl={30}
          position={"relative"}
        >
          {isBookmarked ? (
            <BookmarkIcon onClick={() => toggleBookmark(video.youtube_url)} />
          ) : (
            <BookmarkBorderIcon
              onClick={() => toggleBookmark(video.youtube_url)}
            />
          )}

          <Link href={video.youtube_url}>
            <Image
              src={video.thumbnail}
              width={350}
              height={350}
              alt="thumbnail"
            />
          </Link>
          <Box>
            <Typography fontSize={25}>{video.title}</Typography>
            <Link href={`/post/${video.youtube_url.split("/")[3]}`}>
              <Button variant="contained" color="primary">
                投稿
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MoviePartsList;
