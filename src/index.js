import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { WatchLaterProvider } from "./Context/WatchLaterContext";
import { LikedVideosProvider } from "./Context/LikedVideosContext";
import { VideoProvider } from "./Context/videoContext";
import { AuthProvider } from "./Context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<VideoProvider>
					<WatchLaterProvider>
						<LikedVideosProvider>
							<App />
						</LikedVideosProvider>
					</WatchLaterProvider>
				</VideoProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
