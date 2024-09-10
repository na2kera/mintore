import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { Video } from "../types/video";

type VideoCardProps = {
  video: Video;
};

const BookmarkVideo: React.FC<VideoCardProps> = ({ video }) => {
  return (
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
        <Box>
          <Link href={video.youtube_url}>
            <img
              src={video.thumbnail}
              width={350}
              height={350}
              style={{ objectFit: "cover" }}
              alt="thumbnail"
            />
          </Link>
        </Box>
        <Box maxWidth={"50%"}>
          <Typography
            fontSize={25}
            style={{
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {video.title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BookmarkVideo;
