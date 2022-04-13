import React from "react";
import "../Styles/Sidebar.css";
import Elements from "./Elements";
import { HomeRounded } from "@material-ui/icons";
import { WatchLaterRounded } from "@material-ui/icons";
import { ThumbUpAltRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";
const sidebar = () => {
	return (
		<div className="side-drawer">
			<Link to="/">
				<Elements  Icons={HomeRounded} title="Home" />
			</Link>
			<Link to="/liked">
				<Elements Icons={ThumbUpAltRounded} title="Liked" />
			</Link>
			<Link to="/watchlater">
				<Elements Icons={WatchLaterRounded} title="Watch Later" />
			</Link>
		</div>
	);
};

export default sidebar;
