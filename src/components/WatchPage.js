import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import ScrollToTop from "./ScrollToTop";


const WatchPage = () => {
  
  const [searchParams] = useSearchParams();
 console.log(searchParams.get('v'));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);


  return (
    <div className="p-4 mx-32 ">
      <iframe
        className="rounded-xl"
        width="850"
        height="450"
        src={"https://www.youtube.com/embed/" + searchParams.get('v')+"?autoplay=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
        allowFullScreen
      ></iframe>

      <div>
      <ScrollToTop />
        <Comments />
      </div>
    </div>
  );
};

export default WatchPage;
