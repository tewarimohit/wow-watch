import React from "react";
import "../Styles/Sidebar.css";
import Elements from "./Elements";
import { HomeRounded } from "@material-ui/icons";
import { WatchLaterRounded } from "@material-ui/icons";
import { ThumbUpAltRounded } from "@material-ui/icons";
const sidebar = () => {
	return (
		<div className="side-drawer">
			<Elements selected Icons={HomeRounded} title="Home" />
			<Elements Icons={ThumbUpAltRounded} title="Liked" />
			<Elements Icons={WatchLaterRounded} title="Watch Later" />
		</div>
	);
};

export default sidebar;
