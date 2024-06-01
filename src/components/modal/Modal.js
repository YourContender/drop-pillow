import React from "react";
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
				<h2>
					Дякуємо, наш менеджер з Вами зв'яжеться для уточнення замовлення.
				</h2>
			</div>
		</div>
	);
};
