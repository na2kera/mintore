import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";

type Props = { place: "top" | "mypage" };
const KinnikunLink = ({ place }: Props) => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        position="relative"
      >
        <Image src="/kinnikun.jpg" alt="bodyimage" width={1200} height={880} />
        {/* <Box
          position={"absolute"}
          bgcolor={"#000000"}
          width={"80px"}
          height={"10px"}
          marginBottom={86}
          marginLeft={7.5}
        ></Box> */}
        <Box position={"absolute"} marginRight={70} marginBottom={60}>
          <Link
            href={place == "top" ? "/movieslist/ude" : "/Mypage/Kinnikun/ude"}
            color="#000000"
            fontSize={"60px"}
          >
            腕
          </Link>
        </Box>
        <Box position={"absolute"} marginRight={100} marginBottom={35}>
          <Link
            href={
              place == "top" ? "/movieslist/haikin" : "/Mypage/Kinnikun/haikin"
            }
            color="#000000"
            fontSize={"60px"}
          >
            背筋
          </Link>
        </Box>
        <Box position={"absolute"} marginRight={98} marginTop={20}>
          <Link
            href={place == "top" ? "/movieslist/ashi" : "/Mypage/Kinnikun/ashi"}
            color="#000000"
            fontSize={"60px"}
          >
            脚
          </Link>
        </Box>
        <Box position={"absolute"} marginLeft={80} marginBottom={90}>
          <Link
            href={place == "top" ? "/movieslist/kata" : "/Mypage/Kinnikun/kata"}
            color="#000000"
            fontSize={"60px"}
          >
            肩
          </Link>
        </Box>

        <Box position={"absolute"} marginLeft={100} marginBottom={55}>
          <Link
            href={
              place == "top" ? "/movieslist/kyokin" : "/Mypage/Kinnikun/kyokin"
            }
            color="#000000"
            fontSize={"60px"}
          >
            胸筋
          </Link>
        </Box>
        <Box position={"absolute"} marginLeft={108} marginBottom={5}>
          <Link
            href={
              place == "top" ? "/movieslist/fukkin" : "/Mypage/Kinnikun/fukkin"
            }
            color="#000000"
            fontSize={"60px"}
          >
            腹筋
          </Link>
        </Box>
        <Box position={"absolute"} marginLeft={100} marginTop={60}>
          <Link
            href={
              place == "top"
                ? "/movieslist/zenshin"
                : "/Mypage/Kinnikun/zenshin"
            }
            color="#000000"
            fontSize={"80px"}
          >
            全身
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default KinnikunLink;
