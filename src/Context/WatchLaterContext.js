import { useContext, useState, createContext } from "react";

const WatchLaterContext=createContext(null);

const WatchLaterProvider =({children})=>{

const [watchLater,setWatchLater]=useState([]);


    return(
<WatchLaterContext.Provider value={{watchLater,setWatchLater}}>
    {children}
</WatchLaterContext.Provider>


    );
}

const useWatchLater=()=>useContext(WatchLaterContext);

export {useWatchLater,WatchLaterProvider};
