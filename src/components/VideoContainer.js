import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard, { Ad } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();

    window.addEventListener("scroll", handleScroll);
    return() =>  window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
      //console.log("fetch more data...");
      getVideos();
    };
  }

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    //console.log(json.items);
    setVideos((items) => [...items, ...json.items]);


  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id}  to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
      {videos[0] && <Ad info={videos[0]}/>}
    </div>
  );
};

export default VideoContainer;
