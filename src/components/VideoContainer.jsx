import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { addVideoList } from "../redux/videoSlice";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.video.videoList);

  useEffect(() => {
    !videos && getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(addVideoList(json.items));
  };

  if (!videos) return <Shimmer />;

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
