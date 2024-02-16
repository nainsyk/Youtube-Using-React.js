import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoHomeFill, GoHistory } from "react-icons/go";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import { MdSubscriptions, MdOutlineWatchLater } from "react-icons/md";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { BiLike, BiNews } from "react-icons/bi";
import { PiUserRectangleLight, PiFilmSlate } from "react-icons/pi";
import { BsFire } from "react-icons/bs";
import { CiMusicNote1 } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";




const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
     //Early return pattern
    if(!isMenuOpen) return null;

  return (
    <div className="p-3 shadow-lg w-48 text-sm">
       <ul>
          <li className="flex gap-x-5 mt-1 hover:bg-gray-200 hover:font-semibold px-6 py-2 rounded-lg"><GoHomeFill className="text-2xl" /><Link to="/">Home</Link></li>
          <li className="flex gap-x-5 hover:bg-gray-200 px-6 py-2 rounded-lg"><SiYoutubeshorts className="text-2xl" />Shorts</li>
          <li className="flex gap-x-5 hover:bg-gray-200 px-6 py-2 rounded-lg"><MdSubscriptions className="text-xl"/>Subscriptions</li>
       </ul>
    <h1 className="font-bold gap-2 pt-5 ml-2 text-lg flex mb-2">You<LiaGreaterThanSolid className="mt-[0.35rem]" /></h1>
       <ul>
          <li className="flex gap-x-5 hover:bg-gray-200 px-6 py-2 rounded-lg"><GoHistory className="text-lg" />History</li>
          <li className="flex gap-x-5 hover:bg-gray-200 px-6 py-2 rounded-lg"><MdOutlineWatchLater className="text-xl" />Watch Later</li>
          <li className="flex gap-x-5 hover:bg-gray-200 px-6 py-2 rounded-lg"><BiLike className="text-xl" />Liked videos</li>
          <li className="flex gap-x-5 hover:bg-gray-200 px-6 py-2 rounded-lg"><PiUserRectangleLight className="text-xl" />Your channel</li>
       </ul>
    <h1 className="font-bold gap-2 pt-5 ml-2 text-lg flex mb-2">Explore</h1>
       <ul>
          <li className="flex gap-x-5 hover:bg-gray-200 px-6 py-2 rounded-lg"><BsFire className="text-xl rotate-45" />Trending</li>
          <li className="flex gap-x-5 hover:bg-gray-200 px-6 py-2 rounded-lg"><CiMusicNote1 className="text-xl" />Music</li>
          <li className="flex gap-x-5 hover:bg-gray-200 px-6 py-2 rounded-lg"><PiFilmSlate className="text-xl" />Films</li>
          <li className="flex gap-x-5 hover:bg-gray-200 px-6 py-2 rounded-lg"><SiYoutubegaming className="text-xl" />Gaming</li>
          <li className="flex gap-x-5 hover:bg-gray-200 px-6 py-2 rounded-lg"><BiNews className="text-xl"/>News</li>
          <li className="flex gap-x-5 hover:bg-gray-200 px-6 py-2 rounded-lg"><HiOutlineShoppingBag className="text-xl"/>Shopping</li>
       </ul>
    </div>
  )
};

export default Sidebar;