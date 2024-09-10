import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import { Video } from "../types/video";

type VideoCardProps = {
  video: Video;
};

const BookmarkVideo: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <Box key={video.id} display="flex" justifyContent="center" pt={3}>
      <Box
        display="flex"
        alignItems="center"
        gap={4}
        bgcolor="#F8F8F8"
        width="80%"
        maxWidth={900}
        height="auto"
        p={3}
        borderRadius={2}
        boxShadow="0 2px 4px rgba(0,0,0,0.1)"
      >
        <Box flexShrink={0}>
          <Link href={video.youtube_url}>
            <img
              src={video.thumbnail}
              width={200}
              height={150}
              style={{ objectFit: "cover", borderRadius: "4px" }}
              alt="thumbnail"
            />
          </Link>
        </Box>
        <Box flexGrow={1}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              wordBreak: "break-word",
              overflowWrap: "break-word",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              mb: 2,
            }}
          >
            {video.title}
          </Typography>
          <Link
            href={`/post/${video.youtube_url.split("/")[3]}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              size="medium"
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
