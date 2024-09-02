import { Box } from "@mui/material";
import Image from "next/image";

const Body = () => {
  return (
    <>
      <Box>
        <Image
          src="/kinnikun.jpg"
          alt="bodyimage"
          width={300}
          height={110}
          layout="intrinsic"
        />
      </Box>
    </>
  );
};

export default Body;
