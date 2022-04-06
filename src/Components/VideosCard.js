import React from "react";
import "../Styles/Videos.css";
import { ThumbUpAltRounded } from "@material-ui/icons";
import { WatchLaterRounded } from "@material-ui/icons";

const VideoCard = ({ image, title, uploaded, views, description }) => {
	return (
		<div className="card card-shadow">
			<div className="card-header card-image card-one" id="">
				<img src={image} alt="Video" srcset="" />
			</div>

			<div className="card-body">{title}</div>
			<span>{description}</span>
			<div className="card-footer">
				<p>{views} .{uploaded} </p>

				<div className="all-icon">
					<button className="icons">
						<ThumbUpAltRounded  />
					</button>

					<button className="icons">
					<WatchLaterRounded />
					</button>

					
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
