import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constant";
import { useSearchParams } from "react-router-dom";

const Comments = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('v'));
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/commentThreads?key="+GOOGLE_API_KEY+"&textFormat=plainText&part=snippet&videoId="+searchParams.get('v')+"&maxResults=50"

      );
      const data = await response.json();
      //console.log(data)
      setComments(data.items);
      
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <p>{comments?.length} Comments</p>
      {comments?.map((comment) => {
        const {
          authorDisplayName,
          authorProfileImageUrl,
          textDisplay,
          publishedAt,
          likeCount,
        } = comment.snippet.topLevelComment.snippet;
        return (
          <div key={comment.id} className="flex gap-4 my-4">
            <img
              src={authorProfileImageUrl}
              alt="author"
              className="rounded-full h-10"
            />
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <h3 className="text-md font-semibold text-gray-700">
                  {authorDisplayName}
                </h3>{" "}
              </div>
              <p>{textDisplay}</p>
              <div className="flex items-center gap-2">
                Likes: {likeCount}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
