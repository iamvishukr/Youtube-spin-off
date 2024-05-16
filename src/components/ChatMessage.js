import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="">
      <div className="mt-2 ml-2 items-center flex">
        <div>
          <span>
            <FaCircleUser size={20} />
          </span>
        </div>
        <div>
          <span className="font-semibold px-2">{name}</span>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
