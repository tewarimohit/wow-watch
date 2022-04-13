import React from "react";
import Header from "../Components/Header";
import LikedVideoCard from "../Components/LikedVideoCard";
import Sidebar from "../Components/Sidebar";

import "../Styles/Home.css";

const Liked = () => {
	return (
		<div className="page-container">
			<header className="page-header">
				<Header />
			</header>
			<div className="side-bar">
				<Sidebar />
			</div>
			<div className="info">
				<h1 className="std-font-two hd-m-font">Liked Videos</h1>
			</div>
			<div className="page-content">
				<LikedVideoCard />
			</div>
			<div className="footer"></div>
		</div>
	);
};

export default Liked;
