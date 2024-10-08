"use client";

import React, { useEffect, useState } from "react";
import { User } from "@/app/types/user";
import { sendPostData } from "@/app/products/post";
import { useSearchParams } from "next/navigation";
import Header from "../Header";

type Props = { userData: User; isVideo?: boolean };

const Form = ({ userData, isVideo = false }: Props) => {
  const [activityDate, setActivityDate] = useState<string>("");
  const [moviePath, setMoviePath] = useState<string>("");
  const [activityTime, setActivityTime] = useState<number>(30);
  const [comment, setComment] = useState<string>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    if (isVideo) {
      const videoUrl = searchParams.get("v");
      console.log(videoUrl);
      setMoviePath(`https://www.youtube.com/watch?v=${videoUrl}`);
    }
  }, [isVideo, searchParams]);

  const postData = {
    user_id: userData.id,
    activity_date: activityDate,
    movie_path: moviePath,
    activity_time: activityTime,
    comment: comment,
  };

  const submitReset = async () => {
    postData && (await sendPostData({ postData }));
    setActivityDate("");
    setMoviePath("");
    setActivityTime(30);
    setComment("");
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-4">
          <label
            htmlFor="activityDate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            活動日
          </label>
          <input
            type="date"
            id="activityDate"
            value={activityDate}
            onChange={(e) => setActivityDate(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="moviePath"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            動画リンク
          </label>
          <input
            type="text"
            id="moviePath"
            value={moviePath}
            onChange={(e) => setMoviePath(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="activityTime"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            活動時間
          </label>
          <input
            type="number"
            id="activityTime"
            value={activityTime}
            onChange={(e) => setActivityTime(Number(e.target.value))}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            コメント
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
            placeholder="実施した筋トレの部位、回数、次回目標等"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={submitReset}
        >
          送信
        </button>
      </div>
    </div>
  );
};

export default Form;
