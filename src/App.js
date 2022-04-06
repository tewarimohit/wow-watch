import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
