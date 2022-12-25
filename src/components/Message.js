import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/authContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const [owner, setOwner] = useState(false);
  const [time, setTIme] = useState("");
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();


  useEffect(() => {
    let date = new Date(message?.date?.seconds * 1000);
    setTIme(date.toLocaleString('en-US', { hour: 'numeric',minute: 'numeric', hour12: true }))
  }, [message]);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      ref={ref}
      className={`flex gap-5 mb-4 ${
        message.senderId === currentUser.uid ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col text-gray-500 ">
        <img
          className={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{time}</span>
      </div>
      <div
        className={`max-w-[80%] flex flex-col gap-3 ${
          owner ? "items-end" : ""
        }`}
      >
        <p
          className={`max-w-[max-content] ${
            owner
              ? "bg-[#8da4fa] p-3 text-white rounded-r-xl rounded-b-xl"
              : "bg-white p-3 rounded-r-xl rounded-b-xl"
          }`}
        >
          {message.text}{" "}
        </p>
        {message.img && (
          <img
            className="w-[200px] h-[200px] bg-slate-500 rounded-lg object-contain"
            src={message.img}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Message;
