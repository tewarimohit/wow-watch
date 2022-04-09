import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { WatchLaterProvider } from "./Context/WatchLaterContext";
import { LikedVideosProvider } from "./Context/LikedVideosContext";
import { VideoProvider } from "./Context/videoContext";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<VideoProvider>
				<WatchLaterProvider>
					<LikedVideosProvider>
						<App />
					</LikedVideosProvider>
				</WatchLaterProvider>
			</VideoProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
