import MenuLogo from "../assets/img/hamburger-menu.png";
import YoutubeLogo from "../assets/img/youtube-logo.png";
import userAvatar from "../assets/img/user-avatar.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-xl items-center">
      {/* menu and logo */}
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="menu"
          src={MenuLogo}
          onClick={toggleMenuHandler}
        />

        <img className="h-8 mx-2" alt="youtube-logo" src={YoutubeLogo} />
      </div>
      {/* search bar */}
      <div className="col-span-10 text-center">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>

      {/* user avatar */}
      <div className="col-span-1">
        <img className="h-8" alt="user" src={userAvatar} />
      </div>
    </div>
  );
};

export default Head;
