import { createContext, useState, useContext } from "react";

const LikedVideoContext = createContext(null);

const LikedVideosProvider = ({ children }) => {
	const [likedVideos, setLikedVideos] = useState([]);

	return (
		<LikedVideoContext.Provider value={{ likedVideos, setLikedVideos }}>
			{children}
		</LikedVideoContext.Provider>
	);
};

const useLikedVideos = () => useContext(LikedVideoContext);

export { useLikedVideos, LikedVideosProvider };
