import React from "react";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { MdOutlineSportsCricket } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { FaShoppingBag } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { MdOutlineFlag } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import { useSelector } from "react-redux";
import SidebarTwo from "./SidebarTwo";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) return <SidebarTwo/>;   //early return
  return (
    <div className="shadow-lg w-56 px-2 flex flex-col gap-4 h-screen ">
      <section>
        <ul className=" ml-3">
         <Link to={'/'}> <li className="py-2 flex gap-4">
            <MdHome size={25} /> Home
          </li>
        </Link>
          <li className="py-2 flex gap-5">
            <SiYoutubeshorts size={20} />
            Shorts
          </li>
          <li className="py-2 flex gap-5">
            <MdSubscriptions size={20} />
            Subscriptions
          </li>
        </ul>
      </section>
      <hr />
      <section>
        <h1 className="font-bold py-1">Subscriptions</h1>
        <ul className="ml-3">
          <li className="py-1 flex gap-4">
            <MdLibraryMusic size={20} />
            Music
          </li>
          <li className="py-1 flex gap-4">
            <MdOutlineSportsCricket size={20} />
            Sports
          </li>
          <li className="py-1 flex gap-4">
            <MdLocalMovies size={20} />
            Movies
          </li>
          <li className="py-1 flex gap-4">
            <FaNewspaper size={20} />
            News
          </li>
        </ul>
      </section>
      <hr />
      <section>
        <h1 className="font-bold py-1">Explore</h1>
        <ul className="ml-3 ">
          <li className="py-1 flex gap-4">
            <FiTrendingUp size={20} />
            Trending
          </li>
          <li className="py-1 flex gap-4">
            <FaShoppingBag size={20} />
            Shopping
          </li>
          <li className="py-1 flex gap-4">
            <FaBookReader size={20} />
            Courses
          </li>
          <li className="py-1 flex gap-4">
            <RiLiveFill size={20} />
            Live
          </li>
        </ul>
      </section>
      <hr />
      <section>
        <ul className="ml-3">
          <li className="py-1 flex gap-4">
            <IoSettings size={20} />
            Settings
          </li>
          <li className="py-1 flex gap-4">
            <MdOutlineFlag  size={20} />
            Report history
          </li>
          <li className="py-1 flex gap-4">
            <IoIosHelpCircleOutline size={20} />
            Help
          </li>
          <li className="py-1 flex gap-4">
            <VscFeedback size={20} />
            Send feedback
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
