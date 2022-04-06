import React from "react";
import "../Styles/Sidebar.css";

const Elements = ({selected, Icons, title }) => {
	return (
		<div className={`sidebar  ${selected && "selected"}` }>
			<Icons className="sidebar-icons" />
			<h1 className="std-font-two hd-s-font">{title}</h1>
		</div>
	);
};

export default Elements;
