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
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import TimelineIcon from "@mui/icons-material/Timeline";

const TimeLine = () => {
  return (
    <Box display="flex" height="100vh" bgcolor="#f5f5f5">
      {/*サイドバー*/}
      <Box width="20%" bgcolor="#fff3b0" padding={2}>
        <Typography variant="h5" gutterBottom>
          みんトレ
        </Typography>
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="mypage" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FitnessCenterIcon />
            </ListItemIcon>
            <ListItemText primary="training" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText primary="timeline" />
          </ListItem>
        </List>
      </Box>

      {/*タイムライン*/}
      <Box flexGrow={1} bgcolor="#fff9c4" padding={2}>
        <Typography variant="h4" gutterBottom>
          timeline
        </Typography>

        {/*投稿*/}
        <Card sx={{ display: "flex", mb: 2 }}>
          <Avatar sx={{ bgcolor: "purple", m: 2 }}>Ic</Avatar>
          <CardContent sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", mb: 2 }}>
              <Typography variant="body1" sx={{ mr: 2 }}>
                name
              </Typography>
              <Typography variant="body2">date</Typography>
            </Box>
            <Typography variant="body2">time</Typography>
            <Typography variant="body1">一言コメント</Typography>
            {/* サムネイルの箱 */}
            <Image
              src="/sddefault.jpg"
              width={300}
              height={150}
              alt="Picture of the author"
            />
          </CardContent>
        </Card>
      </Box>

      {/*投稿ボタン*/}
      <Box
        position="fixed"
        bottom={0}
        width="100%"
        bgcolor="#a1887f"
        padding={1}
        display="flex"
        justifyContent="center"
      >
        <Button variant="contained" color="primary">
          投稿
        </Button>
      </Box>
    </Box>
  );
};

export default TimeLine;
