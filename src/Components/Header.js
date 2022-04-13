import {
	Menu,
	SearchRounded,
	VideoCallRounded,
	MicNoneOutlined,
	AppsRounded,
	NotificationsActiveRounded,
} from "@material-ui/icons";
import "../Styles/Header.css";
import React from "react";
import "../Styles/Home.css";
import { Link, useNavigate } from "react-router-dom";
import { useLikedVideos } from "../Context/LikedVideosContext";
import { useWatchLater } from "../Context/WatchLaterContext";
import { useAuth } from "../Context/AuthContext";

const Header = () => {
	const { likedVideos, setLikedVideos }=useLikedVideos();
	const { watchLater,setWatchLater }=useWatchLater();
	const { authState }= useAuth();
	const navigate =useNavigate();


	const logoutHandler = () => {
		localStorage.clear("token");
		setCart([]);
		setWishlist([]);
		authState.isAuth = false;
	};


	return (
		<div className="header">
			<div className="header-menu">
				<Menu />
				<Link to="/">
					<div className="std-font-two hd-m2-font title ">woWWatch</div>
				</Link>
			</div>
			<div className="header-search">
				<input type="text" placeholder="Search" />
				<SearchRounded className="search-btn" />
				<MicNoneOutlined className="search-btn" />
			</div>
			<div className="header-profile">
			{authState.isAuth ? (
					<Link
						to="/login"
						className="link prime-link1 link-text login-color"
						onClick={logoutHandler}
					>
						Logout
					</Link>
				) : (
					<Link to="/login" className="link prime-link1 link-text login-color">
						Login
					</Link>
				)}
				<VideoCallRounded className="header-icons" />
				<AppsRounded className="header-icons" />
				<NotificationsActiveRounded className="header-icons" />
				<div className="user-image" title="Profile"></div>
			</div>
		</div>
	);
};

export default Header;
