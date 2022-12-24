import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
   const getChats = () => {
    const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
      setChats(doc.data());
    });
    return () => {
      unsub()
    }
   }

   currentUser.uid && getChats()
  }, [currentUser.uid]);
  
  const handleSelect = (u) => {
    dispatch({type : "CHANGE_USER" , payload : u });
  }


  
  return (
    <div className="">
     {Object.entries(chats).map(chat => (
          <div className="p-3 flex items-center gap-3 text-white hover:bg-[#2f2d52] cursor-pointer" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
          <img
            className="w-[50px] h-[50px] object-cover rounded-full"
            src={chat[1].userInfo.photoURL}
            alt=""
          />
          <div className="userChatInfo">
            <span className="text-[18px]">{chat[1].userInfo.displayName}</span>
            {/* <p className="text-[14px] text-[lightgray]">{chat[1].userInfo.lastMessage?.text}</p> */}
          </div>
        </div>
     ))}
    </div>
  );
};

export default Chats;
