import React from "react";
import img5 from "../../img/img5.png";
import "./footer.scss";

export const Footer = () => {
	return (
		<footer className="footer">
			<img src={img5} alt="img" />

			<div className="footer_container">
				<h2>
					<span>Ортопедична подушка</span> – це гарантія здорового та міцного
					сну! Вона забезпечує власнику свіжий вигляд, дозволяє покращити
					самопочуття, додає бадьорості та сил. Виріб використовується для
					профілактики захворювань хребта та допомагає організувати комфортний
					нічний відпочинок.
				</h2>
				<h1>Встигни !</h1>
				<span className="footer_container-text">
					Придбати зі знижкою якісну та комфортну подушку. Ваш організм скаже
					Вам дякую.
				</span>
			</div>
		</footer>
	);
};
