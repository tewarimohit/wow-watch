import { Menu } from "@material-ui/icons";
import { SearchRounded } from "@material-ui/icons";
import { VideoCallRounded } from "@material-ui/icons";
import { MicNoneOutlined } from "@material-ui/icons";
import { AppsRounded } from "@material-ui/icons";
import { NotificationsActiveRounded } from "@material-ui/icons";
import "../Styles/Header.css";
import React from "react";
import "../Styles/Home.css";

const Header = () => {
	return (
		<div className="header">
			<div className="header-menu">
				<Menu />
				<div className="std-font-two hd-m2-font title">woWWatch</div>
			</div>
			<div className="header-search">
				<input type="text" placeholder="Search" />
				<SearchRounded className="search-btn" />
				<MicNoneOutlined className="search-btn" />
			</div>
			<div className="header-profile">
				<VideoCallRounded className="header-icons" />
				<AppsRounded className="header-icons" />
				<NotificationsActiveRounded className="header-icons" />
				<div className="user-image" title="Profile"></div>
			</div>
		</div>
	);
};

export default Header;
