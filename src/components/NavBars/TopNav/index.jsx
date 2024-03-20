import React from "react";
import SearchBox from "../../UI/SearchBox";

import Logo from "../../../_assets/navbar/logo.png";
import User2 from "../../../_assets/users/user-2.png";

// Menus

import SettingsIcon from "../../../_assets/navbar/settings.svg";
import NotificationIcon from "../../../_assets/navbar/notification.svg";
import DayNightModeIcon from "../../../_assets/navbar/darklightmode.svg";
import MessageIcon from "../../../_assets/navbar/messages.svg";

function TopNav() {
  return (
    <div className="d-flex justify-content-between align-items-center p-3 shadow mb-4">
      <div className="d-flex justify-content-start align-items-center gap-2">
        <img src={Logo} alt="logo" width={"35%"} className="me-4" />
        <SearchBox />
      </div>
      <div className="d-flex justify-content-end align-items-center gap-5">
        <img
          className="mx-2"
          src={DayNightModeIcon}
          alt="Settings Icon"
          width={"20px"}
        />
        <img
          className="mx-2"
          src={MessageIcon}
          alt="Settings Icon"
          width={"20px"}
        />
        <img
          className="mx-2"
          src={NotificationIcon}
          alt="Settings Icon"
          width={"20px"}
        />
        <img
          className="mx-2"
          src={SettingsIcon}
          alt="Settings Icon"
          width={"20px"}
        />
        <img className="mx-2" src={User2} alt="User2" width={"30px"} />
      </div>
    </div>
  );
}

export default TopNav;
