import React from "react";
import main from "../../img/main.png";
import "./Main.scss";

export const Main = () => {
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="main">
			<div className="main_container">
				<div className="main_titles">
					<div className="main_title-container">
						<h1 className="main_title-h1">
							Ортопедична <span className="main_title-span">подушка</span>
						</h1>
						<span className="main_title-descr">
							для комфортного та якісного сну
						</span>
					</div>
					<button
						onClick={() => scrollToSection("product")}
						className="main_btn"
					>
						замовити зараз
					</button>
				</div>

				<div className="main_photo">
					<img src={main} alt="" />
				</div>
			</div>
		</section>
	);
};
