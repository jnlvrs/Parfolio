import React, { useState } from "react";

import * as CgIcons from "react-icons/cg";
import { Link } from "react-scroll";
import { SidebarData } from "../Utils/SidebarData";

import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="navbar-container">
      <IconContext.Provider value={{ color: "#f6fafb" }}>
        <div className="navbar bg5">
          <Link to="#" className="menu-bars">
            <CgIcons.CgMenuGridR onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "bg5 nav-menu active" : "bg5 nav-menu"}>
          <ul className="nav-menu-items">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.title} onClick={showSidebar}>
                    {item.icon}
                    <span className="span-menu">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
