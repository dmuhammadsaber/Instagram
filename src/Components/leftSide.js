import "./leftSide.css";
import instalogo from "../assets/Instalogo.png";
import Profile from "../assets/profile.avif";
import { GoHomeFill } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";
import { SlMenu } from "react-icons/sl";

const leftSide = () => {
  return (
    <div className="leftSidePart">
      <div className="logoPart">
        <img className="logoImg" src={instalogo} alt="logo" />
      </div>
      <div className="navLinkPart">
        <div className="navLink">
          <GoHomeFill className="icon" />
          <div className="navName" style={{ fontWeight: "800" }}>
            Home
          </div>
        </div>
        <div className="navLink">
          <IoSearchSharp className="icon" />
          <div className="navName">Search</div>
        </div>
        <div className="navLink">
          <MdOutlineExplore className="icon" />
          <div className="navName">Explore</div>
        </div>
        <div className="navLink">
          <PiVideoFill className="icon" />
          <div className="navName">Reels</div>
        </div>
        <div className="navLink">
          <RiMessengerLine className="icon" />
          <div className="navName">Messages</div>
        </div>
        <div className="navLink">
          <FaRegHeart className="icon" />
          <div className="navName">Notifications</div>
        </div>
        <div className="navLink">
          <FaRegSquarePlus className="icon" />
          <div className="navName">Create</div>
        </div>
        <div className="navLink">
          <img className="ProfileImg" src={Profile} alt="profile" />
          <div className="navName">Profile</div>
        </div>
        <div className="navLink" style={{ marginTop: "70px" }}>
          <SlMenu className="icon" />
          <div className="navName">More</div>
        </div>
      </div> 
    </div>
  )
}

export default leftSide
