/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const NavItem = ({ item }) => {
  const path = window.location.pathname;

  return (
    <div>
      <NavLink to={item.path}>
        <div
          className={`flex gap-x-4 items-center pl-4 py-2 my-2 w-12/12 ${
            path === item.path &&
            "text-[#FF5403]  text-base w-full pl-4 rounded-lg"
          }`}
        >
          <div>
            <img
              src={item.icon}
              alt=""
              className={`flex gap-x-4 items-center pl-4 py-2 my-2 w-12/12 ${
                path === item.path &&
                "text-[#FF5403]  text-base w-full pl-4 rounded-lg"
              }`}
            />
          </div>
          <p className="text-md">{item.text}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default NavItem;
