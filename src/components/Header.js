import React from "react";
import profile_url from "./assets/profile__img.png";
import shareIcon from "./assets/_Avatar share button (1).svg";
import dotIcon from "./assets/_Avatar share button.svg";
import cameraIcon from "./assets/Icon.svg";
import Hover from "./Hover";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center  px-5 py-4 gap-3 relative">
      <div className=" absolute top-[15%] right-[10%] md:right-[20%]">
        <img
          src={shareIcon}
          id="share-arrow-icon"
          className="hover:bg-custom-gray-100 w-10 h-10 rounded-full hidden md:block"
          alt="share-icon"
        />

        <img
          src={dotIcon}
          id="share-dot-icon"
          className=" w-8 h-8 rounded-full md:hidden hover:bg-custom-gray-100"
          alt="share-icon"
        />
      </div>

      <div id="profile_img_container" className=" cursor-pointer relative">
        <img
          src={profile_url}
          id="profile_img"
          className=" w-28 h-28 rounded-full"
          alt="profile_img"
        />
        <img
          src={cameraIcon}
          id="camera_icon"
          alt="camera-icon"
          className=" invisible absolute top-16 left-[40%]"
        />
        <Hover styles=" rounded-full invisible" />
      </div>

      <h3
        className=" font-medium text-base md:text-xl text-custom-text-black py-4"
        id="twitter"
      >
        Okediya Meshach Olubiyi
      </h3>
      <h3 id="slack" className=" hidden ">
        Oluwaseyi
      </h3>
    </div>
  );
};

export default Header;
