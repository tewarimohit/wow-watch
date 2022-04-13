import axios from "axios";
import { getToken } from "./Support";

const addToWatchLater = async (video, setWatchLater) => {
	try {
		const response = await axios.post(
			"/api/user/watchlater",
			{ video },
			{ headers: { authorization: getToken() } }
		);
		setWatchLater(response.data.watchlater);
	} catch (error) {
		console.log(error.response);
		alert(error.response.data.errors);
	}
};
export { addToWatchLater };
