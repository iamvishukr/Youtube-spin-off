import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSllice";
import { generateRandomNames } from "../utils/helper";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [liveMessage, setLiveMessage] = useState();

  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // console.log("API POLLING");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: "hey there ! call me " + generateRandomNames() + " ⚡",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="px-4 py-1 rounded-2xl border border-gray-300 ml-4">
      <div className=" text-center">Live Chat</div>

      <div className="p-2 ml-2 border border-gray-300 w-[400px] h-[450px] rounded-2xl shadow-xl bg-gray-50 overflow-y-scroll flex flex-col-reverse mb-3">
        {chatMessage.map((c, i) => (
          <ChatMessage name={c.name} key={i} message={c.message} />
          //I have provided key as index just for example, we should always avoid giving index as key
        ))}
      </div>
      <form
        className="border border-gray-500 px-4 py-1 rounded-2xl"
        onSubmit={(e) => {
          e.preventDefault();
          
          dispatch(
            addMessage({
                name: "Vishal",
                message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        
      >
        <input
          type="text"
          placeholder="type"
          className="w-80 border border-none"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
            
        />
        <button
          className="items-center px-4 bg-green-200 py-1"
          
        >
          <RiArrowRightDoubleFill className="text-center " />
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
