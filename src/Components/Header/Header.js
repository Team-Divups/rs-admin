import React from "react";
import "./Header.css";
import { Search, NotificationsNone } from "@material-ui/icons";

export default function Header() {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="topLeft">
          <span className="logo">Welcome to Review Spotter Admin Dashboard</span>
        </div>
        <div className="topRight">
            <div className="headerIconContainer">
                <Search />
                <span className="headerIconContainer"></span>
            </div>
            <div className="headerIconContainer">
                <NotificationsNone />
                <span className="headerIconBadge">2</span>
            </div>
            <div className="headerIconContainer">
                <span className="headerIconName" >Main User</span>
            </div>
            
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="headerAvatar" />
            </div>
      </div>
    </div>
  );
}