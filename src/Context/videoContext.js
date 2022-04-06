import { createContext,useContext,useState,useEffect } from "react";
import axios from "axios";

const VideoContext=createContext(null);

const VideoProvider=({children})=>{

const [videos,setVideos]=useState([]);


useEffect(() => {
    (async () => {
        try {
            const response = await axios.get("/api/videos");
            console.log(response.data.videos);
        } catch (error) {
            console.log(error);
        }
    })();
});


    return(
<VideoContext.Provider value={{videos,setVideos}}>
    {children}
</VideoContext.Provider>
    );
}

const useVideos=()=>useContext(VideoContext);

export { VideoProvider,useVideos };