import React from "react";
import img4 from "../../img/img4.jpg";
import "./Product.scss";

export const Product = () => {
	return (
		<div className="product">
			<div>
				<img src={img4} alt="" />
			</div>
			<div className="product_descr">
				<h1>ПОДУШКА З ПАМ'ЯТТЮ MEMORY LATEX PILLOW</h1>
				<p>
					ціна - 599 грн. <span className="product_descr-old">899</span>
				</p>
				<div>
					<div className="product_forms">
						<div className="input-box">
							<input type="text" required />
							<label>Ваше ім'я</label>
						</div>

						<div className="input-box">
							<input type="text" required />
							<label>Ваш номер телефону</label>
						</div>

						<button>Замовити</button>
					</div>
				</div>
			</div>
		</div>
	);
};
