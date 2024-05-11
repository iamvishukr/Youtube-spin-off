import React from "react";

const VideoCard = ({ info }) => {
  if (!info) {
    return <div>No information available</div>;
  }

  const { snippet, statistics } = info;
  const { thumbnails, channelTitle, title } = snippet;
  //console.log(info)
  // if (statistics.viewCount >= 1000000 ) {
  //   return 
  // }
  return (
    <div className="p-2 m-2 w-80 ">
      <img src={thumbnails.medium.url} className="rounded-lg" alt="thumbnail" />
      <ul>
        <li className="font-semibold py-2">{title}</li>
        <li className="text-gray-500">{channelTitle}</li>
        <li className="text-gray-600">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

  export const Ad = ({info})=> {
    return (
      <div className="border border-red-600 p-4 m-2" title="Ad">
        <VideoCard info={info}>
          <h2 className="align-text-top font-bold text-black">Ad *</h2>
        </VideoCard>
      </div>
    )
  }
export default VideoCard;
