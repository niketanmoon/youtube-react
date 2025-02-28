import MenuLogo from "../assets/img/hamburger-menu.png";
import YoutubeLogo from "../assets/img/youtube-logo.png";
import userAvatar from "../assets/img/user-avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../redux/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    // apply debouncing
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      if (showSuggestions) {
        setShowSuggestions(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showSuggestions]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    if (suggestions.length > 0) {
      // update cache
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    }
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
        <Link to="/">
          <img
            className="h-8 mx-2 cursor-pointer"
            alt="youtube-logo"
            src={YoutubeLogo}
          />
        </Link>
      </div>
      {/* search bar */}
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[25.5rem] shadow-lg rounded-lg border border-gray-200">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-200">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* user avatar */}
      <div className="col-span-1">
        <img className="h-8" alt="user" src={userAvatar} />
      </div>
    </div>
  );
};

export default Head;
