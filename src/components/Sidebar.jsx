import {useState} from "react"
import { navContent } from "./data";
import { navContent2 } from "./data";
import { navContent3 } from "./data";
import NavItem from "./NavItem";
import NavItemMobile from "./NavItemMobile";
import useMediaQuery from "./hooks/UseMediaQuery";
import Logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbDots } from "react-icons/tb";
import profilePic from "../assets/profilePic.svg";

const SideBar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMeduimScreen = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isAboveMeduimScreen ? (
        <div className="lg:h-[113vh] px-12 border-r-2">
          <div className="my-8">
            <img src={Logo} alt="Mainstack-logo" />
          </div>

          <div className="mt-8">
            {navContent.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-8">
            <p className="text-xs"> OTHERS 1</p>
            {navContent2.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-8">
            <p className="text-xs">OTHERS 2</p>
            {navContent3.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </div>

          <div className="flex pt-14 justify-between">
            <div className="flex items-center mr-10">
              <img
                src={profilePic}
                alt=""
                width="50px"
                height="50px"
                className=" rounded-full"
              />
              <p className="text-center mx-2 ">Blessing Daniels</p>
            </div>

            <div className="flex items-center ">
              <TbDots size={24} />
            </div>
          </div>
        </div>
      ) : (
        <button
          className=" flex justify-between rounded-lg l w-[95%] bg-white p-2 my-2 mx-2 border-4  overflow-y-scroll z-50 border-[#FFEEE5] "
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <img src={Logo} alt="Mainstack-logo" />
          <GiHamburgerMenu className="h-6 w-8 text-black" />
        </button>
      )}

      {!isAboveMeduimScreen && isMenuToggled && (
        <div className="fixed top-0 right-0 h-screen w-screen bg-white z-50 ">
          {/* Close Icon */}
          <div className="flex justify-end">
            <button
              className="flex justify-between rounded-lg l w-[95%] bg-white p-2 my-2 mx-2 border-4  overflow-y-scroll z-50 border-[#FFEEE5]"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img src={Logo} alt="Mainstack-logo" />
              <GiHamburgerMenu className="h-6 w-8 text-black" />
            </button>
          </div>
          <div className="px-6">
            <div className="mt-8 ">
              {navContent.map((item) => (
                <NavItemMobile key={item.id} item={item} />
              ))}
            </div>
            <div className="mt-8">
              <p className="text-xs text-#56616B"> OTHERS 1</p>
              {navContent2.map((item) => (
                <NavItemMobile key={item.id} item={item} />
              ))}
            </div>
            <div className="mt-8">
              <p className="text-xs text-#56616B">OTHERS 2</p>
              {navContent3.map((item) => (
                <NavItemMobile key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="flex px-4 pt-14 justify-between">
            <div className="flex items-center mr-10">
              <img
                src={profilePic}
                alt=""
                width="50px"
                height="50px"
                className=" rounded-full"
              />
              <p className="text-center mx-2 ">Blessing Daniels</p>
            </div>

            <div className="flex items-center ">
              <TbDots size={24} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
