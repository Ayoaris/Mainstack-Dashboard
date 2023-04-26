/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavItemMobile = ({ item }) => {
  const path = window.location.pathname;

  return (
    <div>
      <NavLink to={item.path}>
        <div
          className={`flex gap-x-4 items-center text-gray-600 pl-4 py-2 my-2 ${
            path === item.path &&
            "bg-[#FFEEE5] border-l-4 text-black font-bold  rounded-lg"
          }`}
        >
          <div>
            <img src={item.icon} alt="" />
          </div>
          <p className="text-md">{item.text}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default NavItemMobile;
