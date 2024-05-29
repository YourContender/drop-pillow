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
				<h2>Введіть дані для відправки</h2>
				<div className="modal-forms">
					<input type="text" placeholder="введіть номер телефону" />
					<input type="text" placeholder="введіть місто проживання" />
					<input type="text" placeholder="введіть № відділення НП" />
				</div>

				<button className="modal_container-send">Відправити</button>
			</div>
		</div>
	);
};
