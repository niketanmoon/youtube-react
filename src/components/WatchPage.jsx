import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router";
import { YOUTUBE_VIDEO_DETAILS_API } from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videos = useSelector((store) => store.video.videoList);
  if (!videos) return null;
  const videoId = searchParams.get("v");
  const filteredVideo = videos.filter((video) => video.id === videoId)[0];
  const { snippet, statistics } = filteredVideo;
  const { channelTitle, title, thumbnails } = snippet;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="p-2 m-2">
      <iframe
        width={1000}
        height={450}
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
        allowFullScreen
      ></iframe>
      <span className="font-bold text-2xl">{title}</span>
    </div>
  );
};
export default WatchPage;
