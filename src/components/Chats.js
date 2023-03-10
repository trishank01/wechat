import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const { data } = useContext(ChatContext);
  //console.log(data.user.uid)
  //console.log(Object.entries(chats)[1][1].userInfo.uid)

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
     {Object.entries(chats)?.sort((a , b) => b[1].date - a[1].date).map(chat => (
          <div className={`p-3 flex items-center gap-3 text-white hover:bg-[#2f2d52] cursor-pointer ${data.user.uid === chat[1].userInfo.uid ? "bg-slate-500" : ""}`} key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
          <img
            className="w-[50px] h-[50px] object-cover rounded-full"
            src={chat[1].userInfo.photoURL}
            alt=""
          />
          <div className="userChatInfo">
            <span className="text-[18px]">{chat[1].userInfo.displayName}</span>
            <p className="text-[14px] text-[lightgray]">{chat[1].lastMessage?.text}</p>
          </div>
        </div>
     ))}
    </div>
  );
};

export default Chats;
