import Form from "@/components/post/Form";
import { getAuthenticatedUser, isAuthenticated } from "../products/fetcher";

const page = async () => {
  const user = await isAuthenticated();
  const userData = await getAuthenticatedUser(user.id);

  return (
    <>
      <Form userData={userData} />
    </>
  );
};

export default page;
