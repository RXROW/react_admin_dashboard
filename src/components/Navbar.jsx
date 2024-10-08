import React ,{useEffect} from "react";
import { useStateContext } from "../context/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../data/avatar.jpg";
import Cart from "../components/Cart";
import Chat from "../components/Chat";
import Notifications from "../components/Notifications";
import UserProfile from "../components/UserProfile";

const NavButton = ({ title, customFun, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFun}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ backgroundColor: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
 
    setActiveMenu,
 
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor
  } = useStateContext();

  useEffect(() => {
    
    const handleResize=()=>setScreenSize(window.innerWidth);
    window.addEventListener('resize',handleResize);
    handleResize();
    return () => {
    window.removeEventListener('resize',handleResize)
    };
  }, [setScreenSize]);

  useEffect(() => {
  if(screenSize<=900){
  setActiveMenu(false);
  }else{
  setActiveMenu(true)
  }
    
     
  }, [screenSize ,setActiveMenu]);

  return (
    <div className="flex items-center justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFun={() => setActiveMenu((prev) => !prev)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFun={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFun={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          dotColor="#03C9D7"
          customFun={() => handleClick("notifications")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 rounded-lg hover:bg-light-gray"
            onClick={() => handleClick("userProfile")}
          >
            <img
              src={avatar}
              alt="user profile"
              className="rounded-full w-8 h-8"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="font-bold ml-1 text-14 text-gray-400">
                Micheel
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notifications && <Notifications />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
