import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Liked from "./Pages/Liked";
import Login from "./Pages/Login";
import WatchLater from "./Pages/WatchLater";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/liked" element={<Liked />} />
				<Route path="/watchlater" element={<WatchLater />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
};

export default App;
