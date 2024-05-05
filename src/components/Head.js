import React from "react";

const Head = () => {
  return (
    <div className="flex  shadow-lg p-3">
      <div className="flex gap-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
          alt="menu"
          className="h-8"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
          alt="youtube"
          className="h-8 "
        />
      </div>
      <div className="m-auto ">
        <input
          type="text"
          placeholder="Search"
          id=""
          className="border border-gray-400 w-[450px] px-3 py-2 rounded-l-3xl"
        />
        <button className="border border-gray-400 px-3 py-2 rounded-r-3xl border-l-0 bg-gray-100 text-gray-600">Search</button>
      </div>
      <div className="-my-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMfnEpNt3m7Gm_5RQO54mtgpmejdTziTlDkDD5IxnB8w&s" alt="user" className="h-16 " />
      </div>
    </div>
  );
};

export default Head;
