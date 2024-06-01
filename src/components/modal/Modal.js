import React from "react";
import modal from "../../img/modal.png";
import "./Modal.scss";

export const Modal = ({ setOpenModal }) => {
	return (
		<div className="modal">
			<div className="modal_container">
				<button
					className="modal_container-close"
					onClick={() => setOpenModal(false)}
				>
					&times;
				</button>
				<img src={modal} alt="" />
				<div className="modal_text">
					<h1>Дякуємо за замовлення</h1>
					<h2>Наш менеджер з Вами зв'яжеться для уточнення замовлення.</h2>
				</div>
			</div>
		</div>
	);
};
