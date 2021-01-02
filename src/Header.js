import React from "react";
import "./Header.css";
import { Avatar, Icon, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SettingsIcon from "@material-ui/icons/Settings";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

export default function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    })
  };
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </div>

      <div className="header_middle">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search mail" type="text" />
        <IconButton>
          <ArrowDropDownIcon className="header_inputCaret" />
        </IconButton>
      </div>

      <div className="header_right">
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <Avatar  onClick={logOut} src={user?.photoUrl} />
        </IconButton>
      </div>
    </div>
  );
}
