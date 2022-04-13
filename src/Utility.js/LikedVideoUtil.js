import axios from "axios";
import { getToken } from "./Support";


 const addToLikedVideos = async (video, setLikedVideo) => {
	
    try {
        const response = await axios.post(
          "/api/user/likes",
          { video },
          {
            headers: {
              authorization: getToken(),
            },
          }
        );
       setLikedVideo(response.data.likes);
      } catch (error) {
        console.log(error);
        alert(error.response.data);
      }
};



export { addToLikedVideos }