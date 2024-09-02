import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";

const Body = () => {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <Box position={"relative"}>
          <Image
            src="/kinnikun.jpg"
            alt="bodyimage"
            width={1200}
            height={880}
          />
        </Box>
        {/* <Box
          position={"absolute"}
          bgcolor={"#000000"}
          width={"80px"}
          height={"10px"}
          marginTop={11.5}
          marginLeft={7.5}
        ></Box> */}

        <Link
          href="/ude"
          position={"absolute"}
          paddingRight={70}
          paddingTop={20}
          color="#000000"
          fontSize={"60px"}
        >
          腕
        </Link>
        <Link
          href="/haikin"
          position={"absolute"}
          paddingRight={98}
          paddingTop={34}
          color="#000000"
          fontSize={"60px"}
        >
          背筋
        </Link>
        <Link
          href="/ashi"
          position={"absolute"}
          paddingRight={98}
          paddingTop={60}
          color="#000000"
          fontSize={"60px"}
        >
          脚
        </Link>
        <Link
          href="/kata"
          position={"absolute"}
          paddingLeft={78}
          paddingTop={8}
          color="#000000"
          fontSize={"60px"}
        >
          肩
        </Link>
        <Link
          href="/kyokin"
          position={"absolute"}
          paddingLeft={96}
          paddingTop={25}
          color="#000000"
          fontSize={"60px"}
        >
          胸筋
        </Link>
        <Link
          href="/hukkin"
          position={"absolute"}
          paddingLeft={105}
          paddingTop={48}
          color="#000000"
          fontSize={"60px"}
        >
          腹筋
        </Link>
        <Link
          href="/zenshin"
          position={"absolute"}
          paddingLeft={120}
          paddingTop={80}
          color="#000000"
          fontSize={"60px"}
        >
          全身
        </Link>
      </Box>
    </>
  );
};

export default Body;
