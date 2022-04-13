import { useContext, useState, createContext, useEffect } from "react";
import { getToken } from "../Utility.js/Support";
import { useAuth } from "./AuthContext";
import axios from "axios";

const WatchLaterContext=createContext(null);

const WatchLaterProvider =({children})=>{
	const{ authState }=useAuth();
const [watchLater,setWatchLater]=useState([]);

useEffect(() => {
    if (!authState.isAuth) return;

    (async () => {
        try {
            const response = await axios.get("/api/user/watchlater", {
                headers: {
                    authorization: getToken(),
                },
            });

            setWatchLater(response.data.watchlater);
        } catch (error) {
            console.log(error);
        }
    })();
}, []);

    return(
<WatchLaterContext.Provider value={{watchLater,setWatchLater}}>
    {children}
</WatchLaterContext.Provider>


    );
}

const useWatchLater=()=>useContext(WatchLaterContext);

export {useWatchLater,WatchLaterProvider};
