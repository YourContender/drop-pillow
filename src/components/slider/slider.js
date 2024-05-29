import React from "react";
import slide1 from "../../img/slide1.jpg";
import slide2 from "../../img/slide2.png";
import slide3 from "../../img/slide3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./slider.scss";
import { EffectCards } from "swiper/modules";

const Slider = () => {
	return (
		<>
			<Swiper
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img className="slider-photo" src={slide1} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="slider-photo" src={slide2} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="slider-photo" src={slide3} alt="" />
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Slider;
