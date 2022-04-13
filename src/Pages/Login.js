import React from "react";
import Header from "../Components/Header";
import LoginArea from "../Components/LoginArea.js";
import "../Styles/Login.css";
import "../Styles/Home.css";

const Login = () => {
	return (
		<div>
			<header className="page-header">
				<Header />
			</header>

			<div className="login-page-body">
				<LoginArea />
			</div>
		</div>
	);
};

export default Login;