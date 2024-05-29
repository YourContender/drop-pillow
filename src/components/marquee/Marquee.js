import React from "react";
import "./Marquee.scss";

const Marquee = () => {
	return (
		<div className="marquee">
			<div className="marquee-inner run">
				<div className="marquee-inner-item">
					АКЦІЯ !!! ВСТИГНИ ПРИДБАТИ ПОДУШКУ ВСЬОГО ЗА <span>599</span> ГРН !!!
				</div>
				<div className="marquee-inner-item">
					АКЦІЯ !!! ВСТИГНИ ПРИДБАТИ ПОДУШКУ ВСЬОГО ЗА <span>599</span> ГРН !!!
				</div>
			</div>
		</div>
	);
};

export default Marquee;
