import React, { useState } from "react";
import Avatar from "../assests/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const [isLaoding, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
   

      // Upload file and metadata to the object 'images/mountains.jpg'
      const date = new Date().getTime();
      const storageRef = ref(storage, `images/${displayName + date}`);
      //const uploadTask = uploadBytesResumable(storageRef, file);

      // Listen for state changes, errors, and completion of the upload.
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
            setIsLoading(false)
          } catch (err) {
            console.log(err);
            setErr(true);
            setIsLoading(false)
            //setLoading(false);
          }
        });
      });

    } catch (error) {
      setErr(true);
      console.log(error.message)
    }
  };
  return (
    <div className="h-screen  flex items-center justify-center bg-[#a7bcff] ">
      <div className="bg-white py-6 px-10 flex flex-col gap-5 items-center">
        <span className="text-[#5d5b8d] font-semibold text-[22px]">WeChat</span>
        <span className="text-[#5d5b8d] font-semibold text-[18px]">
          Register 
        </span>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            className="p-3 md:min-w-[250px] border-0 border-b-2 border-solid focus:outline-none"
            type="text"
            placeholder="Display Name"
          />
          <input
            className="p-3 md:min-w-[250px] border-0 border-b-2 border-solid focus:outline-none"
            type="email"
            placeholder="Email"
          />
          <input
            className="p-3 md:min-w-[250px] border-0 border-b-2 border-solid focus:outline-none"
            type="password"
            placeholder="Password"
          />
          <label
            htmlFor="file"
            className="flex items-center gap-3 text-[13px] text-[#5d5b8d] cursor-pointer"
          >
            <img className="w-[50px]" src={Avatar} alt="avatar" />
            <span>Add an avatar</span>
          </label>
          <input
            className="p-3 hidden"
            type="file"
            id="file"
            placeholder="Add an avatar"
          />
          <button className="p-3 text-white border-none bg-[#7b96ec] font-semibold cursor-pointer">
              {isLaoding ?  <Loader/> : "Sign Up"}
          </button>
          {err && <span>Something went Wrong</span>}
        </form>
        <div>
          <p className="text-[#5d5b8d] text-[12px] mt-1">
            You do have an account? <b className="cursor-pointer"> <Link to="/login">Login</Link> </b>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
