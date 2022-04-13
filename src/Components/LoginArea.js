import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const LoginArea = () => {
	const navigate = useNavigate();
	const { authState, authDispatch } = useAuth();

	const [userLogin, setUserLogin] = useState({
		email: "",
		password: "",
	});

	const userInputHandler = event => {
		setUserLogin(data => ({
			...data,
			[event.target.name]: event.target.value,
		}));
	};

	const userLoginHandler = async (email, password) => {
		console.log(email, password);
		try {
			const response = await axios.post("/api/auth/login", {
				email,
				password,
			});
			console.log(response.data);
			authDispatch({
				type: "USER-LOADING-SUCCESSFUL",
				payload: response.data.foundUser,
			});

			localStorage.setItem("token", response.data.encodedToken);

			navigate("/");
		} catch (error) {
			console.log(error.response.data);
		}
	};

	return (
		<div className="login-area">
			<h1 className="hd-m2-font heading-color std-font-two margin-bottom-s">
				Login
			</h1>
			<div className="first-input">
				<label
					className="para-m-font heading-color std-font-two margin-bottom-s"
					for="username"
				>
					Email address
				</label>
				<input
					className="input-field normal-input margin-bottom-m"
					type="text"
					value={userLogin.email}
					name="email"
					placeholder="booknook@gmail.com"
					onChange={userInputHandler}
				/>
			</div>
			<div className="second-input">
				<label
					className="para-m-font heading-color std-font-two margin-bottom-s"
					for="password"
				>
					Password
				</label>
				<input
					class="input-field normal-input margin-bottom-m"
					type="Password"
					value={userLogin.password}
					name="password"
					placeholder="●●●●●●●●●"
					onChange={userInputHandler}
				/>
			</div>
			<div className="third-input">
				<input className="checkbox" type="checkbox" />
				<label
					className="para-s-font heading-color margin-left-s"
					for="username"
				>
					Remember me
				</label>
				<Link to="" className="margin-auto heading-color ">
					Forgot your Password ?
				</Link>
			</div>

			<button
				class="primary-btn normal-btn btn-width"
				onClick={() => {
					userLoginHandler(userLogin.email, userLogin.password);
				}}
			>
				Login
			</button>

			<span className="login-close std-font-two">X</span>
		</div>
	);
};

export default LoginArea;
