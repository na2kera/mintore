import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import TimelineIcon from "@mui/icons-material/Timeline";

const page = () => {
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
export default page;
