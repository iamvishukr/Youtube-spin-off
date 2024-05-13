import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { IoMdSearch } from "react-icons/io";

import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex  p-3">
      <div className="flex gap-6">
        <GiHamburgerMenu
          className="cursor-pointer ml-6"
          size={25}
          onClick={() => toggleMenuHandler()}
        />
        <FaYoutube size={40} className="-mt-1 cursor-pointer" color="purple" />
        <h1 className="text-2xl font-bold -ml-5">WhoTube</h1>
      </div>
      <div className="m-auto ">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-400 w-[450px] px-3 py-2 rounded-l-3xl"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 px-4 py-2  rounded-r-3xl  border-l-0 bg-gray-100 text-gray-600 ">
          Search
        </button>
        <div className="fixed py-2 px-0 bg-white w-[27rem] ml-4 shadow-lg rounded-lg border-gray-200">
          <ul>
            {suggestions.map((suggestion) => (
              <li className="flex hover:bg-slate-100  gap-2 px-3">
                <IoMdSearch className="mt-1 " />
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <FaRegUserCircle size={40} />
      </div>
    </div>
  );
};

export default Head;
