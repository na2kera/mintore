import React from "react";
import { getAuthenticatedUser, isAuthenticated } from "../products/fetcher";
import Form from "@/components/post/Form";

const page = async () => {
  const user = await isAuthenticated();
  const userData = await getAuthenticatedUser(user.id);
  return <Form userData={userData} />;
};

export default page;
