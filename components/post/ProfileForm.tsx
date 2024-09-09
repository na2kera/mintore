"use client";
import { sendProfileData } from "@/app/products/post";
import {
  FormControl,
  Input,
  InputLabel,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { User } from "@supabase/supabase-js";
import React, { useState } from "react";

type Props = {
  user: User;
};

const ProfileForm = ({ user }: Props) => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const profileData = {
    id: user.id,
    name: name,
    height: height,
    weight: weight,
  };

  const sendData = async () => {
    await sendProfileData({ profileData });
  };

  return (
    <Box
      component="form"
      sx={{ width: "100%", maxWidth: "400px", margin: "100px auto" }}
    >
      <Typography variant="h5" sx={{ mb: 8 }}>
        プロフィールを入力してください
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel htmlFor="name-input" shrink>
          名前
        </InputLabel>
        <Input
          id="name-input"
          aria-describedby="name-helper-text"
          onChange={(e) => setName(e.target.value)}
          sx={{ mt: 2 }}
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel htmlFor="height-input" shrink>
          身長 (cm)
        </InputLabel>
        <Input
          id="height-input"
          aria-describedby="height-helper-text"
          type="number"
          inputProps={{ min: 0, step: 1 }}
          onChange={(e) => setHeight(Number(e.target.value))}
          sx={{ mt: 2 }}
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel htmlFor="weight-input" shrink>
          体重 (kg)
        </InputLabel>
        <Input
          id="weight-input"
          aria-describedby="weight-helper-text"
          sx={{ mt: 2 }}
          type="number"
          inputProps={{ min: 0, step: 1 }}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </FormControl>
      <Button
        variant="contained"
        onClick={sendData}
        sx={{
          mt: 4,
          width: "100%",
          backgroundColor: "#1976d2",
          color: "#115293",
          "&:hover": {
            backgroundColor: "#115293",
          },
          padding: "10px 0",
          fontSize: "1rem",
          fontWeight: "bold",
          textTransform: "none",
        }}
      >
        送信
      </Button>
    </Box>
  );
};

export default ProfileForm;
