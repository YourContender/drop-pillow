import React, { useState } from "react";
import { Header } from "./components/header/Header";
import "../src/index.css";
import { Main } from "./components/main/Main";
import Marquee from "./components/marquee/Marquee";
import { Modal } from "./components/modal/Modal";
import { Product } from "./components/product/Product";
import { Footer } from "./components/footer/Footer";

export const App = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<div className="container">
			<Header />
			<Main />
			<Marquee />
			<Product setOpenModal={setOpenModal} />
			{openModal ? <Modal setOpenModal={setOpenModal} /> : null}
			<Footer />
		</div>
	);
};
