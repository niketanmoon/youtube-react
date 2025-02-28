import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router";
import { YOUTUBE_VIDEO_DETAILS_API } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";

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
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div className="">
          <iframe
            width="900"
            height="400"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </div>
        {/* <div className="w-full">
          <LiveChat />
        </div> */}
      </div>
      <CommentsContainer />
    </div>
  );
};
export default WatchPage;
