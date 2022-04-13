import { createContext, useState, useContext,useEffect } from "react";
import { getToken } from "../Utility.js/Support";
import { useAuth } from "./AuthContext";
import axios from "axios";

const LikedVideoContext = createContext(null);

const LikedVideosProvider = ({ children }) => {
	const{ authState }=useAuth();
	const [likedVideos, setLikedVideos] = useState([]);

	useEffect(() => {
		if (!authState.isAuth) return;

		(async () => {
			try {
				const response = await axios.get("/api/user/likes", {
					headers: {
						authorization: getToken(),
					},
				});

				setLikedVideos(response.data.likes);
				console.log(response.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<LikedVideoContext.Provider value={{ likedVideos, setLikedVideos }}>
			{children}
		</LikedVideoContext.Provider>
	);
};

const useLikedVideos = () => useContext(LikedVideoContext);

export { useLikedVideos, LikedVideosProvider };
