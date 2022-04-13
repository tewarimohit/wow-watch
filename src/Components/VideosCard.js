import React from "react";
import "../Styles/Videos.css";
import { ThumbUpAltRounded } from "@material-ui/icons";
import { WatchLaterRounded } from "@material-ui/icons";
import { useLikedVideos } from "../Context/LikedVideosContext";
import { addToLikedVideos } from "../Utility.js/LikedVideoUtil";
import { getToken } from "../Utility.js/Support";
import { useNavigate } from "react-router-dom";
import { useWatchLater } from "../Context/WatchLaterContext";
import { addToWatchLater } from "../Utility.js/WatchLaterUtil";

const VideoCard = ({ video }) => {
	const navigate = useNavigate();
	const { likedVideos, setLikedVideos } = useLikedVideos();
	const { watchLater, setWatchLater } = useWatchLater();
	
	return (
		<div className="card card-shadow">
			<div className="card-header card-image card-one" id={video.id}>
				<img src={video.img} alt="Video" srcset="" />
			</div>

			<div className="card-body"></div>
			<span className="hd-m-font">{video.title}</span>
			<div className="card-footer">
				<p className="hd-s-font"> {`- By ${video.creator}`}</p>

				<div className="all-icon">
					<p>1000 likes</p>
					<button
						className="icons"
						title="Like"
						onClick={() => {
							if (getToken()) {
								if (likedVideos.find(item => item._id === video._id)) {
									console.log("Item is already there.");
								} else {
									addToLikedVideos(video, setLikedVideos);
								}
							} else {
								navigate("/login");
							}
						}}
					>
						<ThumbUpAltRounded />
					</button>

					<button
						className="icons"
						title="Watch Later"
						onClick={() => {
							if (getToken()) {
								if (watchLater.find(item => item._id === video._id)) {
									console.log("Item is already there.");
								} else {
									addToWatchLater(video, setWatchLater);
								}
							} else {
								navigate("/login");
							}
						}}
					>
						<WatchLaterRounded />
					</button>
				</div>
			</div>
			<p className="para-s-font">{video.description}</p>
		</div>
	);
};

export default VideoCard;
