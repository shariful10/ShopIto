import React from "react";
import styles from "./Slider.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slider = () => {
	return (
		<div className="slider">
			<AiOutlineArrowLeft onClick={prevSlide} className="arrow prev" />
			<AiOutlineArrowRight onClick={nextSlide} className="arrow next" />
		</div>
	);
};

export default Slider;
