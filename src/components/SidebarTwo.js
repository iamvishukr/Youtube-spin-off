import React from "react";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { FiTrendingUp } from "react-icons/fi";
import { Link } from "react-router-dom";


const SidebarTwo = () => {
  return (
    <div className="shadow-lg w-18 px-2 ">
      <ul className=" text-center gap-8 flex flex-col  ">
       <Link to={'/'}><li className="text-[12px]"><MdHome className="ml-6" size={25} />Home</li></Link>
        <li className="text-[12px]"><SiYoutubeshorts className="ml-6" size={20} />Shorts</li>
        <li className="text-[12px]"><MdSubscriptions className="ml-6" size={20} />Subscriptions</li>
        <li className="text-[12px]"><MdLibraryMusic className="ml-6" size={20} />Music</li>
        <li className="text-[12px]"><FiTrendingUp size={20} className="ml-6"/>Trending</li>
      </ul>
    </div>
  );
};

export default SidebarTwo;
