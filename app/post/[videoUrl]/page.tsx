"use client";

import {
  getAuthenticatedUser,
  isAuthenticated,
} from "@/app/products/clientFetcher";
import Form from "@/components/post/Form";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

type UserData = {
  id: string;
  name: string;
  created_at?: string;
  height: number;
  weight: number;
  bookmark_list?: string[];
};

const VideoPost = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await isAuthenticated();
      setUser(fetchedUser);
      const userData = await getAuthenticatedUser(fetchedUser.id);
      setUserData(userData);
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{userData && <Form userData={userData} isVideo />}</>;
};

export default VideoPost;
