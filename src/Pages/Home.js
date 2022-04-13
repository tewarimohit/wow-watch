import React, { useEffect } from "react";
import "../Styles/Home.css";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import VideoCard from "../Components/VideosCard";
import { useVideos } from "../Context/videoContext";

const Home = () => {
	const { videos } = useVideos();

	return (
		<div className="page-container">
			<header className="page-header">
				<Header />
			</header>
			<div className="side-bar">
				<Sidebar />
			</div>
			<div className="info">
				<h1 className="std-font-two hd-m-font">Recommended</h1>
			</div>
			<div className="page-content">
				{videos.map(video => (
					<VideoCard key={video.id} video={video} />
				))}
			</div>
			<div className="footer"></div>
		</div>
	);
};

export default Home;
