import React from "react";
import img4 from "../../img/img4.jpg";
import "./Product.scss";
import ProductForm from "./product-forms/ProductForms";

export const Product = ({ setOpenModal }) => {
	return (
		<div className="product" id="product">
			<div>
				<img src={img4} alt="" />
			</div>
			<div className="product_descr">
				<h1>ПОДУШКА З ПАМ'ЯТТЮ MEMORY LATEX PILLOW</h1>
				<p>
					ціна - <span className="product_descr-new">599</span> грн.{" "}
					<span className="product_descr-old">955</span>
				</p>
				<div>
					<ProductForm setOpenModal={setOpenModal} />
				</div>
			</div>
		</div>
	);
};
