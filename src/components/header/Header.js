import React from "react";
import logo from "../../img/logo.png";
import "./header.scss";

export const Header = () => {
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<header className="header">
			<img src={logo} alt="logo" />
			<div className="header_buttons">
				<button
					className="header_buttons-order"
					onClick={() => scrollToSection("product")}
				>
					замовити зараз
				</button>
				<a
					href="https://t.me/your_contender"
					className="header_buttons-write"
					target="_blank"
				>
					написати нам
				</a>
			</div>
		</header>
	);
};
