"use client";

import MoviesPartsList from "@/app/components/MoviesPartsList";
import {
  getAuthenticatedUser,
  isAuthenticated,
} from "@/app/products/clientFetcher";

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

const page = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await isAuthenticated();
      setUser(fetchedUser);
      const userData = await getAuthenticatedUser(fetchedUser.id);
      setUserData(userData);
    };
    fetchUser();
  }, []);

  return <>{userData && <MoviesPartsList userData={userData} />}</>;
};

export default page;
