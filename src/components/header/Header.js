import React from "react";
import logo from "../../img/logo.png";
import "./header.scss";

export const Header = () => {
	return (
		<header className="header">
			<img src={logo} alt="logo" />
			<div className="header_buttons">
				<button className="header_buttons-order">замовити зараз</button>
				<button className="header_buttons-write">написати нам</button>
			</div>
		</header>
	);
};
