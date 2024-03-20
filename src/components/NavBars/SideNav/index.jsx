import React from "react";

import MenuIcon1 from "../../../_assets/sidebar/menu-icon-1.svg";
import MenuIcon2 from "../../../_assets/sidebar/menu-icon-2.svg";
import MenuIcon3 from "../../../_assets/sidebar/menu-icon-3.svg";
import MenuIcon4 from "../../../_assets/sidebar/menu-icon-4.svg";
import MenuIcon5 from "../../../_assets/sidebar/menu-icon-5.svg";
import MenuIcon6 from "../../../_assets/sidebar/menu-icon-6.svg";
import MenuIcon7 from "../../../_assets/sidebar/menu-icon-7.svg";
import MenuIcon8 from "../../../_assets/sidebar/menu-icon-8.svg";
import MenuIcon9 from "../../../_assets/sidebar/menu-icon-9.svg";

const menuList = [
  {
    label: "Menu1",
    icon: MenuIcon1,
  },
  {
    label: "Menu2",
    icon: MenuIcon2,
  },
  {
    label: "Menu3",
    icon: MenuIcon3,
  },
  {
    label: "Menu4",
    icon: MenuIcon4,
  },
  {
    label: "Menu5",
    icon: MenuIcon5,
  },
  {
    label: "Menu6",
    icon: MenuIcon6,
  },
  {
    label: "Menu7",
    icon: MenuIcon7,
  },
  {
    label: "Menu8",
    icon: MenuIcon8,
  },
  {
    label: "Menu9",
    icon: MenuIcon9,
  },
];

function SideNav() {
  return (
    <div className="side-nav d-flex flex-column gap-2 justify-content-start align-items-center p-2 h-100">
      {menuList.map((menu, idx) => {
        return <NavMenu key={idx} label={menu.label} icon={menu.icon} />;
      })}
    </div>
  );
}

const NavMenu = ({ label = "", icon, onClick = () => {} }) => {
  return (
    <button onClick={onClick} className="btn text-dark p-1 m-2 my-3">
      <img src={icon} alt={label} width="20px" />
    </button>
  );
};

export default SideNav;
