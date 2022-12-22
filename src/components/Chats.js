import React from "react";

const Chats = () => {
  return (
    <div className="">
      <div className="p-3 flex items-center gap-3 text-white hover:bg-[#2f2d52] cursor-pointer">
        <img
          className="w-[50px] h-[50px] object-cover rounded-full"
          src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
        <div className="userChatInfo">
          <span className="text-[18px] font-semibold">Jane</span>
          <p className="text-[14px] text-[lightgray]">Hello how are you</p>
        </div>
      </div>


      <div className="p-3 flex items-center gap-3 text-white hover:bg-[#2f2d52]">
        <img
          className="w-[50px] h-[50px] object-cover rounded-full"
          src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
        <div className="userChatInfo">
          <span className="text-[18px] font-semibold">John</span>
          <p className="text-[14px] text-[lightgray]">lets meet</p>
        </div>
      </div>

      <div className="p-3 flex items-center gap-3 text-white hover:bg-[#2f2d52]">
        <img
          className="w-[50px] h-[50px] object-cover rounded-full"
          src="https://t4.ftcdn.net/jpg/02/32/98/33/360_F_232983351_z5CAl79bHkm6eMPSoG7FggQfsJLxiZjY.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span className="text-[18px] font-semibold">Doe</span>
          <p className="text-[14px] text-[lightgray]">Join us</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
