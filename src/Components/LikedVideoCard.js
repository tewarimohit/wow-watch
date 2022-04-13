import React from "react";
import "../Styles/Videos.css";
import { ThumbUpAltRounded } from "@material-ui/icons";
import { WatchLaterRounded } from "@material-ui/icons";
import { useLikedVideos } from "../Context/LikedVideosContext";

const LikedVideoCard = () => {
	const { likedVideos, setLikedVideos } = useLikedVideos();
	
	return (
		<>
			{likedVideos.map(each => {
				return (
					<div className="card card-shadow">
						<div className="card-header card-image card-one" id={each.id}>
							<img src={each.img} alt="Video" srcset="" />
						</div>
						<div className="card-body"></div>
						<span className="hd-m-font">{each.title}</span>
						<div className="card-footer">
							<p className="hd-s-font">{`- By ${each.creator}`}</p>
							<div className="all-icon">
								<p>1000 likes</p>
								<button className="icons" title="Like">
									<ThumbUpAltRounded />
								</button>
								<button className="icons" title="Watch Later">
									<WatchLaterRounded />
								</button>
							</div>
						</div>
						<p className="para-s-font">{each.description}</p>
					</div>
				);
			})}
		</>
	);
};

// <>
//                         // </>

export default LikedVideoCard;
